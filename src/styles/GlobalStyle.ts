import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
      box-sizing: border-box;
  }
  body{
    alink:red
  }
  a{
    text-decoration: underline;
    color:-webkit-link;
    cursor: pointer;
    
  }
  a:active{
      color: red;
    }
 
 h2{
  display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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
