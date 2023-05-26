import React from "react";
import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header-container" height={{ base: "300px", md: "400px" }}>
      <Box  height="9vw" bgColor="lightbluewhite">
        <Box height="100%">
          <img 
          // id="headerlogo" 
          src="nclogo1.jpg" 
          alt=""
          style={{
            height: "9vw",
            objectFit: "contain",
            position:"absolute",
            marginTop: "10px"
          }}
          />
        </Box>
        {/* <h2
          className="headtitle"
          style={{
            fontWeight: "bold",
            color: "#F2AF29",
            textAlign: "center",
            fontSize: "3em",
            fontFamily: "'Satisfy', cursive",
            textShadow: "1px 1px 2px black",
            marginRight:"60vw",
            transform: "rotate(-10deg)",
            zIndex: 100, 
            textDecoration:"underline",
          }}
        >
          Your Comfort Matters To Us!!{" "}
        </h2> */}
      </Box>
    </Box>
  );
}

export default Header;
