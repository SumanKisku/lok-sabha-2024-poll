import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../utils/constants";
import Vote from "./components/Vote";
import FloatingButton from "./components/FloatingButton";

function App() {
  const account = useActiveAccount();
  return (
    <div className="flex h-screen justify-center items-center bg-gray-950 text-slate-50">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5 text-center">
          Lok Sabha Vote 2024(Web 3 Poll)
        </h1>

        {account ? <Vote /> : <ConnectButton client={client} />}
      </div>
      <FloatingButton />
    </div>
  );
}

export default App;
