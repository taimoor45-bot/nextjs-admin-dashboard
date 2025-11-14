import { supabase } from "../../supabase/supabase-admin";

export async function updateQuoteStatus(id: string, status: boolean) {
  const { data, error } = await supabase
    .from("quotes")
    .update({ "is_approved": status })
    .eq("id", id);

  if (error) {
    console.log(error.message);
    return error.message;
  }
  return data;
}