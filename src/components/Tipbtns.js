import React from "react";

function Buttons({ tip, setTip, customTip, setCustomTip }) {
  const handleTip = function (e) {
    setTip(parseInt(e.target.innerHTML));
  };

  const handleCustomTip = function (e) {
    setCustomTip(parseFloat(e.target.value.replace(/[0-9]{4}/, "100")));
  };

  let numbers = ["5", "10", "15", "25", "50"];

  return (
    <div className="flex flex-wrap gap-4 justify-between w-full">
      {numbers.map((num) => {
        return (
          <button
            className="bg-darkGreen border-none py-2 text-white font-bold w-1/2 max-w-xs rounded-md h-12 text-2xl font-mono focus:bg-activeGreen hover:bg-hoverGreen xl:max-w-btnxl"
            key={num}
            onClick={(e) => {
              handleTip(e);
            }}
          >
            {num}%
          </button>
        );
      })}
      <input
        type="number"
        className="border-none py-2 w-1/2 max-w-xs rounded-md h-12 text-2xl font-mono text-right pr-2 text-darkGreen bg-inputGreen focus:outline-activeGreen xl:max-w-btnxl"
        placeholder="Custom"
        value={customTip}
        min={0}
        onChange={(e) => {
          handleCustomTip(e);
        }}
      />
    </div>
  );
}
export default Buttons;
