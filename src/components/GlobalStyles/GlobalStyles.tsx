import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');

      html {
        font-size: 16px;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: #1a202c;
        background-color: #fff;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: #3182ce;
        text-decoration: none;
        background-color: transparent;
      }
      a:hover {
        color: #2c5282;
        text-decoration: underline;
      }

      // Colors
      :root {
        --color-primary: #4f46e5;
        --color-primary-light: #63b3ed;
        --color-primary-dark: #2c5282;
        --color-secondary: rgba(241, 245, 249, 0.8);
        --color-secondary-light: rgba(241, 245, 249, 0.4);
        --color-secondary-dark: rgba(226, 232, 240, 1);
        --color-tertiary: #90cdf4;
        --color-tertiary-light: #bee3f8;
        --color-tertiary-dark: #3182ce;
        --color-divider: rgba(226, 232, 240, 0.8);
      }
    `}
  />
);
