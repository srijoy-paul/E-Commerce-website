import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h6' color="inherit" sx={{
                    flexGrow: 1,
                }}>Cartify</Typography>
                <Box sx={{
                    display: { md: "flex" }
                }}>
                    <IconButton size='large' aria-label='show'>
                        <Badge badgeContent={2} color='error'>
                            <ShoppingCartIcon color='inherit'></ShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </Box>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}
