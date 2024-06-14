"use client"
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  let isAdmin ;
  
  if (loading || outLoading) {
    return <Loading></Loading>;
  }else{
    isAdmin = CheckAdmin(user,signOut)
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  // console.log(isAdmin)
  return (
    <div className="">
      <h1>Welcome to Dashboard</h1>
      <h1 className="text-sm">Updating this route working</h1>
    </div>
  )
}
