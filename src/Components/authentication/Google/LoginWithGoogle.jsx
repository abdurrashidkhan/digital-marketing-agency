import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import Image from "next/image";
import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import googleLogo from "../../../images/logo/google.png";
// import auth from "../../../firebase.init";
// import Loading from "../../Loading/Loading";
// import "./Login.css";
// import "./style.css";
export default function LoginWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [cUser, cLoading, cError] = useAuthState(auth);
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(cUser.photoURL);

  const userData = {
    displayName: cUser?.displayName,
    email: cUser?.email,
    emailVerified: cUser?.emailVerified,
    phoneNumber: cUser?.phoneNumber,
    photoURL: user?.photoURL,
  };

  useEffect(() => {
    if (cUser) {
      fetch(
        `http://localhost:3000/api/merge-marketing/v1/users/${cUser.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(userData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          // setToken(data.token);
          // console.log(data);
        });
    }
  }, [cUser, userData]);

  useEffect(() => {
    if (user) {
      Swal.fire("Login successfully", "", "success");
    }
  }, [user]);

  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>
        <Image
          className="mx-auto w-[30px] h-auto"
          loading="lazy"
          // placeholder="blur"
          src={googleLogo}
          width={"100%"}
          height={"auto"}
          alt="Loading...."
        />
      </button>
    </div>
  );
}
