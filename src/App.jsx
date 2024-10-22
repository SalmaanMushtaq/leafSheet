import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpinnerFullPage from "./components/SpinnerFullPage";
const Profile = lazy(() => import("./pages/ProfilePage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Navbar />
          <main className="container flex-grow px-4 md:px-8 lg:px-16">
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}

export default App;
