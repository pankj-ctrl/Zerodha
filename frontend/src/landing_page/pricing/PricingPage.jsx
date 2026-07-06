import Brokerage from "./Brokerage";
import Hero from "./Hero";
import PricingTabs from "./PricingTabs";
import SecondPricingTabs from "./SecondPricingTabs";

function PricingPage() {
    return ( <div>
        <Hero/>
        <PricingTabs/>
        <SecondPricingTabs/>
        <Brokerage/>
    </div> );
}

export default PricingPage;