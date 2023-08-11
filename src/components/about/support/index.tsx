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
                    spacing={{lg: 7, xs: 3}}
                    container>
                    <Grid lg={4} xs={12}>
                        <Image
                            style={{maxWidth: "100%", height: "auto"}}
                            src="/temp/support.jpg"
                            alt="Newmira Mission"
                            width={601}
                            height={400}/>
                    </Grid>
                    <Grid lg={8} xs={12}>
                        <p>
                            We view our clients as long-term partners and strive to build lasting relationships based on
                            trust and mutual success. We offer comprehensive support and maintenance services to ensure
                            that our clients&apos; software remains efficient, secure, and up-to-date even after deployment.
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

export default AboutSupport;