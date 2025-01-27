import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { createClient } from "@supabase/supabase-js";



/**
 * Initialize a supabase client, used to make API calls.
 */


export const supabaseClient = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

export const supabaseBrowserClient = createBrowserClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string
  );
  
console.log("ENV: ",process.env.SUPABASE_URL)
// export const session=await supabaseClient.auth.getSession();

