import TeamMemberSlider from "./TeamMemberSlider";
export default function OurTeam() {
  return (
    <section>
      <div className="container mx-auto px-2 py-10 ">
        <div className="text-center">
          <p className="text-[#20b820] font-semibold">Our Team__</p>
          <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked ">
            Meet With our awsome team.
          </h1>
          <p>
            Meet our dynamic digital marketing team, adept in SEO, content
            creation, social media management, and analytics. We&apos;re
            committed to amplifying your brand&apos;s online presence and
            driving impactful results.
          </p>
        </div>
        {/* our team member */}
        <div className="py-8">
          <TeamMemberSlider></TeamMemberSlider>
        </div>
      </div>
    </section>
  );
}
