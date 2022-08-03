import GlobalStyle from "./styles/global";
import Head from "./components/headers";
import RoutesWeb from "./routers";

function App() {
  return (
    <>
      <Head />
      <RoutesWeb />
      <GlobalStyle />
    </>
  );
}

export default App;
