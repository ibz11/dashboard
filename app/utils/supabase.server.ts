import { createServerClient } from "@supabase/auth-helpers-remix";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const supabaseServer = ({ request }: { request: LoaderFunctionArgs["request"] }) => {
  const response = new Response();

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or Key is missing");
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, { request, response });

  return { supabase, response };
};
