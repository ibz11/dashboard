import { Link, redirect } from "@remix-run/react";

import { Layers } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import type { ActionFunctionArgs } from '@remix-run/node'
import {  createServerClient } from "@supabase/auth-helpers-remix";
import { useState } from "react";

// import { createClient } from "@supabase/supabase-js";



export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  
    // Ensure Supabase URL and Anon Key are available
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL or Anon Key is missing");
    }
  

    const response = new Response();
    // Create Supabase client
    const supabase = createServerClient(supabaseUrl, supabaseKey, { request ,response});
  
    // Perform sign-in
    const { data:{user,session}, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    // Error handling
    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
  
    if (session) {
      // Redirect to the dashboard if the user is already signed in
      return redirect("/dashboard",{ headers: response.headers });
    }
    //Redirect on success
    if (user) {
       
      return redirect("/dashboard", { headers: response.headers });
    }




  
    return json({ error: "Unknown error occurred" }, { status: 500 });

}

export default function  Signin(){
   const [showPassword,setShowPassword] =useState(false)
   function togglePassword(){
    setShowPassword(prev=>!prev);
   }
    const actionData = useActionData();
  
    return(
<>
<div className="pt-32 pb-20 flex justify-center ">

  <div>

    <Link to="/" className="flex gap-2 justify-center my-3 hover:text-gray-500"><Layers className="mt-0.5" />  <h1 className="text-2xl font-bold">Abmara Properties</h1></Link>



   <div className="p-4 border border-slate-200 rounded-md shadow-lg">
        <h1 className="text-center my-3 text-5xl font-bold mb-8">Sign In</h1>
        <Form  method="post">

        <div className="m-2 flex flex-col gap-2">
          <div className="mb-3">
         <input type="text" name="email" className="w-72 border border-slate-200 bg-white p-1.5 rounded-md text-black" placeholder="Your Email"/>
         </div>
         <div className="flex gap-2 mb-3 ">
         <input name="password" type={!showPassword?`password`:`text`}className="w-64 border  border-slate-200 bg-white p-2 rounded-md text-black" placeholder="Your Password"/> 
         <button onClick={togglePassword}>{showPassword?<Eye />:<EyeOff />}</button>
  
         </div>
         <div className="mb-3">
         <Link to="/signup" className="hover:underline"><p>You don`t have an account? Sign up here</p></Link>
         </div>

         <button type="submit" className="bg-black  text-white rounded-md border hover:bg-white hover:text-black p-2 ">Sign In</button>
        
        </div>
        </Form>

        {actionData?.error  && (
          <p className="text-red-600">{actionData?.error}</p>
       
       )}
       </div>

  </div>
  </div>    
</>

    )
}