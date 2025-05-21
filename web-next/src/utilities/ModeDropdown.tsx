'use client'

// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import { Mode } from '../contexts/types'
// import { ComputerOutlined } from '@mui/icons-material'
import MoonClearLineIcon from 'remixicon-react/MoonClearLineIcon'
import SunLineIcon from 'remixicon-react/SunLineIcon'

import style from './mode-dropdown.module.css'
import { useSettings } from '@/hooks/useSettings'

const ModeDropdown = () => {
  const [open, setOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const { mode: settingsMode, toggleMode } = useSettings()

  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleClose = () => {
    setOpen(false)
    setTooltipOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleModeSwitch = (mode: Mode) => {
    handleClose()

    if (settingsMode !== mode) {
      toggleMode()
    }
  }

  const getModeIcon = () => {
    // if (settingsMode === "system") {
    //   return <ComputerOutlined />;
    if (settingsMode === 'dark') {
      return <MoonClearLineIcon />
    } else {
      return <SunLineIcon />
    }
  }

  return (
    <>
      <Tooltip
        title={settingsMode?.toLocaleUpperCase() + ' MODE'}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={open ? false : tooltipOpen ? true : false}
        PopperProps={{ className: 'capitalize' }}
      >
        <IconButton ref={anchorRef} size={'large'} onClick={handleToggle} className='!text-textPrimary'>
          {getModeIcon()}
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-start'
        anchorEl={anchorRef.current}
        className='min-is-[160px] !mbs-4'
        style={{ zIndex: 1 }}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'right top'
            }}
          >
            <Paper
            // className={
            //   settings.skin === "bordered"
            //     ? "border shadow-none"
            //     : "shadow-lg"
            // }
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch('light')}
                    selected={settingsMode === 'light'}
                  >
                    <SunLineIcon />
                    Light
                  </MenuItem>
                  <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch('dark')}
                    selected={settingsMode === 'dark'}
                  >
                    <MoonClearLineIcon />
                    Dark
                  </MenuItem>
                  {/* <MenuItem
                    className={style.menuItemModeDropDown}
                    onClick={() => handleModeSwitch("system")}
                    selected={settings.mode === "system"}
                  >
                    <ComputerOutlined />
                    System
                  </MenuItem> */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default ModeDropdown
