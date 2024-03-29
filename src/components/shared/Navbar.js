"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { IconButton, Stack } from "@mui/material";
import Link from "next/link";
import Header from "./Header";

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

const Navbar = () => {
  return (
    <>
    <Header/>
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />
          <Box className="w-full text-center">
            {routes.map((route) => (
              <Link key={route} href={route.path}>
                <Button className="text-white">{route.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{ "& svg": { color: "white" } }}>
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default Navbar;
