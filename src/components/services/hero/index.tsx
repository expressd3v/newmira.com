import React, {FC} from 'react';
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import illus from "./illus.json"
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Image from "next/image";


const ServicesHero: FC = () => {
    return (
        <ServicesHeroWrap>
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
                    <Grid order={{lg: 1, xs: 2}} md={8} xs={12}>
                        <h1><span>Empowering Innovation</span> Through Code</h1>
                        <p>
                            With our team of talented developers, designers, and tech enthusiasts, we craft cutting-edge
                            software that fuels innovation and drives business success. Whether you&apos;re a startup seeking
                            to disrupt the industry or an established enterprise aiming to stay ahead of the curve,
                            we&apos;re here to unleash the power of code and deliver unparalleled solutions tailored to your
                            unique needs. Join us on this transformative journey as we build the future together, one
                            line of code at a time.
                        </p>
                    </Grid>
                    <Grid order={{lg: 2, xs: 1}} md={4} xs={12}>
                        <Lottie animationData={illus}/>
                    </Grid>
                </Grid>
            </Container>
        </ServicesHeroWrap>
    );
};


const ServicesHeroWrap = styled.section`
  min-height: 50vh;
  padding: 200px 0 120px;
  display: flex;
  align-items: center;
  
  @media(max-width: 600px) {
    padding: 160px 0 60px;
  }


  .logo {
    position: absolute;
    top: 60px;
    left: 110px;
    @media(max-width: 600px) {
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
    }
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
    
    @media(max-width: 600px) {
      font-size: 36px;
    }

    span {
      color: #f6e009;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.7;
  }
`

export default ServicesHero;