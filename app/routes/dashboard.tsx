import {  LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react"

import Card from "~/components/dashboard/Card"
import Navbar from "~/components/dashboard/Navbar";

import { supabaseServer } from "~/utils/supabase.server";


interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
  }

export const loader= async ({request}:LoaderFunctionArgs)=>{

    const { supabase, response } = supabaseServer({ request });
    
 const {data: { user },} = await supabase.auth.getUser();
 const {data: { session },} = await supabase.auth.getSession();
        
 if (!session) {
   return redirect("/signin");
 }
    
    const {data}=await supabase.from('properties').select()
   


    return {
   data,
   user,
   
   headers:response.headers,
    }
}





export default function Dashboard(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data,user}: { data: Property[],user:string[]} = useLoaderData();
    





    return(
        <>
       
          {/* {user ?( <button   className="border border-black bg-black text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">Sign Out</button>):("")} */}
  

  <Navbar/>
        <h1>Dashboard</h1>
        

        {data.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <div className="grid grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((property) => (
            <Card key={property.id} data={property} />
          ))}
        </div>
      )}
        </>

    )
}