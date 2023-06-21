import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export default function App({Component, pageProps}: AppProps) {
    const theme = createTheme({
        palette: {
            primary: {
                light: "#1f1f1f",
                main: "#1f1f1f",
                dark: "#1f1f1f",
                contrastText: "#ffffff"
            },
            secondary: {
                light: "#f6e009",
                main: "#f6e009",
                dark: "#f6e009",
                contrastText: "#1f1f1f"
            }
        },
        typography: {
            fontFamily: "'Roboto Mono', monospace"
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
