import dollar from "../images/icon-dollar.svg";
function BillInput() {
  return (
    <div className="flex relative flex-col">
      <label className="text-grey font-bold pb-1.5" htmlFor="bill" name="bill">
        Bill
      </label>
      <img className="absolute top-12 left-2" src={dollar} alt="dollar-sign" />
      <input
        type="number"
        className="w-full text-darkGreen px-4 bg-inputGreen text-right rounded-md h-12 text-2xl font-mono border-none  focus:outline-activeGreen"
        id="bill"
        defaultValue="0"
        placeholder="0"
      />
    </div>
  );
}
export default BillInput;
