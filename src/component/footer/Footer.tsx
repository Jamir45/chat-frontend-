import Link from "next/link";
import React, { FC } from "react";
import { Box, Container, Grid, styled } from "@mui/material";

// styled component
const StyledLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  cursor: "pointer",
  borderRadius: 4,

  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer: FC = () => {
  return (
    <footer>
      <h1>It will be our footer</h1>
    </footer>
  );
};

const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];

const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];

// const iconList = [
//   { icon: Facebook, url: "https://www.facebook.com/UILibOfficial" },
//   { icon: Twitter, url: "https://twitter.com/uilibofficial" },
//   {
//     icon: Youtube,
//     url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
//   },
//   { icon: Google, url: "/" },
//   { icon: Instagram, url: "https://www.instagram.com/uilibofficial/" },
// ];

export default Footer;
