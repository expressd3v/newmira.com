import React, {FC} from 'react';
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import illus from "./illus.json"
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Link from "next/link";
import Image from "next/image";


const ContractHero: FC = () => {
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
                    <Grid  order={{lg: 1, xs: 2}} lg={8} xs={12}>
                        <h1><span>Get In Touch</span> With Us</h1>
                        <p>
                            We’d love to chat with you to see if we are good fit to run your social media, to bring you
                            customers and to help build your brand.
                            <br/> <br/>
                            Please call us or complete this short form and we promise a response by email within one
                            business day. Feel free to leave your phone number if you’d like to us to call rather than
                            reply by email. And of course your information is for our eyes only. We will never give away
                            or sell your information to any third parties for any reason. Never ever.
                        </p>
                    </Grid>
                    <Grid order={{lg: 2, xs: 1}} lg={4} xs={12}>
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

export default ContractHero;