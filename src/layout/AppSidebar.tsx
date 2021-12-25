import React, { FC } from "react";
import { Box, Card, Drawer } from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { sidebarCompactWidth, sidebarFullWidth } from "../utils/constants";
import useAppContext from "../hooks/useAppContent";

const openedMixin = (theme: Theme): CSSObject => ({
  width: sidebarFullWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `${sidebarCompactWidth}px !important`,
});

interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
}
const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme, open }) => ({
  width: open ? sidebarFullWidth : sidebarCompactWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    zIndex: theme.zIndex.appBar + 200,
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    zIndex: theme.zIndex.appBar + 200,
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  expandHandler: () => void;
}
const AppSidebar: FC<Props> = ({ expandHandler }) => {
  const { expandNav } = useAppContext();

  return (
    <StyledDrawer variant="permanent" open={expandNav}>
      <Box>
        <h1 onClick={expandHandler}>Sidebar</h1>
      </Box>
    </StyledDrawer>
  );
};

export default AppSidebar;
