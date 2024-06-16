"use client"
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser();
  let isAdmin ;
  if (loading || outLoading) {
    return <Loading></Loading>;
  }else{
    // isAdmin = CheckAdmin()
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div className="">
      <h1>Welcome to Dashboard</h1>
      <h1 className="text-sm">Updating this route working</h1>
    </div>
  )
}
