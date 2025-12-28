"use client";

import * as React from "react";

import RouterLink from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { ImageWrapper } from "@/components/ImageWrapper";

import { colorSchemes } from "@/theme/MuiConfigs/color-schemes";

import images from "@/assets/images";

import { routes } from "@/router/routes";

import { usePermissionNavItems } from "../config";
import { NavList } from "../NavItems";

import { SideNav, SideNavContainer } from "./Styled";

export function SideNavBar(): React.JSX.Element {
  const pathname = usePathname();
  const {
    light: { palette },
  } = colorSchemes;
  const navItems = usePermissionNavItems();

  return (
    <SideNavContainer>
      <SideNav>
        <Box
          component={RouterLink}
          href={routes.dashboard}
          sx={{ display: "flex", justifyContent: "center", p: "24px" }}
        >
          <ImageWrapper
            src={images.Logo}
            alt="logo"
            width="100%"
            objectFit="contain"
          />
        </Box>
        <Divider sx={{ borderColor: palette.stroke }} />
        <NavList pathname={pathname} items={navItems} />
      </SideNav>
    </SideNavContainer>
  );
}
