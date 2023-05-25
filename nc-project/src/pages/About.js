import React, { useState} from "react";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../Fonts.css";

function About() {
    
    const [isTwitterHovered, setIsTwitterHovered] = useState(false);
    const [isInstagramHovered, setIsInstagramHovered] = useState(false);
    const [isEnvelopeHovered, setIsEnvelopeHovered] = useState(false);
  
  return (
    <Box
      border="2px solid black"
      padding="10px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      backgroundColor="blue"
    >
      <Grid templateColumns="50% 50%" gap={4} p="10" paddingTop={0}>
        <GridItem colSpan={1} paddingTop={2}>
          <div style={{ textAlign: "left", lineHeight: "4" }}>
            <h1
              style={{
                fontWeight: "bold",
                color: "red",
                textAlign: "center",
                fontSize: "4em",
                fontFamily: "'Satisfy', cursive",
                textShadow: "3px 5px 4px black",
              }}
            >
              Our Commitment To You!
            </h1>
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1em",
                textShadow: "2px 2px 2px black",
                
              }}
            >
              Whether you are looking to maintain, repair, or replace your
              heating and/or air conditioning system, you can rely on Northern
              Comfort. Through our highly trained expert technicians, office
              personnel, and exceptional values, Northern Comfort is committed
              to bringing you the best!
            </p>
            <p
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "1.1em",
                textShadow: "2px 2px 2px black",
              }}
            >
              Our team of certified technicians, experienced office staff, and
              fully trained and qualified installers are ready to provide you
              with the information, choices, and skills you need to make your
              home as comfortable, efficient, safe, and healthy as possible.
            </p>
          </div>
        </GridItem>
        <GridItem colSpan={1} mt={20}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="mascot.png"
              alt="Overlay-bg"
              style={{
                width: "27vw",
                position: "absolute",
                top: "14vw",
                right: "13vw",
                height: "35vw",
                // opacity: 0.8,
                filter: "drop-shadow(3px 10px 16px rgba(255, 255, 255, 0))",
                marginTop: "60px",
                zIndex:"1"
              }}
            />

            <img
              src="HVAc.jpg"
              alt="bgTexture"
              style={{
                width: "80%",
                height: "50vw",
                boxShadow: "0 1px 20px black",
                borderRadius: "90px",
                filter: "grayscale(100%)",
              }}
            />
            <Flex 
              justifyContent="center"
              marginTop="4"
              gap={16}
              position="absolute"
              bottom="60"
              fontSize="3vw"
              filter= "drop-shadow( 5px 4px 1px #fff)"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="Icons"
                  style={{
                    color: isTwitterHovered ? "blue" : "red",
                    marginRight: "10px",
                    filter: "drop-shadow(0 0 8px white)",
                  }}
                  onMouseEnter={() => setIsTwitterHovered(true)}
                  onMouseLeave={() => setIsTwitterHovered(false)}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="Icons"
                  style={{
                    color: isInstagramHovered ? "blue" : "red",
                    marginRight: "10px",
                    filter: "drop-shadow(0 0 8px #ffff",
                  }}
                  onMouseEnter={() => setIsInstagramHovered(true)}
                  onMouseLeave={() => setIsInstagramHovered(false)}
                />
              </a>
              <a
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="Icons"
                  style={{
                    color: isEnvelopeHovered ? "blue" : "red",
                    marginRight: "10px",
                    filter: "drop-shadow(0 0 8px #fff)",
                  }}
                    onMouseEnter={() => setIsEnvelopeHovered(true)}
                    onMouseLeave={() => setIsEnvelopeHovered(false)}
                />
              </a>
            </Flex>
          </div>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default About;
