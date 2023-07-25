import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState(false);
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#1A9EAD' }} position="sticky">
                <Toolbar>
                    <NavLink to="/" style={{ color: "white" }}>
                        <Typography>
                            <LibraryBooksOutlinedIcon />
                        </Typography>
                    </NavLink>
                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="inherit" indicatorColor="primary" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Books" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header