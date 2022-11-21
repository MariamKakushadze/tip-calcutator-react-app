function results() {
  return (
    <div className="mt-8 bg-darkGreen p-6 rounded-2xl xl:h-80">
      <div className="flex flex-row text-left justify-between">
        <p className="text-white text-md font-bold font-mono w-32 break-words">
          Tip Amount <span className="text-grey text-sm">/ person</span>
        </p>
        <p className="text-activeGreen text-4xl font-bold">$0.00</p>
      </div>
      <div className="flex flex-row text-left justify-between mt-3">
        <p className="text-white text-md font-bold font-mono w-20 break-words">
          Total <span className="text-grey text-sm">/ person</span>
        </p>
        <p className="text-activeGreen text-4xl font-bold">$0.00</p>
      </div>
      <button
        type="reset"
        className="mt-6 xl:mt-20 text-darkGreen text-xl font-bold py-2 rounded-sm bg-activeGreen w-full hover:bg-hoverGreen"
      >
        RESET
      </button>
    </div>
  );
}
export default results;
