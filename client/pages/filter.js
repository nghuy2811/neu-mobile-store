import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import Category from "../components/Category";

const Filter = ({ data }) => {
  const [cpuCoresFilter, setCpuCoresFilter] = useState([]);
  const [cpuFreqFilter, setCpuFreqFilter] = useState([]);
  const [screenFilter, setScreenFilter] = useState([]);
  const [ramFilter, setRamFilter] = useState([]);
  const [romFilter, setRomFilter] = useState([]);
  const [dataFilterReceived, setDataFilterReceived] = useState();

  const dataToBeSent = {
    cpu_cores: cpuCoresFilter,
    cpu_freq: cpuFreqFilter,
    screen: screenFilter,
    memory_ram: ramFilter,
    memory_rom: romFilter,
  };

  useEffect(() => {
    const test = async () => {
      return await axios("http://127.0.0.1:5000/database", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToBeSent),
      });
    };

    test();

    // const dataToSend = JSON.stringify(dataToBeSent);
    // axios("http://127.0.0.1:5000/filter", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     " Access-Control-Allow-Origin": "*",
    //   },
    //   body: dataToSend,
    // })
    //   .then((resp) => {
    //     if (resp.status === 200) {
    //       console.log(resp);
    //       return resp.json();
    //     } else {
    //       console.log("Status: " + resp.status);
    //       return Promise.reject("server");
    //     }
    //   })
    //   .then((dataJson) => {
    //     setDataFilterReceived(JSON.parse(dataJson));
    //   })
    //   .catch((err) => {
    //     if (err === "server") return;
    //     console.log(err);
    //   });

    // console.log(`Received: ${dataFilterReceived}`);
  }, [dataToBeSent]);

  const productsByCPUCores = data.reduce((acc, product) => {
    (acc[product["cpu_cores"]] = acc[product["cpu_cores"]] || []).push(product);
    return acc;
  }, {});

  const productsByCPUFreq = data.reduce((acc, product) => {
    (acc[product["cpu_freq"]] = acc[product["cpu_freq"]] || []).push(product);
    return acc;
  }, {});

  const productsByRAM = data.reduce((acc, product) => {
    (acc[product["memory_ram"]] = acc[product["memory_ram"]] || []).push(
      product
    );
    return acc;
  }, {});

  const productsByROM = data.reduce((acc, product) => {
    (acc[product["memory_rom"]] = acc[product["memory_rom"]] || []).push(
      product
    );
    return acc;
  }, {});

  const productsByScreen = data.reduce((acc, product) => {
    (acc[product["screen"]] = acc[product["screen"]] || []).push(product);
    return acc;
  }, {});

  const cpuCoresList = Object.keys(productsByCPUCores).sort();
  const cpuFreqList = Object.keys(productsByCPUFreq).sort();
  const screenList = Object.keys(productsByScreen).sort();
  const memoryRamList = Object.keys(productsByRAM);
  const memoryRomList = Object.keys(productsByROM);

  const handleFilterCpuCores = useCallback(
    (e) => {
      setCpuCoresFilter((prevState) => {
        if (cpuCoresFilter.includes(e.target.value)) {
          return cpuCoresFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [cpuCoresFilter]
  );

  const handleFilterCpuFreq = useCallback(
    (e) => {
      setCpuFreqFilter((prevState) => {
        if (cpuFreqFilter.includes(e.target.value)) {
          return cpuFreqFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [cpuFreqFilter]
  );

  const handleFilterScreen = useCallback(
    (e) => {
      setScreenFilter((prevState) => {
        if (screenFilter.includes(e.target.value)) {
          return screenFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [screenFilter]
  );

  const handleFilterRam = useCallback(
    (e) => {
      setRamFilter((prevState) => {
        if (ramFilter.includes(e.target.value)) {
          return ramFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [ramFilter]
  );

  const handleFilterRom = useCallback(
    (e) => {
      setRomFilter((prevState) => {
        if (romFilter.includes(e.target.value)) {
          return romFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [romFilter]
  );

  const filterData = [
    {
      name: "Số nhân CPU",
      data: cpuCoresList,
      mesurement: "",
      action: handleFilterCpuCores,
    },
    {
      name: "Xung nhịp CPU",
      data: cpuFreqList,
      mesurement: "GHz",
      action: handleFilterCpuFreq,
    },
    {
      name: "Màn hình",
      data: screenList,
      mesurement: "inch",
      action: handleFilterScreen,
    },
    {
      name: "Bộ nhớ RAM",
      data: memoryRamList,
      mesurement: "GB",
      action: handleFilterRam,
    },
    {
      name: "Bộ nhớ ROM",
      data: memoryRomList,
      mesurement: "GB",
      action: handleFilterRom,
    },
  ];

  return (
    <section>
      <div className="container py-14">
        <h1 className="text-5xl text-[#000] font-bold text-center mb-5">
          Tìm kiếm sản phẩm theo danh mục
        </h1>
        <div className="flex">
          <div className="w-1/5">
            <Category
              data={filterData}
              onFilterCpuCores={handleFilterCpuCores}
            />
          </div>
          <div className="w-4/5"></div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const req = await axios.get("http://127.0.0.1:5000/database");
  const res = req.data;
  const data = res || null;
  return {
    props: { data },
  };
}

export default Filter;
