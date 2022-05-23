import { createGlobalStyle } from "styled-components";
import sky from "../assets/fonts/Skyfont-NonCommercial.otf";
import metropolis from "../assets/fonts/metropolis.regular.otf";
import city from "../assets/fonts/CityStencil.ttf";
import metropolisB from "../assets/fonts/metropolis.black.otf";
import newyork from "../assets/fonts/Newyorkcity.ttf";
import paris from "../assets/fonts/parisFont.otf";
import rio from "../assets/fonts/BuenosAiresNF.otf";
import tokyo from "../assets/fonts/Kamikaze3DGradient.ttf";

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  width: 100vw;
	background-color: #121212;
	font-family: 'metropolis'
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	box-sizing: border-box;
}
@font-face {
  font-family: 'sky';
  src: local('sky'), url(${sky});
}
@font-face {
  font-family: 'metropolis';
  src: local('metropolis'), url(${metropolis});
}
@font-face {
  font-family: 'city';
  src: local('city'), url(${city});
}
@font-face {
	font-family: 'metropolisB';
  src: local('metropolisB'), url(${metropolisB});
}
@font-face {
	font-family: 'ny';
  src: local('newyork'), url(${newyork});
}
@font-face {
	font-family: 'paris';
  src: local('paris'), url(${paris});
}
@font-face {
	font-family: 'rio';
  src: local('rio'), url(${rio});
}
@font-face {
	font-family: 'tokyo';
  src: local('tokyo'), url(${tokyo});
}
`;
