"use client";
import LoginWithAll from "@/Components/authentication/LoginWithAll/LoginWithAll";
import Error from "@/app/error";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export default function Login() {
  // const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.userEmail, data.password);
  };

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Login success",
        icon: "success",
      });
      router.push("/");
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <section className="container mx-auto px-2 relative h-[100vh]">
      <div className="content_center w-[350px]  h-auto bg-[#ececec] dark:bg-[#1b2a3f]  p-3 rounded shadow-2xl">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label htmlFor="userEmail" className="block">
              Email address
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="enter your password"
                className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                {...register("userEmail", { required: true })}
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-2 border border-[#bbbbbb]  py-2 drop-shadow-2xl rounded bg-transparent dark:border-[#2f415a] outline-none focus:outline-none"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          {/* <input placeholder="Enter your Password"  {...register("userPassword", { pattern: /^[A-Za-z]+$/i })} /> */}
          <div className="">
            <input
              className="w-full my-4 bg-indigo-700 px-6 p-1 text-[#FFF] rounded shadow-2xl"
              type="submit"
            />
          </div>
        </form>
        {/* login and sign up all */}
        <LoginWithAll />
      </div>
    </section>
  );
}
