import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#D3D3D3",
      // ...
      200: "E3DFFD",
      300: "#DAF5FF",
    },
  },
});

export default theme;
