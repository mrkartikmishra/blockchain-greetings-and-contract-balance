function App() {
  return (
    <div className="bg-black h-screen flex justify-between p-10 font-roboto">
      <div className="bg-gray w-1/2 rounded-l-md">
        <form className="flex flex-col gap-3 flex-start p-10">
          <input
            type="text"
            className="bg-transparent outline-none text-primary placeholder-primary border border-primary p-1 px-2 rounded-lg"
            placeholder="Enter greetings"
          />
          <button className="bg-tertiary w-1/3 p-1 rounded-full text-primary font-semibold text-center my-2 mx-auto">
            Change Greeting
          </button>
        </form>
        <form className="flex flex-col gap-3 flex-start p-10">
          <input
            type="number"
            className="bg-transparent outline-none text-primary placeholder-primary border border-primary p-1 px-2 rounded-lg"
            placeholder="0"
          />
          <button className="bg-tertiary w-1/4 p-1 rounded-full text-primary font-semibold text-center my-2 mx-auto">
            Deposite
          </button>
        </form>
      </div>
      <div className="bg-gray w-1/2 rounded-r-md right-0">
        <div className="flex justify-end">
          <div className="w-1/2 bg-tertiary shadow-xl p-10 rounded-lg font-semibold text-secondary">
            <h3>Hello! Kartik</h3>
            <p>Contract Balance: 0.001 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
