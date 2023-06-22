import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Button, Container, Stack} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const HomeHero: FC = () => {
    return (
        <HomeHeroWrap>
            <Container
                sx={{position: "relative"}}
                maxWidth="xl">
                <Grid
                    justifyContent="space-between"
                    spacing={5}
                    container>
                    <Grid xs={5}>
                        <h1>
                            <span>
                                Innovate With
                            </span>&nbsp;<br/>
                            WEB<br/>
                            MOBILE<br/>
                            Database<br/>

                        </h1>
                        <p>
                            Say goodbye to slow and expensive IT solutions,
                            and hello to high-quality results that wow.
                        </p>
                        {/*<div>*/}
                        {/*    <Image*/}
                        {/*        width={436}*/}
                        {/*        height={63}*/}
                        {/*        src="/temp/awards-logo.png"*/}
                        {/*        alt="Badges"/>*/}
                        {/*</div>*/}
                        <Stack
                            spacing={2}
                            direction="row">
                            <Button
                                variant="contained"
                                className="action-button">
                                Contact Us
                            </Button>
                            <Button
                                variant="outlined"
                                className="action-button outlined">
                                Conversation
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid>
                        <div className="image-wrap">
                            <Image
                                width={710}
                                height={463}
                                src="/temp/hero.png"
                                alt="Hero Image"/>
                            {/*<Image*/}
                            {/*    width={710}*/}
                            {/*    height={463}*/}
                            {/*    src="/temp/graph.webp"*/}
                            {/*    alt="Hero Image"/>*/}
                        </div>
                    </Grid>
                </Grid>

            </Container>
            {/*<Container*/}
            {/*    maxWidth="xl"*/}
            {/*    sx={{*/}
            {/*        position: "absolute",*/}
            {/*        left:  "50%",*/}
            {/*        transform: "translate(-50%, 30%)"*/}
            {/*    }}>*/}
            {/*    <div className="action">*/}

            {/*    </div>*/}
            {/*</Container>*/}
        </HomeHeroWrap>
    );
};

const HomeHeroWrap = styled.section`
  padding-top: 200px;
  padding-bottom: 100px;
  width: 100%;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  position: relative;
  background-color: #F6e009;
  border-bottom: 60px solid #F6e009;
  border-top: 10px solid #000000;
  border-left: 10px solid #f6e009;
  border-right: 10px solid #f6e009;
  
  .action {
    height: 180px;
    background-color: #ffffff;
    //position: absolute;
    width: 100%;
    border-radius: 50px;
    bottom: -270px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  }


  h1 {
    font-size: 60px;
    text-transform: uppercase;
    font-family: "roboto", sans-serif;
    line-height: 1.1;
    margin-bottom: 12px;
    letter-spacing: 8px;
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
    height: 60px;
    min-width: 200px;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 24px;
    font-weight: 700;

    &.outlined {
      background-color: #ffffff6f;
      backdrop-filter: blur(4px);
      border: none;
    }
  }

  .image-wrap {
    position: relative;

    //img:last-child {
    //  position: absolute;
    //  top: 12px;
    //  left: 0;
    //  width: 440px;
    //  height: auto;
    //}
  }
`

export default HomeHero;