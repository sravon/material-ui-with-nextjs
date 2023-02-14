import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const StyledButton = styled(Button)(({theme})=>({
    fontSize: 26,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#0069d9',
    '&:hover': {
        backgroundColor: '#fff',
    },
    // backgroundColor:theme.status.danger
}))


