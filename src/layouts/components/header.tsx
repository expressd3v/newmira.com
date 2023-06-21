import React, {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {Stack} from "@mui/system";

const LayoutHeader: FC = () => {
    return (
        <AppBar
            sx={{height: 56}}
            elevation={0}
            position="fixed"
            color="transparent">
            <Toolbar
                style={{minHeight: "56px"}}>
                <Container maxWidth="xl">
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
                                paddingTop: 8,
                                alignItems: "center"
                            }}
                            href="/">
                            <Image
                                style={{height: 48, width: "auto"}}
                                width={147}
                                height={117}
                                src="/newmira.png"
                                alt="Newmira Digital"/>
                        </Link>

                        <Stack
                            sx={{
                                alignItems: "center"
                            }}
                            spacing={1}
                            direction="row">
                            <Button>
                                Home
                            </Button>
                            <Button>
                                Services
                            </Button>
                            <Button>
                                Expertise
                            </Button>
                            <Button>
                                Contact
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default LayoutHeader;