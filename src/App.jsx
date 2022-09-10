import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <div className='w-[calc(100%-30px)] lg:w-[calc(100%-44px)] relative z-20 mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
