// Je mehr hier drin definiert wird, desto besser einfacher können die Styles aus diesem Projekt herausgeführt werden
// Grundsätzlich, finde ich, macht es aber auch immer Sinn CSS Regeln, die nur in einer spezifischen Komponente verwendet werden nahe am React Code der Komponente (in den Styled Components für die)
import { createGlobalStyle } from 'styled-components'
import { linkStyle } from './mixins/linkStyle'

export const GlobalStyleSheet = createGlobalStyle`

html, body {
  padding: 0;
  margin: 0;
  font-family: Axiforma, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: #080B0F;
  min-height:100vh;
  scroll-behavior: smooth;
}
body{
  overflow-x: hidden;
}
#__next{
  min-height:100vh;
}

a {
  ${linkStyle};
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6 {
  margin-top:0;
}


`
