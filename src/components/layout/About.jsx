import SectionHeaders from "./SectionHeaders";
import Image from "next/image";
import riks2 from '../../../public/riks2.jpg'
import autoriks from "../../../public/autoriks.jpg";
export default function About() {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 flex flex-col gap-4 px-16 mt-10">
          <div className="text-gray-500 flex justify-between w-8xl h-full items-center">
            <div className="w-3/5 items-center ">
              <p className="w-3/4 ml-16 text-2xl"> We make advertising easy and impactful. Imagine your brand on buses, rickshaws, and taxis, traveling with people wherever they go. We also give insights about the reach of your advertisement.
              </p>
              <p className="w-3/4 ml-16 text-2xl"> We make advertising easy and impactful. Imagine your brand on buses, rickshaws, and taxis, traveling with people wherever they go. We also give insights about the reach of your advertisement.
              </p>
              <p className="w-3/4 ml-16 text-2xl">  Whether you are a brand looking to make a statement or a transport provider seeking new opportunities, we invite you to be part of a movement that is reshaping the way we travel and advertise.
              </p>
            </div>
             <div className="w-2/5 lm-18">
              <Image alt={"Taxi"} src={riks2} width={500} height={500} objectFit="contain" />
            </div>
          </div>
          <div className="text-gray-500  mt-4 flex justify-between w-8xl h-full items-center">
          <div className="w-2/5 lm-18 ml-[50px]">
              <Image alt={"Taxi"} src={autoriks} width={500} height={500} objectFit="contain" className="bg-transparent" />
            </div>
            <div className="w-3/5">
              <p className="w-3/4 ml-[130px] text-2xl">Tailor your advertising campaigns to align with your brand objectives. Choose from various ad formats, placement options, and pricing models to suit your specific marketing goals and budget. </p>
              <div className="text-left ml-[130px] mt-5 text-lg">
                <h1 className="xl">Services:</h1>
                <p>1. Putting ads on public transport vehicles.</p>
                <p>2. Creative ad formats that are eye-catching to engage your audience.</p>
                <p>3. Offering services in target-specific areas.</p>
                <p>4. Giving insights about the reach of your ad</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}