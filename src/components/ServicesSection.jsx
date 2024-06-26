export default function ServicesSection() {
  return (
    <section className="box pt-36">
      <div className="grid grid-cols-2">
        <div className="pr-36">
          <div className="grid grid-cols-2 gap-5">
            <ServiceCard
              svg={
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
              }
              title={"Product Design"}
              description={
                "Some studies indicate that consumer responses to predictable for businesses"
              }
            />

            <ServiceCard
              svg={
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
                  class="lucide lucide-scan-eye"
                >
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" />
                </svg>
              }
              title={"Visual Design"}
              description={
                "Some studies indicate that consumer responses to predictable for businesses"
              }
            />

            <ServiceCard
              svg={
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
                  class="lucide lucide-palette"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              }
              title={"UI/UX Design"}
              description={
                "Some studies indicate that consumer responses to predictable for businesses"
              }
            />

            <ServiceCard
              svg={
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
                  class="lucide lucide-bar-chart-4"
                >
                  <path d="M3 3v18h18" />
                  <path d="M13 17V9" />
                  <path d="M18 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              }
              title={"Business Analytic"}
              description={
                "Some studies indicate that consumer responses to predictable for businesses"
              }
            />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at,
            laborum, tempore ipsum pariatur voluptates voluptatem sed
            praesentium a aliquam laudantium consectetur nihil quidem, magni
            atque! Cumque modi praesentium est!
          </p>
          <p className="pb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            doloremque eius deserunt quam eum quaerat vitae delectus dignissimos
            nulla id ducimus harum beatae voluptas consectetur minima,
            perferendis, expedita at quia?
          </p>
          <div>
            <button className="border border-black px-7 pt-3 pb-3 text-lg font-medium rounded-xl">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ svg, title, description }) {
  return (
    <div className="border border-black flex flex-col px-7 pt-5 pb-5 rounded-xl hover:bg-blue-600 cursor-pointer">
      <div className="pt-2">
        {svg}
      </div>
      <p className="pt-3 text-xl font-semibold">{title}</p>
      <p className="pt-3 pb-3">{description}</p>
    </div>
  );
}
