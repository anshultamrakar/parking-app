import React from 'react'
import { AppBar,Toolbar, Typography   } from "@material-ui/core";

const Header  = () => {
  return (
    <header>
    <AppBar position="static">
    <Toolbar variant="dense">
        <Typography variant="h6" color="inherit"> Car Parking System</Typography>
    </Toolbar>
    </AppBar>
    </header>
  )
}

export default Header