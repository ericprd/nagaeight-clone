import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MainPage from "./pages/main-page";
import MenuPage from "./pages/menu-page";
import ReservationPage from "./pages/reservation-page";

function App() {
  return (
    <div className='w-[calc(100%-30px)] lg:w-[calc(100%-44px)] relative z-20 mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reservation' element={<ReservationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
