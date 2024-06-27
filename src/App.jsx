import "./App.css";


import heroImage2 from "./assets/heroImg2.png";


import Hero from "./components/Hero";
import CompanyLogoSection from "./components/CompanyLogoSection";
import AboutCompanySection from "./components/AboutCompanySection";
import ServicesSection from "./components/ServicesSection";
import Testmonials from "./components/Testmonials";
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div>

      <NavBar/>

      <Hero />

      <CompanyLogoSection />

      <AboutCompanySection />

      <ServicesSection />

      <section className="box pt-36">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="text-5xl font-bold">
            Watch Video To <br /> Discover Us
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ut
            eligendi eveniet, exercitationem quae quos laboriosam tenetur, illum
            iure voluptate distinctio id aliquam, voluptatem similique. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
            tenetur quis. Numquam quod temporibus minima exercitationem eos quam
            veniam labore ipsam fugit velit maxime dolorem, distinctio facilis
            est consequuntur modi?
          </div>
        </div>
      </section>

      
      <Testmonials />

      <section className="box pt-40 pb-40">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col lg:pl-14 justify-center ">
            <p className="flex items-center gap-4 text-lg font-medium text-blue-900 pb-7">
              <div className="h-1 w-40 bg-blue-900 rounded-full"></div> About
              Company
            </p>
            <p className="text-5xl font-bold pb-10">
              2500+ Happy Clients Said To Us They Are Satisfied
            </p>
            <div className="flex items-center w-full max-w-md border border-black rounded-xl mb-7">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input rounded-full"
              />
              <button className="submit-button rounded-xl">Submit</button>
            </div>
            <p>
              Already a member? <a href="#">Sign in.</a>
            </p>
          </div>
          <div>
            <img src={heroImage2} alt="" className="rounded-lg" />
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
