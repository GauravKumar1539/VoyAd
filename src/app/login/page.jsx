"use client"
import {signIn, useSession} from "next-auth/react"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    const session=useSession();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loggingIn,setLoggingIn] = useState(false);

    async function handleFormSubmit(event) {
        event.preventDefault();
        setLoggingIn(true);
        console.log(session);
        await signIn('credentials', {email, password, callbackUrl: '/'});
        console.log(session);
        setLoggingIn(false);
    }
  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login </h1>

        <form onSubmit={handleFormSubmit} className="block max-w-xs mx-auto">
            <input 
            type="email"
            name="email" 
            disabled={loggingIn}
            placeholder="Email-ID" 
            value={email} 
            onChange={ev=>setEmail(ev.target.value)}
            />
            <input 
            type="password" 
            name="password" 
            disabled={loggingIn}
            placeholder="Enter your password" 
            value={password} 
            onChange={ev=>setPassword(ev.target.value)}
            />
            <button 
                type="submit"
                disabled={loggingIn}
            >Login</button>

            <div className="text-center my-4 text-gray-500">or Login with provider</div>
            <button 
                type="button" 
                onClick={()=> signIn('google',{callbackUrl:'/'})} 
                className='flex gap-4 justify-center'
            >
            <Image 
                src={'/google.png'} 
                alt={'google'} 
                width={24} 
                height={24}
            />
            Login with Google
            </button>

            <div className='text-center my-4 text-gray-500 border-t pt-4'>Don&apos;t have an account? <Link href={'/register'} className='text-primary underline  font-bold'>Register Here</Link></div>
        </form>
    </section>
  );
}
