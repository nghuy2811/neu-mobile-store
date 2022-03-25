import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data.Name}</div>;
}

export default App;
