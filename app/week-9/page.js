"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log("Sign-in error:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Sign-out error:", error);
    }
  }

  return (
    <main className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-4">Firebase Auth</h1>
      </header>

      {user ? (
        <section>
          <div className="mb-4">
            <p>Welcome, {user.displayName}</p>
            <p>{user.email}</p>
            <img className="w-24 h-24 rounded-full mt-2" src={user.photoURL} alt="User Avatar" />
          </div>

          <div className="mb-4">
            <Link
              href="/week-9/protected"
              className="text-blue-600 underline"
            >
              Go to Protected Page
            </Link>
          </div>

          <div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </section>
      ) : (
        <section>
          <button
            onClick={handleSignIn}
            className="text-lg bg-blue-600 text-white rounded-xl px-4 py-2"
          >
            Sign in with GitHub
          </button>
        </section>
      )}
    </main>
  );
}
