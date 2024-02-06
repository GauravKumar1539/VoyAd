"use client";
import { useProfile } from "@/components/UseProfile";
import { useState } from "react";
import EditableImage from "./EditableImage";
import AddressInputs from "./AddressInputs";
// import { userInfo } from "os";

export default function UserForm({ user, onSave }) {

  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [userType, setUserType] = useState(user?.userType || 3);
  const [admin, setAdmin] = useState(user?.admin || false);
  const [accountNo, setAccount] = useState(user?.accountNo || "");
  const [ifscCode, setIfsc] = useState(user?.ifscCode || "");
  const [vehicle, setVehicle] = useState(user?.ifscCode || "");
  const { data: loggedInUserData } = useProfile();

  return (
    <div className="md:flex gap-4">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            image,
            phone,
            admin,
            accountNo,
            ifscCode,
            city,
            vehicle,
            userType,
            postalCode,
          })
        }
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={"email"}
        />
        <label>Phone</label>
        <input
          type="tel" placeholder="Phone number"
          value={phone} onChange={ev => setPhone(ev.target.value)} />
          <label>Select Type</label>
          <select
              value={userType}
              onChange={(ev) => setUserType(ev.target.value)}
            >
              <option value={2}>Advertiser</option>
              <option value={1}>Driver</option>
          </select>
          {(userType===1) &&(
            <>
            <label>Account No.</label>
              <input
                type="text" placeholder="Account Number"
                value={accountNo} onChange={ev => setAccount(ev.target.value)}
              />
              <label>IFSC Code</label>
              <input
                type="text" placeholder="IFSC Code"
                value={ifscCode} onChange={ev => setIfsc(ev.target.value)}
              />
              <label>Vehicle Registration No</label>
              <input
                type="text" placeholder="Vehicle No"
                value={vehicle} onChange={ev => setVehicle(ev.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
              <div>
                <label>Postal code</label>
                <input
                  type="text" placeholder="Postal code"
                  value={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text" placeholder="City"
                  value={city} onChange={ev => setCity(ev.target.value)}
                />
              </div>
            </div>
            </>
          )
        }
      
        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
