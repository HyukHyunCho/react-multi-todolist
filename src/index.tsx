import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-weight: 300;
    background-color: ${(props) => props.theme.bgColor};
    color: #000;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
