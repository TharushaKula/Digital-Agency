import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import heroImage2 from "../assets/heroImg2.png";

export default function Testmonials() {
  return (
    <>
      <section className="mt-36 relative">
        <div className="box relative">
          <div className="grid grid-cols-2">
            <div>
              <img src={heroImage2} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col pl-14 ">
              <p className="flex items-center gap-4 text-lg font-medium text-blue-900 pb-7">
                <div className="h-1 w-40 bg-blue-900 rounded-full"></div>{" "}
                Testmonials
              </p>
              <p className="text-5xl font-bold pb-6">
                2500+ Happy Clients Said To Us They Are Satisfied
              </p>
              <p>
                Some studies indicate that consumer responses to marketing
                approaches are becoming less predictable Some studies indicate
                that consumer responses to marketing approaches are becoming
                less predictable Some studies indicate that consumer responses
                to marketing approaches are becoming less predictable
              </p>
            </div>
          </div>
        </div>

        <div className="box pt-20 absolute top-60 left-56">
          <Swiper
            spaceBetween={50}
            slidesPerView={3.7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
}

export function SwiperCard() {
  return (
    <div className=" border border-black rounded-xl px-10 pt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e0f66"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-quote"
      >
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      </svg>
      <p className="pt-5 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa
        itaque voluptas numquam perspiciatis sed quaerat sint officiis, id
        consequuntur,
      </p>
      <div className="flex gap-4 items-center pt-5 pb-8">
        <div className="w-16 h-16 rounded-full bg-orange-400"></div>
        <div>
          <p className="text-xl font-semibold">stive jobs</p>
          <p className="text-sm">new york</p>
        </div>
      </div>
    </div>
  );
}
