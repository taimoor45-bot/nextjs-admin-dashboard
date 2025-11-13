// hooks/useAuth.tsx
"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase-admin";

type SupaUser = any; // replace with specific types if desired

export function useAuth() {
  const [user, setUser] = useState<SupaUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // initial user fetch
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      setUser(data?.user ?? null);
      setLoading(false);
    })();

    // subscribe to changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
