import Buttons from "./Tipbtns";
import React from "react";

function SelectTip({ tip, setTip, customTip, setCustomTip }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <p className="text-grey font-bold pb-1.5 w-full">Select Tip %</p>
      <Buttons
        tip={tip}
        setTip={setTip}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
    </div>
  );
}

export default SelectTip;
