import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];


export function getLoadContext() {
  return {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader=()=>{
  const env={
    SUPABASE_URL:process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY:process.env.SUPABASE_ANON_KEY!,
  }

  return {env}
}





export default function App() {
  const { env }=useLoaderData()
  const [supabase]=useState(()=>createBrowserClient(
    env.SUPABASE_URL!,
    env.SUPABASE_ANON_KEY!,
  ))

  // function signUp(): void {
  //   supabase.auth.signUp({
  //     email:"ibramiabdi.ke@gmail.com",
  //     password:"Ibrahim23"
  //   })
  //   }
    
  //   function signIn(){
  //     supabase.auth.signInWithPassword({
  //         email:"ibramiabdi.ke@gmail.com",
  //     password:"Ibrahim23"
  //     })
  //   }
    


const revalidator=useRevalidator()
    useEffect(()=>{
const {data:{subscription}}=supabase.auth.onAuthStateChange(()=>{
  revalidator.revalidate()   })
 

return()=>{
  subscription.unsubscribe()
}
    },[supabase,revalidator])



   
  return (<>
    {/* <Link to="/" className="border border-white text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">
    Home</Link>
  <Link to="/dashboard" className="border border-white text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">
  Dashboard</Link> */}
  {/* <button onClick={signUp} className="border border-white text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">Sign Up</button>
  <button onClick={signIn} className="border border-white text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">Sign In</button> */}
  

 
  <Outlet />
  </>)
}
