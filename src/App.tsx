import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared-styles/GlobalStyles";
import { theme } from "./shared-styles/theme";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
