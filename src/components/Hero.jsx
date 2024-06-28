import heroImage1 from "../assets/heroImg1.png";

export default function Hero() {
  return (
    <section className="box pt-10">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="">
          <p className="lg:text-8xl text-5xl font-bold pb-10 lg:pt-32">
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
  );
}
