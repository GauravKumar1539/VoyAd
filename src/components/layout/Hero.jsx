import Image from "next/image";
import Right from "../icons/Right";
import taxi from "../../../public/taxi.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/app/api/models/UserInfo";
import Loginbutton from './LoginButton';

export default function Hero() {
  return (
    <section className="hero md:mt-16 h-full mb-16 flex gap-16">
      <div className="ml-[110px] bg-transparent mr-8" style={{width:'45rem'}}> {/* Added margin-right here */}
        <Image alt={"Taxi"} src={taxi} objectFit="contain" />
      </div>
      <div className="py-8 md:py-12">
        <h1 className="text-7xl font-semibold mb-5">
          On the Go
          <br /> <span className="text-gray-500">On the Rise</span>
          <br /> Your Ads, <span className="text-primary">Our Drive</span>
        </h1>
        <div className="flex gap-4 text-xl">
          <Loginbutton/>
        </div>
      </div>
    </section>
  );
}