import Buttons from "./Tipbtns";

function SelectTip() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <p className="text-grey font-bold pb-1.5 w-full">Select Tip %</p>
      <Buttons />
    </div>
  );
}

export default SelectTip;
