export default function Subscribe() {
  return (
    <div className="container mx-auto px-2 py-10">
      <div className="text-center">
        <p className="text-[#20b820] font-semibold">Subscribe__</p>
        <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked">
          Subscribe to get the latest news about us .
        </h1>
        <p className="text-base capitalize">
          you recommended for you to Subscribe to our newspaper , drop your
          email below to get daily update about us
        </p>
        <div className="flex items-center justify-center py-8">
          <input
            className="p-2 rounded bg-[#fff] dark:bg-[#182b46] border-[#20b820] border-[1px] focus:outline-none dark:border-none"
            type="email"
            placeholder="enter your email address"
          />
          <button className="px-2 bg-[#20b820] py-2 rounded-r tracking-[2px] hover:bg-[#14a314]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
