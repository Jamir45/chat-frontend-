import {
  headerHeight,
  sidebarFullWidth,
  sidebarCompactWidth,
} from "../utils/constants";
import React, { FC } from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useAppContext from "../hooks/useAppContent";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  sidebar?: string;
}
const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${open ? sidebarFullWidth : sidebarCompactWidth}px)`,
  height: headerHeight,
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    width: `calc(100% - ${sidebarCompactWidth}px)`,
  },
}));

interface Props {
  expandHandler: () => void;
}
const AppHeader: FC<Props> = ({ expandHandler }) => {
  const { expandNav } = useAppContext();

  return (
    <StyledAppBar position="fixed" open={expandNav}>
      <Toolbar sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={expandHandler}
          sx={{ marginRight: "36px" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppHeader;
