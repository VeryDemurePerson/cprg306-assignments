"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function ProtectedPage() {
  const { user } = useUserAuth();

  return (
    <main className="p-6">
      <header>
        <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      </header>

      {user ? (
        <section>
          <p>This is your Protected Page</p>
        </section>
      ) : (
        <section>
          <p>You have been logged off.</p>
          <Link href="/week-9">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Go to Sign In
            </button>
          </Link>
        </section>
      )}
    </main>
  );
}
