import OurClientReview from "./OurClientReview";
import "./style.css";
export default function OurClient() {
  return (
    <div className="container px-2 mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-5">
        <div className="">
          <div className="">
            <div className="px-4">
              <p className="text-[#20b820]">Our Testimonial__</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl py-4">
                What our clients say about us.
              </h1>
              <p>
                Conducted comprehensive website analysis focusing on SEO, user
                experience, and content relevance. Identified optimization
                opportunities for enhanced visibility and engagement. Presented
                actionable recommendations for improved performance
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <OurClientReview />
        </div>
      </div>
    </div>
  );
}
