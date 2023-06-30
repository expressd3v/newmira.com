import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import BlogCard from "@/components/home/blog/components/card";

const HomeBlog: FC = () => {
    return (
        <HomeBlogWrap>
            <Container maxWidth="xl">
                <h2>Our <span>Blog</span></h2>
                <Grid
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}
                    container>
                    <Grid xs={3.5}>
                        <BlogCard/>
                    </Grid>
                    <Grid xs={3.5}>
                        <BlogCard/>
                    </Grid>
                    <Grid xs={3.5}>
                        <BlogCard/>
                    </Grid>
                </Grid>
            </Container>
        </HomeBlogWrap>
    );
};


const HomeBlogWrap = styled.section`
  padding: 150px 0 200px;

  h2 {
    font-size: 42px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 42px;
    text-align: center;

    span {
      color: #f6e009;
    }
  }
`

export default HomeBlog;