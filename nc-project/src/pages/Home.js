
import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import bgImage from '../images/couple-sitting.jpg';
import "../Fonts.css";
// function Home() {
//   return (
//     //     <div>
//     //       <section id="about">
//     //         <h2>A COMPANY YOU CAN TRUST</h2>
//     //         <h3>YOU'RE SURE TO BE IMPRESSED BY OUR KNOWLEDGE AND EXPERTISE</h3>
//     //         <p>
//     //           You have every right to be picky about who you hire to work in your home. When you need heating and cooling services, you deserve complete confidence that the technicians will respect your space. That's why you should make Northern Comfort LLC your go-to local HVAC company in Arlington and surrounding areas.
//     //         </p>

//     //       </section>

//     //       <section id="about">
//     //         <h2>Let Our Family Take Care of Yours </h2>
//     //        <p>
//     //         We are a family-owned and operated company with over 23 years of experience, giving us the know-how needed to tackle any household or commercial HVAC project.
//     //        </p>
//     //       </section>

//       // <section id="service area">
//       //   <h2>Areas we Serve </h2>
//       //   <p>
//       //     Snohomish County, Skagit County, and King County
//       //     {/* Click here for map */}
//       //   </p>
//       // </section>

//     //       <section id="products">
//     //         <h2>The American Standard Way</h2>
//     //         We use only the best in the industry! American Standard is the gold standard of HVAC! With over 100 years of dependability that is unmatched.
//     //       </section>

//     //       <section id="contact">
//     //         <h2>Contact Us</h2>
//     //         {/* Add clickable button */}
//     //       </section>
//     // </div>
//     <Grid
//       h="600px"
//       templateRows="repeat(2, 1fr)"
//       templateColumns="repeat(5, 1fr)"
//       gap={4}
//     >
//       <GridItem className="aside-img"
//        rowSpan={2} 
//        colSpan={1} 
//        bgImage={`url(${bgImage})`}
//        bgSize='cover'
//        bgPosition='center' />
//       <GridItem colSpan={2} bg="papayawhip" />
//       <GridItem colSpan={2} bg="papayawhip" />
//       <GridItem colSpan={4} bg="tomato" />
//     </Grid>
//   );
// }

// export default Home;

import React from 'react';
import "../Fonts.css";

function Home() {
  return (
    <div>
      <section id="about">
        <h2>A COMPANY YOU CAN TRUST</h2>
        <h3>YOU'RE SURE TO BE IMPRESSED BY OUR KNOWLEDGE AND EXPERTISE</h3>
        <p>
          You have every right to be picky about who you hire to work in your home. When you need heating and cooling services, you deserve complete confidence that the technicians will respect your space. That's why you should make Northern Comfort LLC your go-to local HVAC company in Arlington and surrounding areas. 
        </p>
        
      </section>

      <section id="about">
        <h2>Let Our Family Take Care of Yours </h2>
       <p>
        We are a family-owned and operated company with over 23 years of experience, giving us the know-how needed to tackle any household or commercial HVAC project.
       </p>
      </section>

      <section id="service area">
        <h2>Areas we Serve </h2>
        <p>
          Snohomish County, Skagit County, and King County
          {/* add button for map of area */}
        </p>
      </section>

      <section id="products">
        <h2>The American Standard Way</h2>
        We use only the best in the industry! American Standard is the gold standard of HVAC! With over 100 years of dependability that is unmatched. 
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        {/* Add clickable button */}
      </section>
</div>

  )}

export default Home; 
      


 main
