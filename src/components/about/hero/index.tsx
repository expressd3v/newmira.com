import React, {FC} from 'react';
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import illus from "./illus.json"
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Image from "next/image";


const AboutHero: FC = () => {
    return (
        <AboutHeroWrap>
            <Link
                className="logo"
                href="/">
                <Image
                    style={{height: "40px", width: "auto"}}
                    width={147}
                    height={117}
                    src="/logo.png"
                    alt="Newmira Digital"/>
            </Link>
            <Container maxWidth="xl">
                <Grid
                    spacing={3}
                    alignItems="center"
                    container>
                    <Grid xs={8}>
                        <h1>Unleashing Digital Excellence with <span>Newmira Digital</span></h1>
                        <p>
                            Welcome to Newmira Digital, a leading software development company dedicated to unleashing
                            digital excellence for businesses worldwide. With a passion for innovation and a commitment
                            to delivering top-notch solutions, we empower organizations to thrive in the digital
                            landscape.
                        </p>
                    </Grid>
                    <Grid xs={4}>
                        <Lottie animationData={illus}/>
                    </Grid>
                </Grid>
            </Container>
        </AboutHeroWrap>
    );
};


const AboutHeroWrap = styled.section`
  min-height: 50vh;
  padding: 200px 0 120px;
  display: flex;
  align-items: center;


  .logo {
    position: absolute;
    top: 60px;
    left: 110px;
  }

  svg {
    width: 500px !important;
    max-width: 100%;
  }

  h1 {
    font-size: 60px;
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 24px;

    span {
      color: #f6e009;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.7;
  }
`

export default AboutHero;