const params = {
    key: process.env.API_KEY,
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
      `${params.baseUrl}current.json?key=5c8f0622e71644c5a54204404202807&q=${lat},${long}&aqi=no`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };