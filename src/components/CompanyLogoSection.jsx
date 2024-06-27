import amazon from "../assets/amazon.png";
import fedEx from "../assets/fedEx.png";
import google from "../assets/google.png";
import netflix from "../assets/netflix.png";
import walmart from "../assets/walmart.jpg";
import spotify from "../assets/spotify.png";

export default function CompanyLogoSection() {
  return (
    <>
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
      <LogoSection/>
    </>
  );
}

export function LogoSection() {
  return (
    <section className="box pt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={amazon} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={fedEx} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={google} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={netflix} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={walmart} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-[100px]" src={spotify} alt="" />
        </div>
      </div>
    </section>
  );
}
