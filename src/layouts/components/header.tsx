import React, {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Stack} from "@mui/system";

const LayoutHeader: FC = () => {
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
                    <Link
                        style={{
                            display: "flex",
                            paddingTop: 12,
                            alignItems: "center"
                        }}
                        href="/">
                        <Image
                            style={{height: "40px", width: "auto"}}
                            width={147}
                            height={117}
                            src="/logo-light.png"
                            alt="Newmira Digital"/>
                    </Link>

                    <Stack
                        sx={{
                            alignItems: "center"
                        }}
                        spacing={3}
                        direction="row">
                        <Stack
                            spacing={1}
                            direction="row">
                            <Button
                                variant="outlined"
                                size="large"
                                color="primary">
                                +1 253 533 2244
                            </Button>

                        </Stack>
                        <Button
                            disableElevation
                            variant="contained"
                            size="large"
                            color="primary">
                            Conversation Now
                        </Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default LayoutHeader;