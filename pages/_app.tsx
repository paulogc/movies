import { ThemeProvider } from "../app/theme/ThemeProvider";
import { PlaylistContextProvider } from "../app/context/PlaylistContext";
import Header from "../src/domain/shell/Header";
import Footer from "../src/domain/shell/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </PlaylistContextProvider>
  );
}

export default MyApp;
