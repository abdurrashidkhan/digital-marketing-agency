"use client"
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useEffect } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function ManageServices() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser(); // call checking user fund or not
  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);


  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>Manage services </div>
  )
}