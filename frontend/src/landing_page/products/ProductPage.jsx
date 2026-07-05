import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <div>
            <Hero/>
            <LeftSection imgUrl={'/public/Assets/kite.png'} paraText={`Our ultra-fast flagship trading platform with \n streaming market data, advanced charts, an \n elegant UI, and more. Enjoy the Kite \n experience seamlessly on your Android and \n iOS devices.`} headingText={"Kite"} />
           
            <RightSection imgUrl={'/public/Assets/kite.svg'} headingText={"Kite Connect API"} paraText={`Build powerful trading platforms and \n experiences with our super simple HTTP/\n JSON APIs. If you are a startup, build your \n investment app and showcase it to our \n clientbase. `} />
            <LeftSection imgUrl={'/public/Assets/products-coin.png'} headingText={"Coin"} paraText={`Buy direct mutual funds online, commission-\n free, delivered directly to your Demat \n account. Enjoy the investment experience \n on your Android and iOS devices. `}/>
             {/* <LeftSection imgUrl={'/public/Assets/products-console.png'} headingText={"Console"} paraText={`The central dashboard for your Zerodha \n account. Gain insights into your trades and \n investments with in-depth reports and \n visualisations. `}/> */}
             <RightSection imgUrl={'/public/Assets/varsity-products.svg'} headingText={'Varsity mobile'} paraText={` An easy to grasp, collection of stock market \n lessons with in-depth coverage \n and illustrations. Content is broken down into \n bite-size cards to help you learn on the go. `} />

            <Universe/>
        </div>
     );
}

export default ProductPage;