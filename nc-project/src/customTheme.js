import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
        backgroundColor: "red",
        color: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        _hover: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
  colors: {
    red: "red",
    white: "white",
    blue: "blue",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
});

export default customTheme;
