"use client";
import LoginWithAll from "@/Components/authentication/LoginWithAll/LoginWithAll";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container mx-auto px-2 relative h-[100vh]">
      <div className="content_center w-[350px]  h-auto bg-[#ececec] p-3 rounded shadow-2xl">
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
                className="w-full px-2 border"
                {...register("userEmail", { required: true })}
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-2 border"
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