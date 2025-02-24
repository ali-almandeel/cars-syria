import { createTheme } from "@mui/material";
import {
  Fonts,
  ThemeStyleRadius,
  textLight,
} from "../../shared/constants/AppEnum";

const cardRadius = ThemeStyleRadius.STANDARD;

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    success: {
      main: "#11C15B",
      light: "#D9F5E5",
    },
    warning: {
      main: "#FF5252",
      light: "#FF   ECDC",
    },
    text: textLight,
    grey: {
      50: "#fafafa",
      100: "#F5F6FA",
      200: "#edf2f7",
      300: "#E0E0E0",
      400: "#c5c6cb",
      500: "#A8A8A8",
      600: "#666666",
      700: "#4a5568",
      800: "#201e21",
      900: "#1a202c",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
  typography: {
    fontFamily: ["Cairo", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius,
          boxShadow: "0px 10px 10px 4px rgba(0, 0, 0, 0.04)",
          "& .MuiCardContent-root:last-of-type": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius / 2,
          // boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.04)',
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius / 2,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius / 2,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 9,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: Fonts.REGULAR,
        },
      },
    },
  },
});
