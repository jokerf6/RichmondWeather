"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import WeatherBox from "./components/weatherBox";
import Chat from "./components/chat";
import Nav from "./components/nav";

export default function Home() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    getWeatherData();
  }, [useState]);
  async function getWeatherData() {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Richmond&appid=70f9ac18c602dd7ec994c63d786f961b`
    )
      .then((res) => res.json())
      .then((data) => showWeatherData(data));
  }
  function showWeatherData(data: any) {
    console.log(data);
    console.log(data.weather[0].main);
    setData(data);
    // const {humidity , pressure , sunrise , sunset , wind_speed} = data.current;
    // console.log(humidity);
    // console.log(pressure);
    // console.log(sunrise);
    // console.log(sunset);
    // console.log(wind_speed);
  }
  return (
    <main>
      <Nav />
      <div className=" w-screen h-screen bg-primary flex flex-col gap-8">
        {Data !== null ? <WeatherBox data={Data} /> : <div></div>}
        {Data !== null ? <Chat /> : <div></div>}
      </div>
    </main>
  );
}
// "Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info."
