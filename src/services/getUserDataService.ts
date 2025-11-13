import { supabase } from "../../supabase/supabase-admin";
export async function getUserQuotes(uuid: string) {
  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .eq("uuid", uuid)
    .order("created_at", { ascending: false });
  if (error) {
    console.log(error.message);
    return {
      errorMessage: error.message,
      quotes: [],
    };
  } else {
    return {
      errorMessage: "",
      quotes: data,
    };
  }
}
