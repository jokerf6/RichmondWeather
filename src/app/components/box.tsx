export default function Box({ data }: any) {
  function temp() {
    const kelvinTemp = data.main.temp;
    const celsiusTemp = kelvinTemp - 273.15;
    return celsiusTemp.toFixed();
  }
  function weather() {
    const weatherCondition = data.weather[0].main;

    // Check the weather condition and perform further actions
    if (weatherCondition === "Clear") {
      return "sunny";
    } else if (weatherCondition === "Rain") {
      return "rainy";
    } else if (weatherCondition === "Clouds") {
      return "cloudy";
    } else if (weatherCondition === "Snow") {
      return "snowy";
    } else {
      return data.weather[0].main;
    }
  }
  return (
    <div className="max-w-sm  bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary px-4 py-3">
        <h3 className="text-lg font-semibold text-white">Today's Weather</h3>
      </div>
      <div className="p-4 flex flex-col items-center justify-center">
        <img
          alt="sun"
          className=" w-28 bg-white"
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        />
        <p className="text-gray-600">Temperature: {temp()}°C</p>
        <p className="text-gray-600">Conditions: {weather()}</p>
      </div>
    </div>
  );
}
