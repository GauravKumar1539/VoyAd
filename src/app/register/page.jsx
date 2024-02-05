"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {signIn} from "next-auth/react"

export default function RegisterPage() {

  // useState is only used as client component so we cant use it on server so we have to use "use client" at the top
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userCreating,setUserCreating]= useState(false);
  const [userCreated,setUserCreated]= useState(false);
  const [error,setError] = useState(false);

  async function handleFormSubmit(event) {
    event.preventDefault();

    //reset all states before a submit is called again
    setUserCreating(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch('/api/register', {
      method:'POST',
      body: JSON.stringify({email,password}),
      headers:{'Content-Type':'application/json'},
    });

    if(response.ok){
      setUserCreated(true);
    }
    else {
      setError(true);
    }

    setUserCreating(false);
  }

  function showUserCreatedMessage(){
    return (
      <div className='text-center my-4'>
        User Created Succesfully.<br/> 
        You can now {' '}
        <Link href={'/login'} className='text-primary font-semibold'>Login &raquo;</Link>
      </div>
    ) 
  }

  function showErrorMessage(){
      return <div className='text-center my-4'>An Error has occured. Try again later</div>
  }
  
  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated&&showUserCreatedMessage()}
      {error&& showErrorMessage()}
      <form action="" className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email" 
          disabled={userCreating}
          placeholder="Email-ID" 
          value={email} 
          onChange={ev=>setEmail(ev.target.value)}
        />
        <input 
          type="password" 
          name="" 
          disabled={userCreating}
          placeholder="Enter your password" 
          value={password} 
          onChange={ev=>setPassword(ev.target.value)}
        />
        <button 
          type="submit"
          disabled={userCreating}
        >Register</button>

        <div className="text-center my-4 text-gray-500">or Login with provider</div>
        
        <button type="button" onClick={()=> signIn('google',{callbackUrl:'/'}) } className='flex gap-4 justify-center'>
          <Image src={'/google.png'} alt={'google'} width={24} height={24}/>
          Login with Google
        </button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>Account Exists already? <Link href={'/login'} className='text-primary underline font-bold'>Login</Link></div>
      </form>
        

    </section>
  );
}
