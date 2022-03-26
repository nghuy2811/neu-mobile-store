import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import SlideNav from "./components/SlideNav/SlideNav";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/database").then((res) => setData(res.data));
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <SlideNav />
      <div>Hello world</div>
    </>
  );
}

export default App;
