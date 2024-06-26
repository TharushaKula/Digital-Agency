import heroImage2 from "../assets/heroImg2.png";

export default function AboutCompanySection() {
  return (
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
        <div>
          <img src={heroImage2} alt="" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
