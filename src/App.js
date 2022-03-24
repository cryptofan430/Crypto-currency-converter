import Home from "./Pages/Home";
import { Web3ReactProvider} from '@web3-react/core'
import Web3 from "web3";

function getLibrary(Web3ReactProvider) {
  return new Web3(Web3ReactProvider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Home/>
    </Web3ReactProvider>
  );
}

export default App;
