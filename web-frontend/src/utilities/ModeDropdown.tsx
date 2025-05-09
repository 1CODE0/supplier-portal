"use client";

// React Imports
import { useRef, useState } from "react";

// MUI Imports
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useSettings } from "../hooks/useSettings";
import { Mode } from "../contexts/types";
import { ComputerOutlined } from "@mui/icons-material";
import MoonClearLineIcon from "remixicon-react/MoonClearLineIcon";
import SunLineIcon from "remixicon-react/SunLineIcon";

import style from "./mode-dropdown.module.css";

const ModeDropdown = () => {
  // States
  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null);

  // Hooks
  const { settings, updateSettings } = useSettings();

  const handleClose = () => {
    setOpen(false);
    setTooltipOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleModeSwitch = (mode: Mode) => {
    handleClose();

    if (settings.mode !== mode) {
      updateSettings({ mode: mode });
    }
  };

  const getModeIcon = () => {
    if (settings.mode === "system") {
      return <ComputerOutlined />;
    } else if (settings.mode === "dark") {
      return <MoonClearLineIcon />;
    } else {
      return <SunLineIcon />;
    }
  };

  return (
    <>
      <Tooltip
        title={settings.mode + " Mode"}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={open ? false : tooltipOpen ? true : false}
        PopperProps={{ className: "capitalize" }}
      >
        <IconButton
          ref={anchorRef}
          size={"large"}
          onClick={handleToggle}
          className="!text-textPrimary"
        >
          {getModeIcon()}
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-start"
        anchorEl={anchorRef.current}
        className="min-is-[160px] !mbs-4"
        style={{ zIndex: 1 }}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "right top",
            }}
          >
            <Paper
              className={
                settings.skin === "bordered"
                  ? "border shadow-none"
                  : "shadow-lg"
              }
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch("light")}
                    selected={settings.mode === "light"}
                  >
                    <SunLineIcon />
                    Light
                  </MenuItem>
                  <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch("dark")}
                    selected={settings.mode === "dark"}
                  >
                    <MoonClearLineIcon />
                    Dark
                  </MenuItem>
                  <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch("system")}
                    selected={settings.mode === "system"}
                  >
                    <ComputerOutlined />
                    System
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ModeDropdown;
