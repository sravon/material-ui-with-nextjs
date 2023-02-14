import OrganisationList from '@/components/organisation/organisation-list'
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react'
import { StyledButton } from '@/commons/button';

export default function Organisations() {
    return (
        <>
            <StyledButton variant="contained">Create Organisations</StyledButton>
            <OrganisationList/>
        </>
    )
}
