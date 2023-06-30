import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";

const AboutSupport: FC = () => {
    return (
        <AboutMissionWrap>
            <Container maxWidth="xl">
                <h2>
                    Partnership and <span>Support</span>
                </h2>
                <Grid
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={7}
                    container>
                    <Grid xs={4}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/support.jpg"
                            alt="Newmira Mission"
                            width={601}
                            height={400}/>
                    </Grid>
                    <Grid xs={8}>
                        <p>
                            We view our clients as long-term partners and strive to build lasting relationships based on
                            trust and mutual success. We offer comprehensive support and maintenance services to ensure
                            that our clients' software remains efficient, secure, and up-to-date even after deployment.
                            Our dedicated support team is always available to address any concerns or issues that may
                            arise, providing peace of mind and uninterrupted operations.
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

export default AboutSupport;