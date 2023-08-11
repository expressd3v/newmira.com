import React, {FC, useState} from 'react';
import styled from "@emotion/styled";
import {Box, Button, Container, Fade, Modal, Stack} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";
import Link from "next/link";
import Player from "@/components/shared/player";
import {useRouter} from "next/router";

const HomeHero: FC = () => {
    const router: any = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <HomeHeroWrap>
            <Link
                className="logo"
                href="/">
                <Image
                    style={{height: "40px", width: "auto"}}
                    width={147}
                    height={117}
                    src="/logo-light.png"
                    alt="Newmira Digital"/>
            </Link>
            <Container
                sx={{position: "relative"}}
                maxWidth="xl">
                <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={5}
                    container>
                    <Grid lg={5} xs={12}>
                        <h1>
                            <span>
                                Innovate Your
                            </span>&nbsp;<br/>
                            WEB<br/>
                            MOBILE<br/>
                            Database<br/>
                            e-Commerce

                        </h1>
                        <p>
                            Newmira Digital is a leading software, website, database, mobile and e-commerce development
                            company. With a passion for innovation and a commitment to
                            delivering top-notch solutions, we empower organizations to thrive in the digital landscape.
                        </p>
                        <Stack
                            spacing={2}
                            direction="row">
                            <Button
                                disableElevation
                                color="secondary"
                                size="large"
                                variant="contained"
                                onClick={() => {
                                    router.push("/contact")
                                }}
                                className="action-button">
                                Contact Us
                            </Button>
                            <Button
                                onClick={() => {
                                    router.push("/about")
                                }}
                                color="secondary"
                                size="large"
                                variant="outlined"
                                className="action-button outlined">
                                Learn More
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <div className="image-wrap">
                <video
                    autoPlay
                    loop
                    src="/videos/cover.mp4"
                    muted/>
            </div>
            <div className="circle1"></div>
            <Modal
                onClose={() => {
                    setOpen(false)
                }}
                BackdropProps={{
                    sx: {
                        background: "#00000938",
                        backdropFilter: "blur(6px)"
                    }
                }}
                open={open}>
                <Fade in={open}>
                    <Box sx={style}>
                        {
                            open && <Player url="https://youtu.be/TuF157D_-Zo"/>
                        }
                    </Box>
                </Fade>
            </Modal>
        </HomeHeroWrap>
    );
};

const HomeHeroWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .action {
    height: 180px;
    background-color: #ffffff;
    width: 100%;
    border-radius: 50px;
    bottom: -270px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  }

  .logo {
    position: absolute;
    top: 60px;
    left: 110px;
  }

  h1 {
    font-size: 60px;
    text-transform: uppercase;
    font-family: "roboto", sans-serif;
    line-height: 1.1;
    margin-bottom: 12px;
    letter-spacing: 6px;
    font-weight: 900;
    color: #1f1f1f;

    span {
      color: #ffffff;
      font-size: 32px;
      letter-spacing: 1px;
    }
  }

  p {
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .action-button {
    height: 50px;
    min-width: 200px;
    font-size: 18px;
    margin-top: 24px;
    font-weight: 700;
  }

  .image-wrap {
    position: absolute;
    right: 0;
    top: 50%;


    & > button {
      position: absolute;
      top: -100px;
      left: calc(50% - 100px);
      border-radius: 400px;

      & > div {
        display: flex;

        svg {
          width: 200px !important;
          height: auto !important;
        }
      }
    }

    img, video {
      height: 70vh;
      object-fit: cover;
      width: 50vw;
      border-top-left-radius: 180px;
      border-bottom-left-radius: 0;
      transform: translateY(-50%);
      box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }

  .circle1 {
    position: absolute;
    width: 90vw;
    height: 90vw;
    border-radius: 100vw;
    top: 50%;
    left: 40%;
    z-index: -1;
    transform: translate(-65%, -50%);
    background-color: #f6e009;
    
    
    @media(max-width: 1200px) {
      width: 2000px;
      height: 2000px;
      top: 50%;
      left: 10%;
    }
  }
`


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: "none",
    background: "transparent"
};


export default HomeHero;