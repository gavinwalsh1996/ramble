"use client";

import { db, auth } from "@/lib/firebaseConfig";

export default function Home() {
  console.log("✅ Firestore DB:", db);
  console.log("✅ Firebase Auth:", auth);

  return <h1 className="text-2xl font-bold">Firebase Configured 🎉</h1>;
}
