import { ShoppingCartSharp } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart-slice';


export default function Home() {

    const [products, setProducts] = useState([]);
    const theme = useTheme();
    const dispatch = useDispatch();
    async function fetchAllProducts() {
        const response = await fetch('https://fakestoreapi.com/products')
        const res = await response.json();
        setProducts(res);
    }
    useEffect(() => {
        fetchAllProducts();
    }, []);

    function addProductToCart(product) {
        dispatch(addToCart({ product, quantity: 1 }));
    }
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                {products.map(({ id, title, price, description, category, image, rating }) => {
                    return (<Grid item key={id} xs={12} sm={6} md={3}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardMedia component='img' sx={{ height: theme.spacing(30), width: '100%', objectFit: 'contain', alignSelf: 'center', pt: theme.spacing(), py: theme.spacing() }} image={image} alt={title} />
                            <CardContent>
                                <Typography variant='h6' component='h2' gutterBottom sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: "-webkit-box", "WebkitLineClamp": "1", "WebkitBoxOrient": "vertical" }}>{title}</Typography>
                                <Typography fontSize='smaller' color="text.secondary" paragraph sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: "-webkit-box", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical" }}>{description}</Typography>
                                <Typography paragraph fontSize='large'>{price}$</Typography>
                                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
                            </CardContent>
                            <CardActions sx={{ alignSelf: 'center' }}>
                                <Button variant='contained' onClick={() => addProductToCart({ id, title, price, description, category, image, rating })}><ShoppingCartSharp></ShoppingCartSharp>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>)
                })}
            </Grid>
        </Container>
    )
}
