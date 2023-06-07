import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  height: 100vh;
  padding: 20px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: #e1e1e1;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  height: 100%;
}

div#root {
  height: 100%;
  display: flex;
  flex-direction: column;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
	text-decoration: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}
`;
