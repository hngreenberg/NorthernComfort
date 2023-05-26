import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import bgImage from "../images/couple-sitting.jpg";
import couple2 from "../images/couple-hot2.jpg";
import "../Fonts.css";

function Home() {
  return (
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
    <>
      <Box
        style={{
          position: "absolute",
          zIndex: "1",
          marginLeft: "10px",
          display: "flex",
          alignItems: "center",
          marginTop: "-25px",
        }}
      >
        <PhoneIcon />
        <Text style={{ marginLeft: "5px", fontSize: "13px" }}>
          (415)5800-001 | Call Today for <strong>FREE</strong> Estimate
        </Text>
      </Box>
      <Box
        style={{
          position: "absolute",
          MarginBottom: "60vw",
        }}
      >
        <h2
          className="headtitle"
          style={{
            fontWeight: "bold",
            color: "tomato",
            textAlign: "center",
            fontSize: "3em",
            fontFamily: "'Satisfy', cursive",
            textShadow: "1px 1px 2px black",
            marginRight: "60vw",
            transform: "rotate(-12deg)",
            zIndex: 100,
            textDecoration: "underline",
          }}
        >
          Your Comfort Matters To Us!!{" "}
        </h2>
      </Box>
      <Grid
        h="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          className="aside-img"
          rowSpan={2}
          colSpan={1}
          bgImage={`url(${bgImage})`}
          bgSize="cover"
          bgPosition="center"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: "translateY(-10px)" }}
        />

        <GridItem
          colSpan={2}
          bg="papayawhip"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "translateX(-10px)" }}
        />

        <GridItem
          colSpan={2}
          bg="papayawhip"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "translateY(-10px)" }}
        />

        <GridItem
          colSpan={4}
          bg="tomato"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Box
            style={{
              marginLeft: "50vw",
            }}
          >
              <Image src={couple2} alt="couple" height="20.9vw" width="33vw"/>
              
          </Box>
          <Box style={{
                position:"absolute",
              }}>
                <Text style={{
                  display:"absolute",
                  fontFamily:"jost",
                  fontSize:"2.5vw",
                  marginTop:"-20vw",
                  marginLeft:"13vw"
              }}>
                  Stay Cool This Summer!
                </Text>
                <Text style={{
                  display:"flex",
                  textAlign:"center",
                  maxWidth:"50%",
                  marginLeft:"5vw",
                }}>
                  As the temperature rises, beat the heat with a reliable and efficient air conditioning system. Don't let the sweltering summer catch you off guard!
                  Call our HVAC experts today to ensure your AC is in top shape and ready to keep you cool all summer long. Our skilled technicians will provide professional maintenance and repairs to keep your system running strong, delivering refreshing cool air when you need it the most.
                  Don't wait until it's too late! Give us a call now and schedule your AC service. Stay comfortable, stay cool, and enjoy the summer without breaking a sweat!
                </Text>
                <Text>
                <Link to="/contact">
        <Text>Go to Contact Page</Text>
      </Link>
                </Text>
              </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
