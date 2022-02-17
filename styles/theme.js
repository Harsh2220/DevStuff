// import { extendTheme } from '@chakra-ui/react'

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }

// const theme = extendTheme({ config })

// export default theme

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        scrollPadding: "3.9rem",
      },
      "&::-webkit-scrollbar": {
        width: "1",
        borderRadius: "8px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "5",
        backgroundColor: "white",
      },
    },
  },
});

export default theme;