import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import ModeDropdown from "./ModeDropdown";
import useThemePalette from "../hooks/useThemePalette";
import { NavItem, menuItems } from "../config/SupplierConfig";

const useNavItems = (): NavItem[] => useMemo(() => menuItems, []);

const NavBar: React.FC = () => {
  const { custom, primary } = useThemePalette();
  const navItems = useNavItems();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        style={{ background: primary.main }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", px: 0 }}
          >
            <Typography variant="h6" noWrap>
              Smart Supplier Portal
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navItems.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <Button
                    key={path}
                    component={NavLink}
                    to={path}
                    disableRipple
                    sx={{
                      color: custom.colorText,
                      fontWeight: isActive ? "bold" : "normal",
                      position: "relative",
                      textTransform: "none",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: isActive ? "100%" : 0,
                        height: "2px",
                        bgcolor: custom.colorText,
                        transition: "width 0.3s ease-in-out",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
              <ModeDropdown />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* offset to push content below fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default NavBar;
