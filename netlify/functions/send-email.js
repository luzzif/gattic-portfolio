const Sparkpost = require("sparkpost");
const emailClient = new Sparkpost(process.env.SPARKPOST_API_KEY);

exports.handler = async (event, context, callback) => {
  const { body } = event;
  if (!body) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing request body",
      }),
    });
  }
  const { from, name, text } = JSON.parse(body);
  const missingParams = [];
  if (!from) {
    missingParams.push("from");
  }
  if (!name) {
    missingParams.push("name");
  }
  if (!text) {
    missingParams.push("text");
  }
  if (missingParams.length > 0) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: `Missing request body params: ${missingParams.join(", ")}`,
      }),
    });
  }
  try {
    await emailClient.transmissions.send({
      content: {
        from,
        subject: `Portfolio contact from ${name}`,
        html: `<html><body>${text}</body></html>`,
      },
      recipients: [{ address: process.env.TO_ADDRESS }],
    });
    callback(null, { statusCode: 204 });
  } catch (error) {
    console.log("error sending email", error);
    callback(null, { statusCode: 500 });
  }
};
