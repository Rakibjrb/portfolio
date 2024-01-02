import { useEffect } from "react";
import AOS from "aos";
import Main from "./Layout/Main/Main";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
