"use client";
import { css, Global } from "@emotion/react";

const GlobalStyled = () => {
  const globalStyle = css`
    body {
      font-size: 14px;
      font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #333;
    }

    ul,
    ol {
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
      }
    }

    dl,
    dd {
      margin: 0;
    }

    p {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    img {
      max-width: 100%;
    }

    svg {
      display: inline-block;
      vertical-align: middle;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
    }

    input[type="number"] {
      appearance: textfield;
    }
  `;

  return <Global styles={globalStyle} />;
};

export default GlobalStyled;
