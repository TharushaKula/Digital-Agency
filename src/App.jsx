import "./App.css";
import heroImage1 from "./assets/heroImg1.png";
import logo from "./assets/logo.png";
import amazon from "./assets/amazon.png";
import fedEx from "./assets/fedEx.png";
import google from "./assets/google.png";
import netflix from "./assets/netflix.png";
import walmart from "./assets/walmart.jpg";
import spotify from "./assets/spotify.png";
import heroImage2 from "./assets/heroImg2.png";

function App() {
  return (
    <div>
      <nav className="box pt-5 font-medium text-xl">
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
      </nav>
      <section className="box pt-10">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="">
            <p className="text-8xl font-bold pb-10 pt-32">
              Infinite <br /> Possibilities, <br /> One Agency
            </p>
            <p className="text-xl font-medium pb-10">
              Even before the Digital Agency establishment bill was passed, the
              Cabinet Secretariat's Information Technology
            </p>
            <div className="flex gap-10 items-center">
              <button className="bg-black text-white rounded-xl px-9 pt-4 pb-4">
                Get Started
              </button>
              <p className="flex items-center gap-2 font-bold text-lg">
                <button class="playButton">
                  <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="15px"
                  >
                    <path
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                How Its Works
              </p>
            </div>
          </div>
          <div className="">
            <img src={heroImage1} alt="" />
          </div>
        </div>
      </section>

      <section className="box pt-24">
        <div className="flex items-center gap-5">
          <div className="h-1 w-40 bg-slate-400 rounded-full"></div>
          <div className="p-0 m-0 text-slate-400 pl-5">
            {" "}
            OVER 5K TOP CLASS BRAND WORKING WITH SPARK
          </div>
          <div className="h-1 w-screen bg-slate-400 rounded-full "></div>
        </div>
      </section>

      <section className="box pt-10">
        <div className="grid grid-cols-6 gap-36">
          <div>
            <img src={amazon} alt="" />
          </div>
          <div>
            <img src={fedEx} alt="" />
          </div>
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={netflix} alt="" />
          </div>
          <div>
            <img src={walmart} alt="" />
          </div>
          <div>
            <img src={spotify} alt="" />
          </div>
        </div>
      </section>

      <section className="box pt-36">
        <div className="grid grid-cols-2">
          <div className="flex flex-col pr-14 justify-center">
            <p className="flex items-center gap-4 text-lg font-medium text-blue-900 pb-7">
              <div className="h-1 w-40 bg-blue-900 rounded-full"></div> About
              Company
            </p>
            <p className="text-5xl font-bold pb-6">
              Transforming Businesses With Innovative Digital Solutions.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              at, laborum, tempore ipsum pariatur voluptates voluptatem sed
              praesentium a aliquam laudantium consectetur nihil quidem, magni
              atque! Cumque modi praesentium est!
            </p>
            <p className="pb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              doloremque eius deserunt quam eum quaerat vitae delectus
              dignissimos nulla id ducimus harum beatae voluptas consectetur
              minima, perferendis, expedita at quia?
            </p>
            <div>
              <button className="border border-black px-7 pt-3 pb-3 text-lg font-medium rounded-xl">
                Explore Services
              </button>
            </div>
          </div>
          <div>
            <img src={heroImage2} alt="" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="box pt-36">
        <div className="grid grid-cols-2">
          <div className="pr-36">
            <div className="grid grid-cols-2 gap-5">
              <div className="border border-black flex flex-col px-7 pt-5 pb-5 rounded-xl hover:bg-blue-600 cursor-pointer">
                <div className="pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </div>
                <p className="pt-3 text-xl font-semibold">Product Design</p>
                <p className="pt-3 pb-3">
                  Some studies indicate that consumer responses to predictable
                  for businesses
                </p>
              </div>
              <div className="border border-black flex flex-col px-7 pt-5 pb-5 rounded-xl hover:bg-blue-600 cursor-pointer">
                <div className="pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </div>
                <p className="pt-3 text-xl font-semibold">Visual Design</p>
                <p className="pt-3 pb-3">
                  Some studies indicate that consumer responses to predictable
                  for businesses
                </p>
              </div>
              <div className="border border-black flex flex-col px-7 pt-5 pb-5 rounded-xl hover:bg-blue-600 cursor-pointer">
                <div className="pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </div>
                <p className="pt-3 text-xl font-semibold">UI/UX Design</p>
                <p className="pt-3 pb-3">
                  Some studies indicate that consumer responses to predictable
                  for businesses
                </p>
              </div>
              <div className="border border-black flex flex-col px-7 pt-5 pb-5 rounded-xl hover:bg-blue-600 cursor-pointer">
                <div className="pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-package-search"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                </div>
                <p className="pt-3 text-xl font-semibold">Business Analytic</p>
                <p className="pt-3 pb-3">
                  Some studies indicate that consumer responses to predictable
                  for businesses
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pr-14 justify-center">
            <p className="flex items-center gap-4 text-lg font-medium text-blue-900 pb-7">
              <div className="h-1 w-40 bg-blue-900 rounded-full"></div>Services
            </p>
            <p className="text-5xl font-bold pb-6">
              We can Help You Solve Your Problem Throught Our Service
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              at, laborum, tempore ipsum pariatur voluptates voluptatem sed
              praesentium a aliquam laudantium consectetur nihil quidem, magni
              atque! Cumque modi praesentium est!
            </p>
            <p className="pb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              doloremque eius deserunt quam eum quaerat vitae delectus
              dignissimos nulla id ducimus harum beatae voluptas consectetur
              minima, perferendis, expedita at quia?
            </p>
            <div>
              <button className="border border-black px-7 pt-3 pb-3 text-lg font-medium rounded-xl">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;

{
  /* <section className="box">
  <div className="pt-10">
    <p className="text-5xl font-bold text-center pb-10">Our Services</p>
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
      <div className="bg-gray-200 p-5 rounded-xl">
        <p className="text-3xl font-bold pb-5">Web Design</p>
        <p className="text-lg font-medium">
          Even before the Digital Agency establishment bill was passed, the
          Cabinet Secretariat's Information Technology
        </p>
      </div>
      <div className="bg-gray-200 p-5 rounded-xl">
        <p className="text-3xl font-bold pb-5">Web Design</p>
        <p className="text-lg font-medium">
          Even before the Digital Agency establishment bill was passed, the
          Cabinet Secretariat's Information Technology
        </p>
      </div>
      <div className="bg-gray-200 p-5 rounded-xl">
        <p className="text-3xl font-bold pb-5">Web Design</p>
        <p className="text-lg font-medium">
          Even before the Digital Agency establishment bill was passed, the
          Cabinet Secretariat's Information Technology
        </p>
      </div>
    </div>
  </div>
</section>; */
}
