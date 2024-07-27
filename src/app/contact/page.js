import ContactForm from "@/Components/ContactForm/ContactForm";
import "./style.css";
export default function Contact() {
  return (
    <section className="">
      <div className="container mx-auto py-10">
        <div className="">
          {/* contact banner  */}
          <div className="">
            <div id="contact_banner" className="relative">
              <div className="contact_content text-center">
                <h1 className="text-4xl font-semibold text-[#fff]">
                  Contact anay needed.
                </h1>
                <p className="text-[#faf3f3dd] py-10 tracking-[1px] ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora dolor voluptatum tempore dignissimos provident dolorum
                  doloribus iste ipsam incidunt labore iure fuga unde nobis
                  mollitia dolores earum distinctio adipisci eligendi nostrum,
                  asperiores est vero? Necessitatibus, excepturi. Laboriosam
                  assumenda quaerat eius? Voluptates, culpa doloremque nostrum
                  laudantium a porro deleniti consequuntur architecto?
                </p>
                {/* <button  className="bg-[#ff3b55a8] px-5 py-1.5  text-lg text-[#fff] rounded shadow-2xl">Get started</button> */}
              </div>
            </div>
          </div>
          <div className="py-8 pb-10 text-center ">
            <h1 className="text-2xl ">Let&apos;s Start a Conversation</h1>
            <p className="py-1">
              Here are some of our common questions. Contact us to know more and
              your question will be answered within 24hours
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5  shadow-2xl px-4">
            <div className="">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-lg font-medium">
                    Differentiate between direct marketing and branding?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Direct marketing has a direct impact on top-line revenue.
                      Typically, a high level of urgency and priority is
                      assigned. Brand marketing has a long-term impact on brand
                      equity and serves as a barrier to market pressures.
                      It&rsquo;s not urgent, but it&rsquo;s critical.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    List a few disadvantages of Digital Marketing?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Skills and training - Make sure your staff has the
                      expertise and experience they need to properly deploy
                      digital marketing. Tools, platforms, and trends change
                      quickly, so being up to date is essential.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    What are some of the popular digital marketing tools?
                  </div>
                  <div className="collapse-content">
                    <p>
                      In Digital Marketing, there are a variety of techniques
                      that can be utilized to achieve a specific aim. Here are a
                      few examples:
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    What are the best practices to rank your YouTube videos?
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li>1. Create content that’s informative and engaging</li>
                      <li>2. Optimize your videos. Some ways to do this are: </li>
                      <li>3. The title needs to have a high search volume and low difficulty</li>
                      <li>4. Use a captivating thumbnail and relevant hashtag</li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                  What is the use of anchor tags in SEO?
                  </div>
                  <div className="collapse-content">
                    <p>
                    Anchor tags are basically tags that are attached to a word or a phrase, that brings down the readers to a different section of the page as opposed to another webpage. This means you are creating a unique URL within the same page. Some of the benefits of using the anchor tags include:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/*  */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
