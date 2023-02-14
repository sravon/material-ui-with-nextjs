import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                <AppleIcon/>
                <Typography variant='h6'>
                    photo Album
                </Typography>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
        </>
    )
}