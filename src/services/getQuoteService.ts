import { supabase } from "../../supabase/supabase-admin";
export async function getQuotes() {
  const { data, error } = await supabase
    .from("quotes")
    .select(
      `
        id,
        uuid,
        auther_name,
        quote,
        is_approved,
        created_at,
        user:users(
        name,
        profile_picture
        )
        `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    return {
      errorMessage: error.message,
      quotes: [],
    };
  }
  return {
    errorMessage: "",
    quotes: data,
  };
}
