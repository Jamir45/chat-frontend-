import React, { FC, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { headerHeight } from "../../utils/constants";
import { Box, Container, styled, useMediaQuery } from "@mui/material";

// component props interface
interface HeaderProps {
  className?: string;
  isFixed?: boolean;
}

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  height: headerHeight,
  background: theme.palette.background.paper,
  transition: "height 250ms ease-in-out",
}));

const Header: FC<HeaderProps> = ({ isFixed, className }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
  const toggleDialog = () => setDialogOpen(!dialogOpen);

  return (
    <HeaderWrapper className={className}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <h1>Is will be our header</h1>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
