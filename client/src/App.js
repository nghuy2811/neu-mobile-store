import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import SlideNav from "./components/SlideNav/SlideNav";

function App() {
  const [data, setData] = useState();

  let dataToSent = {
    cpu_cores: ["8", "4"],
    cpu_freq: [],
    screen: ["5,5"],
    memory_ram: ["1024"],
    memory_rom: [],
  };

  useEffect(() => {
    // axios.post("http://127.0.0.1:5000/database").then((res) => setData(res.data));
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/filter",
      data: dataToSent,
    }).then((res) => console.log(res.data));
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
