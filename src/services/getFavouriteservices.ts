import { supabase } from "../../supabase/supabase-admin";

export async function getFavourites() {
  const { data, error } = await supabase.from("favorites").select("*");
  console.log({ data, error });
  if (error) {
    console.log(error.message);
    return {
      errorMessage: error.message,
      favorites: [],
    };
  }
  return {
    errorMessage: "",
    favorites: data,
  };
}
