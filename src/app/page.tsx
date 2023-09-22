/** @format */
"use client";
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <>
      <Navbar />
      <h1>Home page</h1>
    </>
  );
}
