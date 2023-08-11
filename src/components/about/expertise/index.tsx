import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const AboutExpertise: FC = () => {
    return (
        <AboutMissionWrap>
            <Container maxWidth="xl">
                <h2>
                    Our <span>Expertise</span>
                </h2>
                <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={{lg: 7, xs: 3}}
                    container>
                    <Grid order={{lg: 1, xs: 2}} lg={8} xs={12}>
                        <p>
                            With a team of highly skilled professionals, we possess extensive expertise in various
                            domains of software development. From web and mobile applications to enterprise solutions
                            and custom software development, we have the knowledge and experience to tackle projects of
                            any size and complexity. Our technical prowess, coupled with our commitment to staying
                            updated with the latest technologies and industry trends, ensures that we deliver solutions
                            that surpass client expectations.
                        </p>
                    </Grid>
                    <Grid order={{lg: 2, xs: 1}} lg={4} xs={12}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/expertise.jpg"
                            alt="Newmira Mission"
                            width={750}
                            height={423}/>
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

export default AboutExpertise;