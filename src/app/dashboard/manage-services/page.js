import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function ManageServices() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser();
  let isAdmin ;
  if (loading || outLoading) {
    return <Loading></Loading>;
  }else{
    isAdmin = CheckAdmin(user,signOut)
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>Manage Users {isAdmin}</div>
  )
}