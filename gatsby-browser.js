import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

import "@fontsource/eb-garamond/400.css";

import "@fontsource/bowlby-one/400.css";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Seo } from "./src/components/seo";

const GlobalStyle = createGlobalStyle`
  body,
  #___gatsby {
    font-family: "Raleway", sans-serif;
    padding: 0px;
    margin: 0px;
    width: 100%;
    max-width: 100%;
  }

  strong {
    font-weight: 500;
  }

  .toast-root {
    width: auto;
  }

  @media (max-width: 600px) {
      .toast-root {
          width: 100vw;
      }
  }

  .toast-container {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      border-radius: 16px;
  }

  .toast-body {
      font-size: 16px;
      font-family: Raleway;
      padding: 0px 16px;
  }
`;

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <ThemeProvider theme={{ primary: "#EA4AC5" }}>{element}</ThemeProvider>
    </>
  );
};
