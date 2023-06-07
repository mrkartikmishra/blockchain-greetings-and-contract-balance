import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FaEthereum } from "react-icons/fa";

import contractAddress from "./abis/contractAddress.json";
import ABI from "./abis/Greetings.json";

const App = () => {
  const [greentingInput, setGreetingInput] = useState("");
  const [depositeInput, setDepositeInput] = useState(0);
  const [greenting, setGreeting] = useState("");
  const [deposite, setDeposite] = useState(0);
  const [currentAccount, setCurrentAccount] = useState("");

  const { ethereum } = window;
  const address = contractAddress.contractAddress;
  const abi = ABI.abi;

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (!ethereum) {
          console.log("Please install Metamask and continue!!");
          return;
        }

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setCurrentAccount(accounts[0]);
      } catch (error) {}
    };

    connectWallet();
  }, []);

  useEffect(() => {
    getData();
  }, [currentAccount]);

  const getData = async () => {
    if (currentAccount) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer);
      const newBalance = await provider.getBalance(address);
      const message = await contract.getGreetngs();
      setDeposite(ethers.utils.formatEther(newBalance));
      setGreeting(message);
    }
  };

  const handleGreetingInputChange = (e) => {
    setGreetingInput(e.target.value);
  };

  const handleDepositeInputChange = (e) => {
    setDepositeInput(e.target.value);
  };

  const handleGreetingSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    await contract.setGreeting(greentingInput);
    setGreetingInput("");
  };

  const handleDepositeSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    const valueFormated = ethers.utils.parseEther(depositeInput);
    await contract.deposite({ value: valueFormated });
    setDepositeInput(0);
  };

  return (
    <div className="bg-black h-screen sm:h-screen flex flex-col-reverse sm:flex-row justify-center sm:justify-around p-10 font-roboto">
      <div className="bg-gray w-full sm:w-1/2 sm:rounded-l-md relative">
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
        <p className="absolute left-1 bottom-1 italic text-sewcondary">
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
      <div className="bg-gray w-full sm:w-1/2 md:w-1/2 rounded-r-md">
        <div className="flex sm:justify-end">
          <div className="w-full bg-tertiary sm:p-[30px] shadow-xl p-10 sm:rounded-lg font-semibold text-secondary">
            <h3>{greenting}</h3>
            <p className="flex items-center">
              Contract Balance: <FaEthereum className="ml-2" /> {deposite} ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
