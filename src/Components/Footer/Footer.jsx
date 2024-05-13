export default function Footer() {
  return (
    <footer className="dark:bg-[#101C2C] bg-[#e4e4e4] py-10">
      <div className="container mx-auto px-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-items-center">
          <div className="">
            <h1 className="text-2xl font-semibold">E-merge Marketing</h1>
            <p className="text-base py-4">
              e-merge lab is a digital agency that has avaivod to moot the
              changing noods of marketing in the digital age.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold py-2">About</h1>
            <div className="">
              <ul>
                <li className="py-[2px] hover:text-[#20b820]">
                  <a className="" href="/about">
                    About us
                  </a>
                </li>
                <li className="py-[2px] hover:text-[#20b820]">
                  <a className="" href="/our-team">
                    Our Team
                  </a>
                </li>
                <li className="py-[2px] hover:text-[#20b820]">
                  <a className="" href="/news">
                    News
                  </a>
                </li>
                <li className="py-[2px] hover:text-[#20b820]">
                  <a href="/pricing" className="">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold py-2">Marketing</h1>
            <ul>
              <li className="py-[2px] hover:text-[#20b820]">
                <a href={"/marketing"}>Marketing</a>
              </li>
              <li className="py-[2px] hover:text-[#20b820]">
                <a href={"/social-media"}> Social Media</a>
              </li>
              <li className="py-[2px] hover:text-[#20b820]">
                <a href={"/publishers"}>Publishers</a>
              </li>
              <li className="py-[2px] hover:text-[#20b820]">
                <a href={"/agencies"}>Agencies</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold py-2">Get in touch</h1>
            <div className="">
              <p className="text-base py-2">
                Question ar feedback ? we'd love to hear from you.
              </p>
              <input
                type="text"
                placeholder="Enter your feedback"
                className="p-2 rounded dark:bg-[#172a46] bg-[#c2c0c0] w-full focus:outline-none placeholder:text-[#333333] dark:placeholder:text-[#fff]"
              />
              <div className="py-3 text-center">
                <button className="bg-[#20b820] hover:bg-[#25a125] w-full py-2 rounded text-[#fff]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
