import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container, Divider, Stack} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

const HomeScore: FC = () => {
    return (
        <HomeScoreWrap>
            <Container>
                <Grid
                    justifyContent="space-between"
                    spacing={3}
                    container>
                    <Grid>
                        <h3>9854</h3>
                        <p>Projects
                            completed</p>
                    </Grid><Divider sx={{borderColor: "#8f8f8f"}} orientation="vertical" flexItem/>
                    <Grid>
                        <h3>840</h3>
                        <p>Clients</p>
                    </Grid><Divider sx={{borderColor: "#8f8f8f"}} orientation="vertical" flexItem/>
                    <Grid>
                        <h3>12</h3>
                        <p>Active clients</p>
                    </Grid><Divider sx={{borderColor: "#8f8f8f"}} orientation="vertical" flexItem/>
                    <Grid>
                        <h3>$1,000,000</h3>
                        <p>Profit Annually</p>
                    </Grid><Divider sx={{borderColor: "#8f8f8f"}} orientation="vertical" flexItem/>
                    <Grid>
                        <h3>1259</h3>
                        <p>Recommended</p>
                    </Grid>
                </Grid>
            </Container>
        </HomeScoreWrap>
    );
};

const HomeScoreWrap = styled.section`
  background-color: #f6e009;
  padding: 62px 0;
  
  h3{
    color: #1f1f1f;
    font-size: 36px;
    text-align: center;
  }
  
  p {
    text-align: center;
    color: #4f4f4f;
    font-size: 16px;
    font-weight: 600;
  }
`

export default HomeScore;