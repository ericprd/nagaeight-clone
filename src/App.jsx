import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <div className='w-[calc(100%-30px)] lg:w-[calc(100%-44px)] relative z-20 mx-auto'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
