import { chatTheme } from "./index";
import React, { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

interface Props {
  children: ReactNode;
}
const ChatAppTheme: React.FC<Props> = ({ children }) => {
  const theme = chatTheme({
    theme: "LIGHT",
    direction: "ltr",
    roundedCorners: true,
    responsiveFontSizes: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ChatAppTheme;
