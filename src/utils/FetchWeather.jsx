import fetchPhotos from "../utils/FetchPhoto";

const params = {
    key: process.env.NEXT_PUBLIC_API_KEY,
    baseUrl: "https://api.weatherapi.com/v1/",
  };

const location = (setLat,setLong) => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };


  export const fetchWeather = async (setLat,setLong,setData,lat,long) => {
    location(setLat,setLong);

    await fetch(
      `${params.baseUrl}forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${lat},${long}&days=3&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  export const fetchCity = async (city,e,setData,setCity,setPhotos)=>{
    e.preventDefault()

    await fetch(
      `${params.baseUrl}forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      fetchPhotos(`${city}`,setPhotos)
      setCity('')
  }



 


