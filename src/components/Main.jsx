import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import chevronDoubleDown from "../../node_modules/@iconify-icons/mdi/chevron-double-down";

const Main = () => {
  const params = {
    key: process.env.API_KEY,
    baseUrl: "https://api.weatherapi.com/v1/",
  };

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState([]);

  const location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  const fetchWeather = async () => {
    location();

    await fetch(
      `${params.baseUrl}current.json?key=5c8f0622e71644c5a54204404202807&q=${lat},${long}&aqi=no`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [lat, long]);

  console.log(data);

  return (
    <main
      className="main relative before:absolute before:inset-0 before:bg-black/50  h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center px-4 py-[2.5rem]"
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1512387331157-3e2a021998db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" +
          ")",
      }}
    >
      <div className="relative flex flex-col ">
        <label htmlFor="location" className="text-white text-lg font-poppins ">
          Another Location:
        </label>
        <input
          id="location"
          className="w-[75%] font-poppins mt-2 bg-transparent border-b-2 border-white outline-none text-white"
          type="text"
        />
      </div>

      <div className=" relative flex flex-col  text-white font-poppins mb-20">
        <p>
          <span className="text-[4rem]">{data?.current?.temp_c}° </span>
          <span className="text-[3rem] font-medium">
            {data?.location?.name}
          </span>
        </p>
        <span className="text-lg ">{data?.location?.localtime}</span>
        <span className="text-lg ">{data?.current?.condition?.text}</span>
        <img src={`${data?.current?.condition?.icon}`} className='h-20 w-20' alt="" />
      </div>

      <Icon
        icon={chevronDoubleDown}
        className="animate-bounce h-12 w-12 text-white mx-auto"
      />
    </main>
  );
};

export default Main;
