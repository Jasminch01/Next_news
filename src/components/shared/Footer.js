"use client";

import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const routes = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "About",
    path: "/About",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <Box className="py-10 bg-black px-2">
      <Container>
        <Box sx={{ "& svg": { color: "white" } }} className="text-center">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <XIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {routes.map((route) => (
            <Link key={route} href={route.path}>
              <Button className="text-white">{route.route}</Button>
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="gray" textAlign="center">
          @2023 The Dragon News. Design by JasminCH.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
