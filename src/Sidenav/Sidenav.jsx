import React, { Fragment } from "react";
// import Scrollbar from 'react-perfect-scrollbar'
import Scrollbar from "simplebar-react";
import { styled } from "@mui/system";

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
}));

const SideNavMobile = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100vw",
  background: "rgba(0, 0, 0, 0.54)",
  zIndex: -1,
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

const Sidenav = () => {
  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {/* {children}
        <MatxVerticalNav items={navigations} /> */}
        <h1>Hello, this is sidebar</h1>
      </StyledScrollBar>

      {/* <SideNavMobile onClick={() => updateSidebarMode({ mode: "close" })} /> */}
    </Fragment>
  );
};

export default Sidenav;
