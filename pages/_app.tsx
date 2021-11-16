import { PlaylistContextProvider } from "../app/context/PlaylistContext";
import { ThemeContextProvider } from "../app/context/ThemeContext";
import Header from "../src/domain/shell/Header";
import Footer from "../src/domain/shell/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <ThemeContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeContextProvider>
    </PlaylistContextProvider>
  );
}

export default MyApp;
