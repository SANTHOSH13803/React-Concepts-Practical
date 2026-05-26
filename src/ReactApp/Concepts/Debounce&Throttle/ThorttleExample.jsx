import { useEffect } from "react";
import throttle from "./Throttle";

function App() {
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log(window.scrollY);
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: "200vh"
      }}
    >
      Scroll me
    </div>
  );
}

export default App;
