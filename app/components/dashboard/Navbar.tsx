// import { redirect } from "@remix-run/node";
import { supabaseBrowserClient, supabaseClient } from "~/utils/supabaseClient";
import { useNavigate } from "react-router-dom";


export default function Navbar(){
    const navigate = useNavigate(); // Get navigate function from React Router

    const logOut = async () => {
        console.log("logout"); // Always run
        console.log("Before signOut");
      
        try {
          const { error } = await supabaseClient.auth.signOut(); // Await the sign-out
      
          if (error) {
            console.error("Error during sign out:", error); // Log if there's an error
          } else {
            console.log("Sign-out successful");
          }
        } catch (err) {
          console.error("Unexpected error during sign-out:", err); // Catch unexpected errors
        }
      
        console.log("After signOut");
        // Redirect to the signin page after sign out
        // navigate("/signin");
      };       
  
    return(
        <>
        <button  onClick={logOut} className="border border-black bg-black text-white p-2 m-2 rounded-md hover:bg-white hover:text-black">Sign Out</button>
        </>
    )
}