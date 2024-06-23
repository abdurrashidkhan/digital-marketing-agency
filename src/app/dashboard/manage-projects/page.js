
"use client";
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import uesDeleteProject from "@/database/delete/uesDeleteProject";
import uesAllProjects from "@/database/find/allProjects/useAllprojects";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
export default function ManageProject() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [allProjectsInfo, setServiceInfo] = useState([]);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const projectInfo = async () => {
    const { allProjects } = await uesAllProjects();
    console.log(allProjects)
    setServiceInfo(allProjects);
  };
  const deleteProject = async (id)=>{
    console.log(id)
    const { allProjects } = await uesDeleteProject(id);
    console.log(allProjects)
  }
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    projectInfo();
  }, [user, signOut]);
  // data faceting

  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-[#000] dark:text-[#fff] ">No.</th>
              <th className="text-[#000] dark:text-[#fff] ">Title</th>
              <th className="text-[#000] dark:text-[#fff] ">Date</th>
              <th className="text-[#000] dark:text-[#fff] ">Price</th>
              <th className="text-[#000] dark:text-[#fff] ">Categories</th>
              <th colSpan={2} className="text-center text-[#000] dark:text-[#fff] ">Action</th>
            </tr>
          </thead>
          <tbody>
            {allProjectsInfo.map((service, index) => (
              <tr key={service?._id}>
                <th>{index + 1}</th>
                <td className="capitalize">{service?.title}</td>
                <td className="capitalize">{service?.date}</td>
                <td className="capitalize">{service?.categories}</td>
                <td className="capitalize">{service?.price}</td>
                <td className="capitalize">
                  <Link href={`/service/${service?._id}`}>Prev View</Link>
                </td>
                <td className="capitalize">
                  <button onClick={()=>deleteProject(service?._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
