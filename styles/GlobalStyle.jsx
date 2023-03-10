import styled, { createGlobalStyle } from "styled-components";
const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:link { color:white; text-decoration: none;}
 a:visited {color:white; text-decoration: none;}
  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    width:100%;
    height:100%;
    @media screen and (max-width: 1300px) {
      font-size: 9px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 8.75px;
    }
    @media screen and (max-width: 750px) {
      font-size: 8.125px;
    }
    @media screen and (max-width: 700px) {
      font-size: 7.5px;
    }
    @media screen and (max-width: 500px) {
      font-size: 6px;
    }
    @media screen and (max-width: 361px) {
      font-size: 5px;
    }
    @media screen and (max-width: 321px) {
      font-size: 4px;
    }
  }

  body { 
    padding: 0;
    margin: 0;
    height:100%;
    font-size: 1.6rem;
    /* font-family: 'Alice', sans-serif; */
    font-family: 'Noto Serif KR', serif;
    color:#252525;
    background-color: white;
    overflow-x: hidden;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    user-select:none
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/}
`;

const Body = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  /* overflow-x: hidden; */
  font-family: "Montserrat", sans-serif;
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Body>{children}</Body>
    </>
  );
}

export default GlobalStyle;
