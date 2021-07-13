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
      `${params.baseUrl}current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${lat},${long}&aqi=no`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };