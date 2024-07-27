import Pricing from "@/Components/Pricing/Pricing";
import PricingBanner from "@/Components/PricingBanner/PricingBanner";

export default function PricingPage() {
  return (
    <section>
      <PricingBanner/>
      <div className="container mx-auto py-10 ">
        <Pricing />
      </div>
    </section>
  );
}
