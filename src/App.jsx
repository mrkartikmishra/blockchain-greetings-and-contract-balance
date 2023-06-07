import { useState } from "react";

const App = () => {
  const [greentingInput, setGreetingInput] = useState("");
  const [depositeInput, setDepositeInput] = useState(0);
  const [greenting, setGreeting] = useState("Kartik Mishra");
  const [deposite, setDeposite] = useState(0.01);
  const [currentAccount, setCurrentAccount] = useState(
    "0x6C6c2E54BD2352Cf32761B2f042663dDE2cc2F23"
  );

  const handleGreetingInputChange = (e) => {
    setGreetingInput(e.target.value);
  };

  const handleDepositeInputChange = (e) => {
    setDepositeInput(e.target.value);
  };

  const handleGreetingSubmit = (e) => {
    e.preventDefault();
    console.log(greentingInput);
  };

  const handleDepositeSubmit = (e) => {
    e.preventDefault();
    console.log(depositeInput);
  };

  return (
    <div className="bg-black h-screen sm:h-screen flex flex-col-reverse sm:flex-row justify-center sm:justify-around p-10 font-roboto">
      <div className="bg-gray w-full sm:w-1/2 sm:rounded-l-md">
        <form
          onSubmit={handleGreetingSubmit}
          className="flex flex-col gap-3 flex-start p-10"
        >
          <input
            type="text"
            className="bg-transparent outline-none text-primary placeholder-primary border border-primary p-1 px-2 rounded-lg"
            placeholder="greetings"
            value={greentingInput}
            onChange={handleGreetingInputChange}
          />
          <button
            type="submit"
            className="bg-tertiary w-full p-1 rounded-full text-primary font-semibold text-center my-2 mx-auto"
          >
            Change
          </button>
        </form>
        <form
          onSubmit={handleDepositeSubmit}
          className="flex flex-col gap-3 flex-start p-10"
        >
          <input
            type="number"
            className="bg-transparent outline-none text-primary placeholder-primary border border-primary p-1 px-2 rounded-lg"
            placeholder="0"
            value={depositeInput}
            onChange={handleDepositeInputChange}
          />
          <button
            type="submit"
            className="bg-tertiary w-full p-1 rounded-full text-primary font-semibold text-center my-2 mx-auto"
          >
            Deposite
          </button>
        </form>
      </div>
      <div className="bg-gray w-full sm:w-1/2 md:w-1/2 rounded-r-md relative">
        <div className="flex sm:justify-end">
          <div className="w-full bg-tertiary shadow-xl p-10 sm:rounded-lg font-semibold text-secondary">
            <h3>{greenting}</h3>
            <p>Contract Balance: {deposite} ETH</p>
          </div>
        </div>
        <p className="absolute right-1 bottom-1 italic text-sewcondary">
          {currentAccount ? (
            <span className="text-green-700">{`connected: ${currentAccount.slice(
              0,
              3
            )}...${currentAccount.slice(
              currentAccount.length - 3,
              currentAccount.length
            )}`}</span>
          ) : (
            <span className="text-red-700">Not connected</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default App;
