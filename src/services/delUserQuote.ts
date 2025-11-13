import { supabase } from "../../supabase/supabase-admin";
export async function deleteUserQuote(id: string) {
  const { error } = await supabase.from("quotes").delete().eq("id", id);

  if (error) {
    console.log("Error deleting quote:", error.message);
    return false;
  } else {
    return true;
  }
}
