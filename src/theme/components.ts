export const components = {
  MuiAvatar: {
    styleOverrides: {
      fallback: {
        height: "75%",
        width: "75%",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "4px",
        boxShadow: "none",
        fontWeight: 500,
        padding: "0.3rem 1rem",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
        // "&::-webkit-scrollbar": {
        //    width: 11,
        // },
        // "&::-webkit-scrollbar-track": {
        //    boxShadow: "inset 0 0 5px #e0e0e0",
        //    borderRadius: 10,
        // },
        // "&::-webkit-scrollbar-thumb": {
        //    background: "#e0e0e0",
        //    borderRadius: 10,
        //    "&:hover": {
        //       background: "#bdbdbd ",
        //    },
        // },
      },
      html: {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      "#root": {
        height: "100%",
      },
      "#nprogress .bar": {
        zIndex: "2000 !important",
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: "h6",
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: "auto",
        marginRight: "16px",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "0px",
        backgroundImage: "none",
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: "#8b5cf6",
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 0,
        ".MuiAccordionSummary-content": { margin: 0 },
        ".MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        border: "1px solid #E5EAF2",
        borderRadius: 8,
      },
    },
  },
  MuiRating: {
    styleOverrides: {
      root: {
        color: "#FFD600",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: "#94A4C4",
        textTransform: "none",
        fontSize: 12,
        fontWeight: 600,
        padding: 0,
        minWidth: "auto",
        marginLeft: "1rem",
        marginRight: "1rem",
      },
    },
  },
};
