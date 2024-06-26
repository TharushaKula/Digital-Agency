import "./App.css";

import heroImage2 from "./assets/heroImg2.png";
import logo from "./assets/logo.png";

import Hero from "./components/Hero";
import CompanyLogoSection from "./components/CompanyLogoSection";
import AboutCompanySection from "./components/AboutCompanySection";
import ServicesSection from "./components/ServicesSection";
import Testmonials from "./components/Testmonials";

function App() {
  return (
    <div>
      {/* <nav className="box pt-5 font-medium text-xl">
        <ul className="flex items-center gap-5">
          <li className="mr-[auto]">
            <img className="h-16" src={logo} alt="" />
          </li>
          <div className="flex gap-11 mx-auto">
            <li>About Us</li>
            <li>Profile</li>
            <li>Team</li>
            <li>Contact</li>
            <li>Language</li>
          </div>
          <li className="ml-auto">Sign In</li>
          <li>Sign Up</li>
        </ul>
      </nav> */}
      
      <Hero/>

      <CompanyLogoSection/>

      <AboutCompanySection/>
      
      <ServicesSection/>

      <section className="box pt-36">
        <div className="grid grid-cols-2">
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


      <Testmonials/>

      <section className="box pt-40">
        <div className="grid grid-cols-2">
          <div className="flex flex-col pl-14 justify-center ">
            <p className="flex items-center gap-4 text-lg font-medium text-blue-900 pb-7">
              <div className="h-1 w-40 bg-blue-900 rounded-full"></div>{" "}
              About Company
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
            <p>Already a member? <a href="#">Sign in.</a></p>
          </div>
          <div>
            <img src={heroImage2} alt="" className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
