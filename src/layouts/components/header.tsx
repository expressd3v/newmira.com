import React, {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Stack} from "@mui/system";
import {useRouter} from "next/router";

const LayoutHeader: FC = () => {
    const router: any = useRouter();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
    const isHome = router.asPath ==="/"

    return (
        <AppBar
            sx={{height: {lg: 80, xs: 60}}}
            elevation={0}
            position="absolute"
            color="transparent">
            <Toolbar
                sx={{minHeight: {lg: "80px", xs: "60px"}}}>
                <Stack
                    sx={{
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                    spacing={2}
                    direction="row">
                    <div/>

                    <Stack
                        sx={{
                            alignItems: "center"
                        }}
                        spacing={{lg:3, xs: 2}}
                        direction="row">
                        <Stack
                            spacing={.5}
                            direction="row">
                            <Button
                                size={isMobile? "small" : "medium"}
                                href="tel:+1 (415) 766-7183"
                                sx={{borderRadius: 50}}
                                variant="outlined"
                                color={(isMobile && isHome) ? "secondary" : "info"}>
                                (415) 766-7183
                            </Button>
                        </Stack>
                        <Button
                            onClick={()=>{router.push("/contact")}}
                            disableElevation
                            variant="contained"
                            sx={{borderRadius: 50}}
                            size={isMobile? "small" : "medium"}
                            color={(isMobile && isHome)? "secondary": "primary"}>
                            Contact Us
                        </Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default LayoutHeader;