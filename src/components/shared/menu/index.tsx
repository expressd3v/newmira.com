import React, {FC, Fragment, useState} from 'react';
import {CloseOutlined, Facebook, LinkedIn, MenuOutlined, Twitter} from "@mui/icons-material";
import styled from "@emotion/styled";
import {Button, Fade, Box, Modal, Container, Typography, Stack, IconButton} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/system/Unstable_Grid";

const GlobalMenu: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <GlobalMenuIcon
                onClick={()=>{setOpen(true)}}
                variant="contained">
                <MenuOutlined/>
            </GlobalMenuIcon>
            <Modal
                BackdropProps={{
                    sx: {
                        background: "#0B0F15"
                    }
                }}
                open={open}>
                <Fade in={open}>
                    <MenuWrap>
                        <Container
                            sx={{position: "relative"}}
                            maxWidth="lg">
                            <Grid
                                spacing={3}
                                container>
                                <Grid xs={12}>
                                    <div className="menu-title">
                                        <Typography
                                            textTransform="uppercase"
                                            fontSize={32}
                                            fontWeight={600}
                                            letterSpacing={5}
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                position: "relative",
                                                gap: 2
                                            }}
                                            color="#f6e009">
                                            <Image
                                                style={{
                                                    // position: "absolute",
                                                    // left: "-90px",
                                                    // top: 0,
                                                    width: 60,
                                                    height: "auto"}}
                                                src="/icon.png"
                                                alt="Logo"
                                                width={141}
                                                height={141}/>
                                            Menu
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid md={8} xs={12}>
                                    <div className="main-menu">
                                        <Link className="menu-item" href="/">Home</Link>
                                        <Link className="menu-item" href="/services">Services</Link>
                                        <Link className="menu-item" href="/faq">FAQ</Link>
                                        <Link className="menu-item" href="/about">About</Link>
                                        <Link className="menu-item" href="/contact">Contact us</Link>
                                    </div>
                                </Grid>
                                <Grid sx={{display: {md: "block", xs: "none"}}} md={4} xs={12}>
                                    <Stack
                                        alignItems="flex-end"
                                        className="contact-menu-wrap">
                                        <Link className="contact-menu" href="mailto:info@newmira.com">info@newmira.com</Link>
                                        <Link className="contact-menu" href="tel:+1 (415) 766-7183">(415) 766-7183</Link>
                                        <p className="contact-menu">
                                            1600 Shatuck Ave., Suite 216<br/>
                                            Berkeley, California USA 94709
                                        </p>
                                       {/* <Stack
                                            sx={{width: "!100%", mb: 4}}
                                            spacing={2}
                                            justifyContent="flex-end"
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
                                        </Stack>*/}
                                        <Button
                                            style={{marginTop: 32}}
                                            target="_blank"
                                            href="https://www.google.com/maps/place/1600+Shattuck+Ave.+%23216,+Berkeley,+CA+94709%E7%BE%8E%E5%9B%BD/@37.8781161,-122.2719711,17z/data=!3m1!4b1!4m5!3m4!1s0x80857ea10daae777:0xa3d3b85b8e7b1cd8!8m2!3d37.8781161!4d-122.2693962?entry=ttu"
                                            color="info"
                                            size="large"
                                            variant="contained">
                                            View Map
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <IconButton
                                color="primary"
                                onClick={()=>{setOpen(false)}}
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "auto",
                                    maxWidth: "auto",
                                    height: "auto"
                                }}>
                                <CloseOutlined sx={{width: 42, height: 42}}/>
                            </IconButton>
                        </Container>
                        <div className="copy-right">
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                                color="#8f8f8f"
                                textAlign="center">
                                Copyright © {new Date().getFullYear()}. Newmira Digital, LLC.
                            </Typography>
                        </div>
                    </MenuWrap>
                </Fade>
            </Modal>
        </Fragment>
    );
};


const MenuWrap = styled(Box)`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  padding: 120px 0;
  
  .copy-right {
    position: absolute;
    bottom: 24px;
    width: 100%;
    left: 0;
  }
  
  .main-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 42px;
  }
  
  .menu-item {
    font-family: "Roboto", sans-serif;
    display: inline-flex;
    font-size: 52px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-decoration: none;
    color: #f6e009;
    line-height: 1;
    width: auto;
    position: relative;
    margin-bottom: 52px;
    
    :after {
      content: "";
      position: absolute;
      display: block;
      width: 0;
      height: 6px;
      background: #f6e009e0;
      z-index: -1;
      top: calc(50% + 3px);
      left: -8px;
      transition: all .5s;
    }
    
    
    
    :hover {
      :after{
        transition: all .5s;
        width: calc(100% + 16px);
      }
    }
  }


  .contact-menu-wrap {
    margin-top: 102px;
  }
  
  .contact-menu {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
    line-height: 2.4;
    display: block;
    text-align: right;
  }
  
  
  @media(max-width: 1200px) {
    padding: 60px 20px;

    .main-menu {
      margin-top: 12px;
    }

    .menu-item {
      font-size: 42px;
      letter-spacing: 4px;
      margin-bottom: 32px;
    }


    .contact-menu-wrap {
      margin-top: 52px;
    }

    .contact-menu {
      line-height: 2.2;
    }
  }
  
  @media(max-width: 600px) {
    padding: 40px 20px;

    .main-menu {
      margin-top: 12px;
    }

    .menu-item {
      font-size: 32px;
      letter-spacing: 4px;
      margin-bottom: 32px;
    }


    .contact-menu-wrap {
      margin-top: 52px;
    }

    .contact-menu {
      line-height: 2.2;
    }
  }
`


const GlobalMenuIcon = styled(Button)`
  position: fixed;
  z-index: 1101;
  width: 80px;
  top: 46px;
  left: 0;
  padding: 0;
  height: 62px;
  border-radius: 0 42px 42px 0 ;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  
  @media(max-width: 600px) {
    top: 10px;
    width: 60px;
    height: 42px;
  }
  
  svg {
    width: 30px;
    height: 30px;
  }
`

export default GlobalMenu;