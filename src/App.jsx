
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import Info from "./Pages/Info";
import Categories from "./Pages/Categories";
import RecentJobs from "./Pages/RecentJobs";
import NewCandidates from "./Pages/NewCandidates";
import SuccessStories from "./Pages/SuccessStories";
import Pricing from "./Pages/Pricing";
import Steps from "./Pages/Steps";
import LatestPosts from "./Pages/LatestPosts";
import AppInfo from "./Pages/AppInfo";
import Signup from "./Components/Signup";
import "./App.css";
import ContactSupport from "./Components/ContactSupport";

import ChatWidget from "./Components/ChatWidget";

function Home() {
  return (
    <>
      <div className="top-section">
        <Header />
        <Hero />
      </div>
      <Info />
      <Categories />
      <RecentJobs />
      <NewCandidates />
      <SuccessStories />
      <Pricing />
      <Steps />
      <LatestPosts />
      <AppInfo />
      <Footer />

    </>
  );
}

function SignupPage() {
  return (
    <div className="signup-page">
      <Header />
      <Signup />
      <Footer />
    </div>
  );
}

function AppLayout() {
  const location = useLocation();

  return (
    <div className={location.pathname === "/signup" ? "signup-page" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/contact-support"
          element={
            <div className="contact-page">
              <Header />
              <ContactSupport />
              <Footer />
            </div>
          }
        />
      </Routes>
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;