import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
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
