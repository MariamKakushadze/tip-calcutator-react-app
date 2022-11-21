import Header from "./components/header.js";
import BillInput from "./components/BillInput";
import SelectTip from "./components/SelectTip";
import NumberOfPeople from "./components/NumberOfPeople";
import Results from "./components/results";

function App() {
  return (
    <div>
      <Header />
      <main className="bg-white p-8 rounded-t-3xl xl:flex xl:max-w-xlg xl:gap-14 xl:m-auto xl:rounded-3xl">
        <div className="container m-auto max-w-xl sm:max-w-lg">
          <BillInput />
          <SelectTip />
          <NumberOfPeople />
        </div>
        <div className="container m-auto max-w-xl sm:max-w-lg">
          <Results />
        </div>
      </main>
    </div>
  );
}

export default App;
