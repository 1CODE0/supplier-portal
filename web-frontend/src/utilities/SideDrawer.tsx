"use client";
import React from "react";

import type { DrawerProps, SxProps, Theme } from "@mui/material";
import { Drawer, Box, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useDrawer } from "../hooks/useDrawer";

interface SideDrawerProps {
  children: React.ReactNode;
  title: string;
  width?: number;
  height?: number;
  anchor?: DrawerProps["anchor"];
  disableOutsideClick?: boolean;
  paperSx?: SxProps<Theme>;
}

// const DEFAULT_WIDTH = 250;

const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  title,
  anchor = "right",
  disableOutsideClick = false,
}) => {
  const { open, closeDrawer } = useDrawer();

  const handleClose: DrawerProps["onClose"] = (event, reason) => {
    if (disableOutsideClick && reason === "backdropClick") return;
    closeDrawer();
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={handleClose}
      hideBackdrop
      sx={{ pointerEvents: "none" }}
      ModalProps={{
        keepMounted: true,
        disableEnforceFocus: true,
        disableAutoFocus: true,
        disableEscapeKeyDown: false,
      }}

      // PaperProps={{
      //     sx: {
      //         pointerEvents: 'auto',
      //         width: anchor === 'left' || anchor === 'right' ? width : 'auto',
      //         height: anchor === 'top' || anchor === 'bottom' ? width : 'auto',
      //         zIndex: (theme) => theme.zIndex.tooltip + 1,
      //         ...((paperSx as object) || {}),
      //     },
      // }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box component="span" sx={{ fontWeight: "bold", pl: 3 }}>
          {title}
        </Box>
        <IconButton onClick={closeDrawer} sx={{ pointerEvents: "auto" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ p: 2, pointerEvents: "auto" }}>{children}</Box>
    </Drawer>
  );
};

export default SideDrawer;
