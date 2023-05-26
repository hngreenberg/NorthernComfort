import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Box, Grid, GridItem, Text, Image, UnorderedList, ListItem   } from "@chakra-ui/react";
import bgImage from "../images/couple-sitting.jpg";
import couple2 from "../images/couple-hot2.jpg";
import summer from "../images/summer.jpg";
import "../Fonts.css";

function Home() {
  return (
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
          bgImage={`url(${summer})`}
          bgSize="cover"
          bgPosition="center"
        >

        </GridItem>

        <GridItem
          colSpan={2}
          bg="papayawhip"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Box>
            <center>
              <Text textAlign="center" style={{
                fontSize:"2vw",
                marginTop:"40px",
                fontFamily:"jost",
              }}>
                A Company You Can Trust
              </Text>
            </center>
            <UnorderedList listStyleType="disc" style={{
              fontSize:"15px",
              marginLeft:"13vw",
              marginTop:"10px"
            }}>
                  <ListItem>Family owened and operated</ListItem>
                  <ListItem>Friendly and personable</ListItem>
                  <ListItem>Trustworthy and honest</ListItem>
                  <ListItem>Highly experienced</ListItem>
                  <ListItem>Proudly veteran-owned</ListItem>
              </UnorderedList>
              <Text style={{
                textAlign:"center",
                marginTop:"10px",
                fontFamily:"jost",
                fontSize:"1em"
              }}>
                You can count on us for all your heating and cooling services.
              </Text>
          </Box>
        </GridItem>

        {/* --- bottom grid --*/}
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
                <Text style={{
                  textDecoration:"underline",
                  marginLeft:"21vw",
                  marginTop:"3px",
                }}>
                  <Link to="/contact">
                  <Text><strong>Schedule Today</strong></Text>
                  </Link>
                </Text>
              </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
