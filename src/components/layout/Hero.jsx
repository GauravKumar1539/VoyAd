import Image from "next/image";
import Right from "../icons/Right";
import taxi from "../../../public/taxi.jpg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/app/api/models/UserInfo";
import Loginbutton from './LoginButton';

export default function Hero() {
  return (
    <section className="hero md:mt-16 h-full mb-16 flex gap-16">
      <div className="ml-16 bg-transparent mr-8"> {/* Added margin-right here */}
        <Image alt={"Taxi"} src={taxi} objectFit="contain" />
      </div>
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          On the Go
          <br /> <span className="text-gray-500">On the Rise</span>
          <br /> Your Ads, <span className="text-primary">Our Drive</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm max-w-md">
          We make advertising easy and impactful. Imagine your brand on buses, rickshaws, and taxis, traveling with people wherever they go. We also give insights about the reach of your advertisement.
        </p>
        <div className="flex gap-4 text-sm">
          <Loginbutton/>
        </div>
      </div>
    </section>
  );
}
