import Head from "next/head";
import Box from "@mui/material/Box";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import React, { FC, Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useAppContext from "../hooks/useAppContent";
import SimpleBar from "simplebar-react";

type AppLayoutProps = {
  title?: string;
  children: React.ReactChild;
};
const AppLayout: FC<AppLayoutProps> = ({ children, title }) => {
  const { expandNav, setExpandNav } = useAppContext();
  const expandHandler = () => {
    expandNav ? setExpandNav(false) : setExpandNav(true);
  };

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <Box display="flex">
          <CssBaseline />
          <AppSidebar expandHandler={expandHandler} />
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <AppHeader expandHandler={expandHandler} />
            {children}
          </Box>
        </Box>
      </SimpleBar>
    </Fragment>
  );
};

export default AppLayout;
