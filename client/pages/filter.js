import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";

import phoneService from "../services/phoneService";
import Category from "../components/Category";
import ProductFilter from "../components/ProductFilter";
import PredictModel from "../components/PredictModel";
import LoadingContainer from "../components/LoadingContainer";

const Filter = ({ data }) => {
  const [cpuCoresFilter, setCpuCoresFilter] = useState([]);
  const [cpuFreqFilter, setCpuFreqFilter] = useState([]);
  const [screenFilter, setScreenFilter] = useState([]);
  const [ramFilter, setRamFilter] = useState([]);
  const [romFilter, setRomFilter] = useState([]);
  const [swFilter, setSwFilter] = useState([]);
  const [entertainFilter, setEntertainFilter] = useState([]);
  const [dataFilterReceived, setDataFilterReceived] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const queryOptions = {
    cpu_cores: cpuCoresFilter,
    cpu_freq: cpuFreqFilter,
    screen: screenFilter,
    memory_ram: ramFilter,
    memory_rom: romFilter,
    study_work: swFilter,
    entertainment: entertainFilter,
  };

  useEffect(() => {
    setIsLoading(true);
    const hasData =
      Boolean(cpuCoresFilter.length > 0) ||
      Boolean(cpuFreqFilter.length > 0) ||
      Boolean(screenFilter.length > 0) ||
      Boolean(ramFilter.length > 0) ||
      Boolean(romFilter.length > 0) ||
      Boolean(swFilter.length > 0) ||
      Boolean(entertainFilter.length > 0);

    if (hasData) {
      phoneService.fitlerPhones(queryOptions).then((res) => {
        setIsLoading(false);
        setDataFilterReceived(res.data);
      });
    } else {
      setIsLoading(false);
      setDataFilterReceived([]);
    }
  }, [
    cpuCoresFilter,
    cpuFreqFilter,
    screenFilter,
    ramFilter,
    romFilter,
    swFilter,
    entertainFilter,
  ]);

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

  const handleStudyAndWorkFilter = useCallback(
    (e) => {
      setEntertainFilter((prevState) => {
        if (entertainFilter.includes(e.target.value)) {
          return entertainFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [entertainFilter]
  );

  const handleEntertainmentFilter = useCallback(
    (e) => {
      setSwFilter((prevState) => {
        if (swFilter.includes(e.target.value)) {
          return swFilter.filter((item) => item !== e.target.value);
        } else return [...prevState, e.target.value];
      });
    },
    [swFilter]
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
    <>
      <Head>
        <title>Bộ lọc sản phẩm</title>
      </Head>
      <LoadingContainer display={isLoading} />
      <section>
        <PredictModel />
        <div className="container py-14">
          <h1 className="text-5xl text-[#000] font-bold text-center mb-10">
            Tìm kiếm sản phẩm theo thông số
          </h1>
          <div className="flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/5">
              <Category
                data={filterData}
                onStudyAndWorkFilter={handleStudyAndWorkFilter}
                onEntertainmentFilter={handleEntertainmentFilter}
              />
            </div>
            <div className="w-full xl:w-4/5">
              <ProductFilter productsList={dataFilterReceived} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const req = await phoneService.getAllPhones();
  const res = req.data;
  const data = res || null;
  return {
    props: { data },
  };
}

export default Filter;
