import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import TeamCard from "@/components/home/team/components/card";

const HomeTeam: FC = () => {
    const team = [
        {
            image: "/temp/team1.jpg",
            name: "Steven Aitkens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse ",
            job: "NEWMIRA DIGITAL / PRESIDENT",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/temp/team2.jpg",
            name: "Steven Aitkens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse ",
            job: "NEWMIRA DIGITAL / PRESIDENT",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
        },{
            image: "/temp/team3.jpg",
            name: "Steven Aitkens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse ",
            job: "NEWMIRA DIGITAL / PRESIDENT",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
        },{
            image: "/temp/team4.jpg",
            name: "Steven Aitkens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse ",
            job: "NEWMIRA DIGITAL / PRESIDENT",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
        },
    ]

    return (
        <HomeTeamWrap>
            <Container maxWidth="xl">
                <h2>Our <span>team</span></h2>
                <Grid
                    spacing={3}
                    container>
                    {
                        team.map((member, index) =>(
                            <Grid key={index} xs={3}>
                                <TeamCard member={member}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </HomeTeamWrap>
    );
};


const HomeTeamWrap = styled.section`
  //background-color: #222222;
  padding: 150px 0 200px;
  border-top: 1px solid #ffffff0f;
  border-bottom: 1px solid #ffffff0f;
  
  h2 {
    font-size: 42px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 42px;

    span {
      color: #f6e009;
    }
  }
`

export default HomeTeam;