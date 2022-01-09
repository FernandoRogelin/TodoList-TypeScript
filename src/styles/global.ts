import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
`

export default globalStyles
