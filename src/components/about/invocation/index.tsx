import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const AboutInvocation: FC = () => {
    return (
        <AboutMissionWrap>
            <Container maxWidth="xl">
                <h2>
                    <span>Quality</span> and Innovation
                </h2>
                <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={7}
                    container>
                    <Grid xs={8}>
                        <p>
                            We are passionate about quality and innovation. We adhere to industry best practices and
                            follow a rigorous quality assurance process to ensure that our software solutions are
                            reliable, secure, and scalable. Our team constantly explores emerging technologies and
                            embraces innovative approaches to deliver solutions that are at the forefront of industry
                            trends.
                        </p>
                    </Grid>
                    <Grid xs={4}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/Innovation.png"
                            alt="Newmira Mission"
                            width={601}
                            height={400}/>
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
`

export default AboutInvocation;