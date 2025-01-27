import { Link } from "@remix-run/react";

export default function  signup(){
    return(
        <>
        <h1>Sign Up</h1>
<form action="">
        <div className="m-2 flex flex-col gap-2">
        <input type="text" name="name" className="w-48 border border-white bg-white p-1 rounded-md text-black" placeholder="Name"/>
         <input type="text" name="email" className="w-48 border border-white bg-white p-1 rounded-md text-black" placeholder="Email"/>
         <input type="text" name="password"className="w-48 border border-white bg-white p-1 rounded-md text-black" placeholder="Password"/>
         <Link to="/signin" className="hover:underline"><p>sign in</p></Link>
         <button className="bg-black rounded-md border hover:bg-white hover:text-black p-1 w-48">Login</button>
        
        </div>
        </form>

        </>
    )
}