
import Hero from "./component/Hero";

import Menue from "./menue/Menue";

import Chefss from "./Ourchefs/Chefss";
import BlogPage from "./blogdetails/blogPage";
import BlogDetails from "./blogdetails/BlogDetailsHero";

import AboutUs from "./about/Aboutus";
import Checkout from "./checkout/Checkout";
import Signup from "./signup/Signup";
import Qpage from "./Faqpage/Qpage";
import Faqpage from "./Qpage2/Faqpage";
import Signin from "./Signin/SignIn";
import Ourshop from "./ourshop/Ourshop";
import Shopdetails from "./Shopdetails/Shopdetails";
import Resturant  from "./component/Resturant";
import Resturant2 from "./component/Resturant2";




 
 const page = () => {
   return (
     <div>
       
      <Hero />
      <Resturant />
      <Resturant2/>
 
      <Menue />
    <AboutUs />
    <Chefss />
  <BlogPage/>
  <BlogDetails />
  <Checkout />
  <Signup />
  <Qpage />
  <Faqpage />
  <Signin />
  <Ourshop />
  <Shopdetails />
  
  
 
   
   
     
   </div>
   )
 }
 
 export default page
 