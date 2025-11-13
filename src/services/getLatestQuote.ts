import { supabase } from "../../supabase/supabase-admin";

export const getLatestQuote = async () => {
  const twentyhours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const { data, error } = await supabase
    .from("quotes")
    .select(
      `
         id,
        uuid,
        auther_name,
        quote,
        is_approved,
        user:users(
        name,
        profile_picture
        )`,
    )
    .gte("created_at", twentyhours.toISOString())
    .order("created_at", { ascending: false });

  console;

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
};
