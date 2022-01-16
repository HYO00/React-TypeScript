import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
      box-sizing: border-box;
  }
  body{

  }
  a{
      color:-webkit-link;
      text-decoration: underline;
      cursor: pointer;
  }
 h2{
  font-size: 1.5em;
  font-weight: bold;
 }

 div{
   display: block;
 }

 ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li{
  display: list-item;
    text-align: -webkit-match-parent;
}
  /*  글로벌 스타일 작성하기  */
`;