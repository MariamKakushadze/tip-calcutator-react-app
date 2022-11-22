import menIcon from "../images/icon-person.svg";
import React from "react";

function NumberOfPeople({ numOfPeople, setNumOfPeople }) {
  function handleNumOfPeople(e) {
    setNumOfPeople(parseFloat(e.target.value.replace(/[0-9]{6}/, "10000")));
  }
  return (
    <div className="mt-8 relative">
      <div className="error-msg text-red absolute right-0">
        {numOfPeople === 0 ? "Can't be zero" : ""}
        {numOfPeople < 0 ? "Can't be negative" : ""}
      </div>
      <label
        className="text-grey font-bold pb-1.5 w-full"
        htmlFor="people"
        name="people"
      >
        Number of People
      </label>
      <img src={menIcon} alt="person-sign" className="absolute top-10 left-2" />
      <input
        type="number"
        className="w-full text-darkGreen px-4 bg-inputGreen text-right rounded-md h-12 text-2xl font-mono border-none  focus:outline-activeGreen"
        id="people"
        placeholder="0"
        value={numOfPeople}
        onChange={(e) => handleNumOfPeople(e)}
      />
    </div>
  );
}

export default NumberOfPeople;
