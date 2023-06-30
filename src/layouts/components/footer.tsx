import React, {FC} from 'react';
import {Button, Container, IconButton, Stack, Typography} from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";
import Grid from "@mui/system/Unstable_Grid";
import {Facebook, LinkedIn, Twitter} from "@mui/icons-material";
import {useRouter} from "next/router";

const LayoutFooter: FC = () => {
    const router: any = useRouter();


    return (
        <FooterWrap>
            <Container maxWidth="xl">
                <Typography
                    textAlign="center"
                    mb={3}
                    variant="h2">
                    <Image
                        style={{
                            maxWidth: "100%",
                            width: 250,
                            height: "auto"
                        }}
                        width={600}
                        height={146}
                        src="/logo.png"
                        alt="logo"/>
                </Typography>
                <Grid
                    spacing={5}
                    justifyContent="center"
                    container>
                    <Grid xs={6}>
                        <Typography
                            lineHeight={1.8}
                            textAlign="center">
                            Newmira Digital is a leading software development company based in California, specializing
                            in delivering innovative solutions to drive digital transformation for businesses.
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Stack
                            sx={{width: "!00%"}}
                            spacing={6}
                            justifyContent="center"
                            direction="row">
                            <Button
                                onClick={()=>{router.push("/")}}
                                color="info">
                                Home
                            </Button>

                            <Button
                                onClick={()=>{router.push("/about")}}
                                color="info">
                                About Us
                            </Button>

                            <Button
                                onClick={()=>{router.push("/contact")}}
                                color="info">
                                Contact Us
                            </Button>

                            <Button
                                onClick={()=>{router.push("/services")}}
                                color="info">
                                Our Services
                            </Button>

                            <Button
                                onClick={()=>{router.push("/faq")}}
                                color="info">
                                Faq
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid xs={12}>
                        <Stack
                            sx={{width: "!00%"}}
                            spacing={6}
                            justifyContent="center"
                            direction="row">
                            <IconButton
                                target="_blank"
                                href="https://twitter.com/newmiradigital"
                            >
                                <Facebook/>
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href="https://twitter.com/newmiradigital"
                            >
                                <LinkedIn/>
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href="https://twitter.com/newmiradigital"
                            >
                                <Twitter/>
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid xs={12}>
                        <Typography
                            fontSize={12}
                            fontWeight={700}
                            color="#8f8f8f"
                            textAlign="center">
                            Copyright © {new Date().getFullYear()}. Newmira Digital, LLC.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterWrap>
    );
};


const FooterWrap = styled.footer`
  padding: 80px 0 20px;
  background: #0A0F14;
`


export default LayoutFooter;