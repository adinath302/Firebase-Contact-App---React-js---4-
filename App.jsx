import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";


function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex relative items-center">
        <CiSearch className=" ml-1 text-3xl text-white absolute" />

        <input
          type="text"
          className="flex-grow h-10 bg-transparent border border-white rounded-md text-white pl-9"
        />
        
      </div>
      <div>
      <FaPlusCircle />
      </div>
    </div>
  );
}

export default App;
