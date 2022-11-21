import menIcon from "../images/icon-person.svg";

function NumberOfPeople() {
  return (
    <div className="mt-8 relative">
      <div className="error-msg text-red absolute right-0 hidden">
        Can't be zero!
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
      />
    </div>
  );
}

export default NumberOfPeople;
