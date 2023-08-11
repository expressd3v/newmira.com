import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Button, ButtonBase, Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";
import {useRouter} from "next/router";

const HomeWorks: FC = () => {
    const router: any = useRouter();

    return (
        <HomeWorksWrap>
            <Container maxWidth="xl">
                <Grid
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                    container>
                    <Grid xs={2.5}>
                        <ImageHover>
                            <Image src="/temp/project1.jpg" alt="Project Image 1" width={602} height={752}/>
                        </ImageHover>
                    </Grid>
                    <Grid xs={6.5}>
                        <ImageHover>
                            <Image src="/temp/project2.jpg" alt="Project Image 1" width={1468} height={752}/>
                        </ImageHover>
                    </Grid>
                    <Grid xs={3}>
                        <ImageHover>
                            <Image src="/temp/project3.jpg" alt="Project Image 1" width={602} height={752}/>
                        </ImageHover>
                    </Grid>
                    <Grid xs={4}>
                        <div className="action-card">
                            <h3 className="action-title">not impressed?</h3>
                            <p>
                                We invite you to dive into our portfolio and discover
                                the remarkable projects we&apos;ve had the privilege to work on. We&apos;re confident that you&apos;ll
                                be impressed by our track record of success and the caliber of solutions we deliver.
                            </p>
                            <Button
                                onClick={()=>{router.push("/contact")}}
                                disableElevation
                                size="large"
                                variant="contained"
                                color="primary">
                                Contact Us
                            </Button>
                        </div>
                    </Grid>
                    <Grid xs={2.5}>
                        <ImageHover>
                            <Image src="/temp/project4.jpg" alt="Project Image 1" width={1468} height={752}/>
                        </ImageHover>
                    </Grid>
                    <Grid xs={5.5}>
                        <ImageHover>
                            <Image src="/temp/project5.jpg" alt="Project Image 1" width={602} height={752}/>
                        </ImageHover>
                    </Grid>
                </Grid>
            </Container>
        </HomeWorksWrap>
    );
};


const ImageHover = styled(ButtonBase)`
  height: 400px;
  overflow: hidden;
  display: block;
  border-radius: 8px;
  width: 100%;

  img {
    transition: all .5s;
  }

  :hover {
    img {
      transition: all .5s;
      transform: scale(1.2);
    }
  }
`

const HomeWorksWrap = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 200px 0;

  img {
    height: 400px;
    width: 100%;
  }

  .action-card {
    padding: 24px;

    h3 {
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    p {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
`

export default HomeWorks;