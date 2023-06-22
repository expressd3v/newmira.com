import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Card, CardContent, Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

const HomeAbout: FC = () => {
    return (
        <HomeAboutWrap>
            <Container maxWidth="xl">
                <h2>Who <span>We are?</span></h2>
                <div>

                </div>
                <p>
                    We excel as a digital transformation partner because of our intense passion for creativity and
                    innovation. We are always looking for fresh approaches to increase our clients' revenue levels. We
                    assist our clients in obtaining more customers through digital methods, receiving recognition for
                    our efforts along the way.
                </p>

                <Grid
                    spacing={3}
                    container>
                    <Grid xs={3}>
                        <Card>
                            <CardContent>
                                <h3>Clients</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <CardContent>
                                <h3>Clients</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card>
                            <CardContent>
                                <h3>Clients</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card elevation={0}>
                            <CardContent>
                                <h3>Clients</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </HomeAboutWrap>
    );
};


const HomeAboutWrap = styled.section`
  min-height: 200px;
  padding: 50px 0;

  h2 {
    font-size: 42px;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 24px;

    span {
      color: #f6e009;
    }
  }
  
  p {
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    font-weight: 600;
    margin-bottom: 42px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`

export default HomeAbout;