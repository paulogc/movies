import { ThemeProvider } from "../app/theme/ThemeProvider";
import { PlaylistContextProvider } from "../src/context/PlaylistContext";
import Navbar from "../src/domain/shell/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlaylistContextProvider>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlaylistContextProvider>
  );
}

export default MyApp;
