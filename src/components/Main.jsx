import React, { createRef, useEffect, useState } from "react";
// Components
import Details from "./Details";
// Icons
import { Icon } from "@iconify/react";
import chevronDoubleDown from "../../node_modules/@iconify-icons/mdi/chevron-double-down";
// Utils
import { fetchWeather, fetchCity } from "../utils/FetchWeather";
import fetchPhotos from "../utils/FetchPhoto";
import fetchQuotes from "../utils/FetchQuotes";



const Main = () => {




  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState([]);
  const [quote, setQuote] = useState()



  useEffect(() => {
    fetchWeather(setLat, setLong, setData, lat, long);
    fetchPhotos(`${data?.location?.name}`, setPhotos);
    fetchQuotes(setQuote)
  }, [lat, long]);

  console.log(quote);
  return (
    <main
      className="main relative before:absolute before:inset-0 before:bg-black/50  bg-no-repeat bg-cover bg-center lg:grid lg:grid-cols-12 "
      style={{
        backgroundImage:
          `url(` +
          `https://live.staticflickr.com/${photos?.server}/${photos?.id}_${photos?.secret}_b.jpg` +
          `)`,
      }}
    
    >
      <div className="   h-screen px-6 py-[2.5rem] flex flex-col justify-evenly  md:px-8 lg:col-span-6">
        <div className="relative flex flex-col ">
          <form
            action=""
            onSubmit={(e) => fetchCity(city, e, setData, setCity, setPhotos)}
            className="relative flex flex-col"
          >
            <label
              htmlFor="location"
              className="text-white text-lg font-poppins "
            >
              Another Location:
            </label>
            <input
              id="location"
              className="w-[50%] font-poppins mt-2 bg-transparent border-b-2 border-white outline-none text-white"
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </form>
        </div>

<span className='text-white font-poppins relative text-lg my-2 lg:text-xl italic'>"{quote?.content}"-{quote?.author}</span>

        <div className=" relative flex flex-col  text-white font-poppins mb-15">
          <p>
            <span className="text-[4rem]">{data?.current?.temp_c}°C </span>
            <span className="text-[3rem] font-medium">
              {data?.location?.name}
            </span>
          </p>
          <span className="text-lg my-2 ">{data?.location?.localtime}</span>
          <span className="text-lg ">{data?.current?.condition?.text}</span>
          <img
            src={`${data?.current?.condition?.icon}`}
            className="h-20 w-20"
            alt=""
          />
        </div>

        <Icon
          icon={chevronDoubleDown}
          className="animate-bounce h-12 w-12 text-white mx-auto lg:hidden relative  "
        />
      </div>
      <div className=" lg:col-span-6" >
        <Details
          cloud={data?.current?.cloud}
          humidity={data?.current?.humidity}
          wind={data?.current?.wind_kph}
          feelsLike={data?.current?.feelslike_c}
          forecast={data?.forecast?.forecastday}
        />
      </div>
    </main>
  );
};

export default Main;
