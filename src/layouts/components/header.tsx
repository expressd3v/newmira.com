import React, {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Stack} from "@mui/system";
import {useRouter} from "next/router";

const LayoutHeader: FC = () => {
    const router: any = useRouter();

    return (
        <AppBar
            sx={{height: 80}}
            elevation={0}
            position="absolute"
            color="transparent">
            <Toolbar
                style={{minHeight: "80px"}}>
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
                        spacing={3}
                        direction="row">
                        <Stack
                            spacing={.5}
                            direction="row">
                            <Button
                                href="tel:+1 253 533 2244"
                                variant="outlined"
                                color="info">
                                +1 253 533 2244
                            </Button>
                        </Stack>
                        <Button
                            onClick={()=>{router.push("/contact")}}
                            disableElevation
                            variant="contained"
                            color="primary">
                            Contact Us
                        </Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default LayoutHeader;