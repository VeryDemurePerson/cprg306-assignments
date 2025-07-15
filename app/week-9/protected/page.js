"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // redirect to login if not signed in
    }
  }, [user]);

  return (
    <main>
      <header>
        <h1>Protected Page</h1>
      </header>

      {user && (
        <section>
          <p>This is your Protected Page</p>
        </section>
      )}
    </main>
  );
}
