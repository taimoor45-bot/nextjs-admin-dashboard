import { supabase } from "../../supabase/supabase-admin";

export async function AddQuote(payload: {
  uuid: string;
  quote: string;
  auther_name: string;
  is_approved: boolean;
}) {
  const { data, error } = await supabase
    .from("quotes")
    .insert([payload])
    .select();

  return { data, error };
}
