import { supabase } from "../../supabase/supabase-admin";

export async function getUsers() {
    
    const {data, error} = await supabase.from("users").select("*");

    if (error){
        console.log(error.message)
        return{
            errorMessage: error.message,
            users:[],
        }
    }
    return{
        errorMessage:"",
        users:data,
    }
}