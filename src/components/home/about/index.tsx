import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Button, Card, CardContent, Container} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import ProjectCard from "@/components/home/about/components/card";
import {useRouter} from "next/router";

const HomeAbout: FC = () => {
    const router: any = useRouter();

    const projects = [
        {
            title: "App Development",
            description: "we are passionate about crafting exceptional mobile applications that elevate your business to new heights. ",
            img: "/svgs/computer.svg"
        },
        {
            title: "Website Development",
            description: "Our experienced team of web developers, designers work together to create stunning, functional, and user-friendly websites that captivate your audience.",
            img: "/svgs/components.svg"
        },
        {
            title: "UI/UX DESIGNING",
            description: "Our talented team of UI/UX designers is dedicated to creating visually stunning, intuitive, and user-friendly designs that captivate and engage your target audience.",
            img: "/svgs/ux.svg"
        },
        {
            title: "DIGITAL MARKETING",
            description: "We specialize in driving digital success for businesses through strategic and result-oriented digital marketing solutions. ",
            img: "/svgs/marketing.svg"
        },
        {
            title: "SEO & CONTENT WRITING",
            description: "We offer comprehensive SEO and content writing services to help your business establish a strong online presence, increase visibility, and drive organic traffic.",
            img: "/svgs/chart.svg"
        },
        {
            title: "SOCIAL MEDIA & REPUTATION",
            description: "Our team work together to develop strategies that enhance your online presence and foster meaningful connections.",
            img: "/svgs/paint.svg"
        }
    ]

    return (
        <HomeAboutWrap>
            <Container maxWidth="xl">
                <h2>What <span>We do?</span></h2>
                <Grid
                    spacing={3}
                    container>
                    {
                        projects.map((project, index) => (
                            <Grid xs={3} key={index}>
                                <ProjectCard project={project}/>
                            </Grid>
                        ))
                    }
                    <Grid xs={6}>
                        <div className="action-card">
                            <h3 className="action-title">Solutions for<br/> your <span>business</span></h3>
                            <p>
                                Let <b>Newmira Digital</b> be your trusted software development partner, empowering your business to thrive in the digital era.
                            </p>
                            <Button
                                onClick={()=>{router.push("/services")}}
                                disableElevation
                                size="large"
                                variant="contained"
                                color="primary">
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </HomeAboutWrap>
    );
};


const HomeAboutWrap = styled.section`
  padding: 150px 0 200px;
  min-height: 100vh;
  //background-color: #222222;
  border-top: 1px solid #ffffff0f;
  border-bottom: 1px solid #ffffff0f;

  h2 {
    font-size: 42px;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 42px;

    span {
      color: #f6e009;
    }
  }

  .action-card {
    padding: 52px;

    h3 {
      color: #f0f0f0;
      font-size: 28px;
      line-height: 1.2;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 4px;

      span {
        color: #f6e009;
      }
    }

    p {
      font-size: 20px;
      margin-bottom: 42px;
      padding-right: 20px;
    }
  }
`

export default HomeAbout;