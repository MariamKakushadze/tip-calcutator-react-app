function Buttons() {
  let numbers = ["5%", "20%", "15%", "25%", "50%"];

  return (
    <div className="flex flex-wrap gap-4 justify-between w-full">
      {numbers.map((num) => {
        return (
          <button
            className="bg-darkGreen border-none py-2 text-white font-bold w-1/2 max-w-xs rounded-md h-12 text-2xl font-mono focus:bg-activeGreen hover:bg-hoverGreen xl:max-w-btnxl"
            key={num}
          >
            {num}
          </button>
        );
      })}
      <input
        type="number"
        className="border-none py-2 w-1/2 max-w-xs rounded-md h-12 text-2xl font-mono text-right pr-2 text-darkGreen bg-inputGreen focus:outline-activeGreen xl:max-w-btnxl"
        placeholder="Custom"
      />
    </div>
  );
}
export default Buttons;
