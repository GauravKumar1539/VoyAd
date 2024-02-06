'use client';
import { useProfile } from "@/components/UseProfile";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { redirect } from "next/navigation";
import {useEffect, useState} from "react";
import {useSession } from "next-auth/react";

export default function Listings() {
  const session = useSession();
  const status = session?.status;
  // const status = session?.
  const {loading:profileLoading, data:profileData} = useProfile();
  const userType = profileData.userType;
  console.log(profileData);

  
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
  }, [userType]);
  if(status==='unauthenticated'){
    redirect('/login');
  }
  return (
    <section className="mt-8">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
            {menuItems.filter(item => item.category === c._id).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}