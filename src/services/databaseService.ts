import { supabase } from "../../supabase/supabase-admin";

export async function addUserData(payload: {
  id: string;
  name: string;
  date_of_birth: Date;
  email: string;
}) {
  const { data, error } = await supabase
    .from("users")
    .insert([payload])
    .select();

  return { data, error };
}
