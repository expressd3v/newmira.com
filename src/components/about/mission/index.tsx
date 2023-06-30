import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const AboutMission: FC = () => {
    return (
        <AboutMissionWrap>
            <Container maxWidth="xl">
                <h2>
                    Our <span>Mission</span>
                </h2>
                <Grid
                    justifyContent="space-between"
                    spacing={7}
                    container>
                    <Grid xs={4}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/mission.jpg"
                            alt="Newmira Mission"
                            width={1024}
                            height={576}/>
                    </Grid>
                    <Grid xs={8}>
                        <p>
                            Our mission is to revolutionize the way businesses leverage technology to achieve their goals. We
                            strive to create cutting-edge software solutions that enhance efficiency, improve productivity, and
                            foster exceptional user experiences. We are dedicated to being a trusted partner for our clients,
                            guiding them towards digital excellence and helping them stay ahead in an ever-evolving digital
                            world.
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
`

export default AboutMission;