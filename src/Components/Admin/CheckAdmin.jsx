import AllUsers from "@/database/find/allUsers/AllUsers";
import Swal from "sweetalert2";

export default async function CheckAdmin(email, signOut) {
  let isAdmin;
  if (email) {
    isAdmin = await AllUsers(email);
  } else {
    return;
  }
  if (isAdmin === "admin") {
    Swal.fire({
      title: "Admin Access Allowed",
      icon: "success",
    });
    console.log(isAdmin);
  } else {
    Swal.fire({
      title: "Your are not admin",
      icon: "info",
    });
    console.log(isAdmin);
    await signOut();
  }
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  // if (error) {
  //   console.log(error?.message);
  // }
  return isAdmin;
}
