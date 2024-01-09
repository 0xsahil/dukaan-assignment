import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full min-h-[100vh]">
      <div className="w-[20%] bg-darkBg min-h-full p-4"> <Navbar /></div>
      <div className="w-[80%] bg-whiteBg min-h-full"><Dashboard /></div>
    </div>
  );
}

export default App;
