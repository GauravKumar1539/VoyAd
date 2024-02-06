'use client'
import Link from "next/link";
import { useProfile } from "../UseProfile"
import Right from "../icons/Right";

export default function Loginbutton(){
    const {loading:profileLoading, data:profileData} = useProfile();
    const userType = profileData.userType;

    return (
       <div>
            {userType !== 2 && userType !== 1 && (
            <>
            <div className="inline-flex gap-8">
            <Link href={'/login'} className="flex justify-center gap-4 uppercase bg-primary text-white font-semibold rounded-full px-5 py-2 text-sm items-center ">
                I am an advertiser
                <Right />
              </Link>
              <Link href={'/login'} className="text-[14px] flex justify-center gap-2 uppercase bg-gray-500 text-white font-semibold rounded-full px-5 py-2 text-sm items-center">
                I am a Driver
                <Right />
              </Link>
            </div>
            </>
          )} 
          {userType === 1 && (
            <Link href='/menu' className="flex justify-center gap-2 uppercase bg-primary text-white font-semibold rounded-full px-5 py-2 text-sm items-center ">
              Book your ads
              <Right />
            </Link>
          )}
          {userType === 2 && (
            <Link href={'/menu'} className="flex justify-center gap-2 uppercase bg-primary text-white font-semibold rounded-full px-5 py-2 text-sm items-center ">
              List Your ads
              <Right />
            </Link>
          )}
       </div>
    );
}