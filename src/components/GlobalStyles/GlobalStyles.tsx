import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
    <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

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
        --color-primary: #3182ce;
        --color-primary-light: #63b3ed;
        --color-primary-dark: #2c5282;
        --color-secondary: rgba(241,245,249,.8);
        --color-secondary-light: #fbd38d;
        --color-secondary-dark: rgba(226,232,240,.6);
        --color-tertiary: #90cdf4;
        --color-tertiary-light: #bee3f8;
        --color-tertiary-dark: #3182ce;
        --color-divider: rgba(226,232,240,.8);
    }
`} />
)