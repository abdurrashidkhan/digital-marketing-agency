import AdminApi from "@/database/find/allUsers/AdminApi";
import Swal from "sweetalert2";

export default async function CheckAdmin(user, signOut) {
  const email = user?.email;
  let isAdmin;
  if (email) {
    isAdmin = await AdminApi(email);
    if (isAdmin?.admin === true) {
      Swal.fire({
        title: "Admin Access Allowed",
        icon: "success",
      });
    } else {
      await signOut();
      Swal.fire({
        title: "Your are not admin",
        icon: "info",
      });
    }
  } else {
    return;
  }

  return isAdmin;
}
