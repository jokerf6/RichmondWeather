import Box from "./box";

export default function WeatherBox({ data }: any) {
  console.log(data);
  return (
    <div
      className="absolute h-3/6 mt-20 z-50  top-0 right-5"
      style={{ width: "100%" }}
    >
      <div className="absolute flex items-start justify-between top-0 left-0 text-white w-full h-full p-4">
        <div>
          <p></p>
          <p></p>
        </div>
        <Box data={data} />
      </div>
    </div>
    // <div className=" w-full h-3/6">
    //   <div className=" w-full h-full">
    //     <img
    //       alt="sun1"
    //       src={"/images/back.jpeg"}
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         objectFit: "fill",
    //       }}
    //     />
    //     <div className=" bg-black absolute top-0 opacity-5 z-10 w-full h-3/6">
    //       {" "}
    //     </div>
    //   </div>

    //   {/* <div className="flex items-center justify-between">
    //     <div>
    //       <p>hello</p>
    //       <p>hello</p>
    //     </div>
    //     <div>
    //       <img
    //         alt="sun"
    //         className=" w-32"
    //         src={`https://openweathermap.org/img/w/02n.png`}
    //       />
    //       <h1 className=" font-bold text-5xl">Clouds</h1>
    //     </div>
    //   </div> */}
    // </div>
    // );
  );
}
