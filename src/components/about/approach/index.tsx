import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const AboutApproach: FC = () => {
    return (
        <AboutMissionWrap>
            <Container maxWidth="xl">
                <h2>
                    Client-Centric <span>Approach</span>
                </h2>
                <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={{lg: 7, xs: 3}}
                    container>
                    <Grid lg={4} xs={12}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/approach.webp"
                            alt="Newmira Mission"
                            width={700}
                            height={461}/>
                    </Grid>
                    <Grid lg={8} xs={12}>
                        <p>
                            We put our clients at the center of everything we do. We believe that understanding our
                            clients&apos; unique challenges, goals, and vision is key to delivering successful software
                            solutions. Our collaborative approach involves close communication and active involvement
                            throughout the development process, ensuring that our clients&apos; requirements are met and
                            their expectations are exceeded.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </AboutMissionWrap>
    );
};


const AboutMissionWrap = styled.section`
  padding: 120px 0;

  h2 {
    font-size: 42px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 42px;

    span {
      color: #f6e009;
    }
  }

  p {
    font-size: 24px;
    line-height: 2;
    text-align: justify;
  }

  @media(max-width: 600px) {
    padding: 40px 0;

    h2 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`

export default AboutApproach;