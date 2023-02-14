import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import useOrganisationsQuery from '../data/organisation'
import ListItemIcon from '@mui/material/ListItemIcon';

export default function OrganisationList() {
    const { data, error,isLoading } = useOrganisationsQuery('http://157.90.118.186/hr-management-service/queries/organisations')

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)
    return (
        <List sx={{ width: '100%',margin:'0 auto', maxWidth: 360, bgcolor: 'text.secondary' }}>
            {(data)?data.map((item,i)=>(
            <>
                <ListItem key={i}>
                    <ListItemButton>
                        <ListItemAvatar>
                        <Avatar>
                            <ListItemIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant='h6' color='#fff'>{item.name}</Typography>} secondary={item.parentName} />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </>)):null}
        </List>
    )
}
