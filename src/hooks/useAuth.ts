"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase-admin";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadUser() {
      // 1️⃣ Get auth user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!active) return;

      setUser(user);

      if (user) {
        // 2️⃣ Fetch additional profile fields from "users" table
        const { data: profileData } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id)
          .single();

        setProfile(profileData);
      }

      setLoading(false);
    }

    loadUser();

    // ⚡ Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, profile, loading };
}
