"use client";
export default function Nav() {
  return (
    <div
      className={`absolute z-10  flex items-center justify-between rtl:text-right`}
      style={{
        width: "90%",
        top: "3%",
        left: "5%",
        right: "5%",
        color: "white",
      }}
    >
      <h1>Coming soon</h1>
      <div className=" flex gap-4"></div>
    </div>
  );
}
