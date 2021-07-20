import fetchPhotos from "../utils/FetchPhoto";

const params = {
  key: process.env.NEXT_PUBLIC_API_KEY,
  baseUrl: "https://api.weatherapi.com/v1/",
};

export const fetchWeather = async (setData, latitude, longitude) => {
  await fetch(
    `${params.baseUrl}forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`
  )
    .then((res) => res.json())
    .then((result) => {
      setData(result);
    });
};

export const fetchCity = async (city, e, setData, setCity, setPhotos) => {
  e.preventDefault();

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
  fetchPhotos(`${city}`, setPhotos);
  setCity("");
};
