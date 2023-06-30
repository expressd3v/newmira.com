import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import "@/utils/style/global.css"


export default function App({Component, pageProps}: AppProps) {
    const theme = createTheme({
        palette: {
            primary: {
                light: "#f6e009",
                main: "#f6e009",
                dark: "#f6e009",
                contrastText: "#0B0F15"
            },
            secondary: {
                light: "#0B0F15",
                main: "#0B0F15",
                dark: "#0B0F15",
                contrastText: "#f6e009"
            },
            info: {
                light: "#ffffff",
                main: "#ffffff",
                dark: "#ffffff",
                contrastText: "#000000"
            },
            mode: "dark",
            background: {
                default: "#0B0F15",
                paper: "#1B2837"
            }
        },
        typography: {
            fontFamily: "'Roboto Mono', monospace"
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    sizeLarge: {
                        borderRadius: 500
                    },
                    sizeMedium: {
                        borderRadius: 500
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
