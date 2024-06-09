"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import './Upload.css'

const Addservice = () => {
  const [isLoading, seIsLoading] = useState(false);
  const [thimbleOne, setThimbleOne] = useState("");
  const [thimbleTwo, setThimbleTwo] = useState("");
  const [thimbleThree, setThimbleThree] = useState("");
  const [thimbleFore, setThimbleFore] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // loading start
    seIsLoading(true);

    // thimble
    const imgbbAPIKey = "0f140d3e8e7c284d126389c955a6ca33";
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    // const imageOne = data.imageOne[0];
    // formData.append('imageOne', imageOne);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleOne(result.data.url)
    //     }
    //   })

    // const imageTwo = data.imageTwo[0];
    // formData.append('imageTwo', imageTwo);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleTwo(result.data.url)
    //     }
    //   })

    // const imageThree = data.imageThree[0];
    // formData.append('imageThree', imageThree);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleThree(result.data.url)
    //     }
    //   })

    // const imageFore = data.imageFore[0];
    // formData.append('imageFore', imageFore);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleFore(result.data.url)
    //     }
    //   })

    // end thimble

    const image = data.image[0];
    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const service = {
            name: data.servicesName,
            title: data.servicesTitle,
            unit: data.serviceUnit,
            status: data.serviceStatus,
            categories: data.catagories,
            price: data.servicePrice,
            brand: data.servicesBrand,
            section: data.servicesSection,
            serviceDiscount: data.serviceDiscount,
            date: new Date(),
            serviceFacture: [
              { facture: data.serviceFacture },
              { facture: data.serviceFactureTwo },
              { facture: data.serviceFactureThree },
              { facture: data.serviceFactureFore },
              { facture: data.serviceFactureFive },
              { facture: data.serviceFactureSix },
              { facture: data.serviceFactureSeven },
              { facture: data.serviceFacture },
            ],
            // thimble: [
            //   { thimble: data.thimbleOne },
            //   { thimble: data.thimbleTwo },
            //   { thimble: data.thimbleThree },
            //   { thimble: data.thimbleFore }

            // ],
            img: img,
            quantity: data.servicesQuantity,
            description: data.serviceDescription,
          };
          console.log(service);
          // send service data to database
          fetch(
            "https://actual-services-of-e-commerce-server-site.vercel.app/service/add-service",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(service),
            }
          )
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.status) {
                Swal.fire("service add success", "", "success");
                reset();
                seIsLoading(false);
              }
            });
          // console.log(service);
        }
      });
  };

  return (
    <div className="w-[98%]">
      <div
        id="service-content"
        className="rounded  bg-[#fff] dark:text-[#fff] shadow-2xl  mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4 text-slate-700 pl-5">
              Add Service
            </h1>
          </div>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="servicesName" className="text-slate-700 ">
                  Service Name{" "}
                </label>
                <input
                  id="servicesName"
                  name="servicesName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  placeholder="Type Here service Name "
                  {...register("servicesName", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.servicesName?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicesName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="servicesTitle" className="text-slate-700 ">
                  Service Title{" "}
                </label>
                <input
                  id="servicesTitle"
                  name="servicesTitle"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  placeholder="Type Here service Name "
                  {...register("servicesTitle", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "service title is short",
                    },
                  })}
                />
                <label className="">
                  {errors.servicesTitle?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicesTitle.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="servicePrice" className="text-slate-700 ">
                  Service price{" "}
                </label>
                <input
                  id="servicePrice"
                  name="servicePrice"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  placeholder="service price"
                  {...register("servicePrice", {
                    required: {
                      value: true,
                      message: "please enter your service price",
                    },
                  })}
                />
                <label className="">
                  {errors.servicePrice?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicePrice.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="serviceDiscount" className="text-slate-700 ">
                  service Discount{" "}
                </label>
                <input
                  id="serviceDiscount"
                  name="serviceDiscount"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  placeholder="service Discount"
                  {...register("serviceDiscount", {
                    required: {
                      value: true,
                      message: "please enter service discount",
                    },
                  })}
                />
                <label className="">
                  {errors.serviceDiscount?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.serviceDiscount.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="catagories" className="text-slate-700 ">
                  Service Catagories
                </label>
                <select
                  id="catagories"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  {...register("catagories", {
                    required: {
                      value: true,
                      message: "Select Catagories",
                    },
                  })}
                >
                  <option selected disabled>
                    Select Catagories
                  </option>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="monitor">Monitor</option>
                  <option value="watch">Watch</option>
                  <option value="headphone">Headphone</option>
                  <option value="computer">Computer</option>
                  <option value="computer-accessories">
                    Computer Accessories
                  </option>
                  <option value="charger-cables">Charger and Cables</option>
                  <option value="power-bank">Power Bank</option>
                  <option value="cards-coupons">Cards and Coupons</option>
                  <option value="registry-gifting">Registry and Gifting</option>
                  <option value="tv">Tv</option>
                </select>
                <label className="">
                  {errors.catagories?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.catagories.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="serviceFacture"
                  className="text-slate-700 "
                >
                  service Facture
                </label>
                <input
                  id="serviceFacture"
                  name="serviceFacture"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                  placeholder="service Facture"
                  {...register("serviceFacture", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.serviceFacture?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.serviceFacture.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="pt-3">
              <label htmlFor="image" className="text-slate-700 ">
                Service Photo
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2"
                placeholder="Type Here service photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pt-3">
              <label htmlFor="serviceBenefit" className="text-slate-700 ">
                Service Benefit              </label>
              <textarea
                cols="10"
                rows="5"
                id="serviceBenefit"
                name="serviceBenefit"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#fff] mt-2"
                placeholder="Type Here service Benefit "
                {...register("serviceBenefit", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.serviceBenefit?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.serviceBenefit.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pt-3">
              <label htmlFor="serviceDescription" className="text-slate-700 ">
                Service Description
              </label>
              <textarea
                cols="10"
                rows="5"
                id="serviceDescription"
                name="serviceDescription"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#fff] mt-2"
                placeholder="Type Here service Description "
                {...register("serviceDescription", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.serviceDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.serviceDescription.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {isLoading ? (
            <button
              className="btn w-full rounded capitalize bg-blue-700 py-2 text-white hover:bg-blue-600 rounded-b border-none"
              disabled
            >
              <span className="loading loading-spinner"></span>
              loading...
            </button>
          ) : (
            <button className="uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b">
              submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Addservice;
