import React from 'react';
import Header from './Header';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
const theme = createTheme({
    palette: {
        mode: "light",
    }
});
export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header></Header>
            <main>
                <Outlet></Outlet>
                {/* <div>Layout</div> */}
            </main>
            <footer></footer>
        </ThemeProvider>
    )
}