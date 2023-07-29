import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { getItemCount } from '../src/utils';

export default function Header() {
    const cartItems = useSelector(state => state.cart?.value);
    const count = getItemCount(cartItems);
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
                        <Badge badgeContent={count} color='error'>
                            <ShoppingCartIcon color='inherit'></ShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </Box>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}
