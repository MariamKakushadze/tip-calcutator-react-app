import Header from "./components/header.js";
import BillInput from "./components/BillInput";
import SelectTip from "./components/SelectTip";
import NumberOfPeople from "./components/NumberOfPeople";
import Results from "./components/results";
import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  let tipPerson;
  let totalPerson;

  function calculateTip() {
    if (customTip !== "" && numOfPeople > 0) {
      let percent = (customTip / 100) * bill;
      tipPerson = (percent / numOfPeople).toFixed(2);
      return tipPerson;
    }
    if (tip !== "" && numOfPeople > 0) {
      let percent = (tip / 100) * bill;
      tipPerson = (percent / numOfPeople).toFixed(2);
      return tipPerson;
    }
  }
  function calculateTotal() {
    if (customTip !== "" && numOfPeople > 0) {
      let percent = (customTip / 100) * bill;
      let total = Number(bill) + percent;
      totalPerson = (total / numOfPeople).toFixed(2);
      return totalPerson;
    }
    if (tip !== "" && numOfPeople > 0) {
      let percent = (tip / 100) * bill;
      let total = Number(bill) + percent;
      totalPerson = (total / numOfPeople).toFixed(2);
      return totalPerson;
    }
  }

  return (
    <div>
      <Header />
      <main className="bg-white p-8 rounded-t-3xl xl:flex xl:max-w-xlg xl:gap-14 xl:m-auto xl:rounded-3xl">
        <div className="container m-auto max-w-xl sm:max-w-lg">
          <BillInput bill={bill} setBill={setBill} />
          <SelectTip
            tip={tip}
            setTip={setTip}
            customTip={customTip}
            setCustomTip={setCustomTip}
          />
          <NumberOfPeople
            numOfPeople={numOfPeople}
            setNumOfPeople={setNumOfPeople}
          />
        </div>
        <div className="container m-auto max-w-xl sm:max-w-lg">
          <Results
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            numOfPeople={numOfPeople}
            setNumOfPeople={setNumOfPeople}
            customTip={customTip}
            setCustomTip={setCustomTip}
            calculateTip={calculateTip}
            calculateTotal={calculateTotal}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
