import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import userInfoInsert from "@/database/userInfoInsert/userInfoInsert";
import Image from "next/image";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleLogo from "../../../images/logo/google.png";
export default async function LoginWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [cUser, cLoading, cError] = useAuthState(auth);
  // console.log(cUser.accessToken);
  const userInfo = {
    displayName: cUser?.displayName,
    email: cUser?.email,
    uid: cUser?.uid,
    emailVerified: cUser?.emailVerified,
    photoURL: cUser?.photoURL,
    accessToken: cUser?.accessToken,
  };
  const userInfoSend = await userInfoInsert(userInfo);
  if (loading || cLoading) {
    return <Loading></Loading>;
  }

  let errorElement = "";
  if (error || cError) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
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
