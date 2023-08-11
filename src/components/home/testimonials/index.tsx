import React, {FC, Fragment, useState} from 'react';
import styled from "@emotion/styled";
import {Button, Container, Stack} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Image from "next/image";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

const HomeTestimonials: FC = () => {
    const testimonials = [
        {
            image: "/temp/testminal4.webp",
            name: "Olivia Nick",
            company: "",
            job: "Sales Manager",
            content: <Fragment>
                <p>
                    Newmira Digital has been instrumental in transforming our business through their exceptional
                    software development services.
                </p>
                <p>
                    They took the time to understand our unique requirements and
                    delivered a tailored solution that exceeded our expectations. Their attention to detail, technical
                    expertise, and commitment to excellence have made them our go-to partner for all our software needs.
                </p>
            </Fragment>,
        },
        {
            image: "/temp/testminal2.jpg",
            name: "John Doe",
            company: "Google",
            job: "CTO",
            content: <Fragment>
                <p>
                    Working with Newmira Digital has been a game-changer for our organization.
                </p>
                <p>
                    Their team of talented
                    developers created a robust and scalable software application that has streamlined our operations
                    and improved overall efficiency. Their professionalism, responsiveness, and ability to deliver on
                    time and within budget are truly commendable.
                </p>
            </Fragment>,
        },
        {
            image: "/temp/testminal3.jpg",
            name: "Emma Brown",
            company: "Facebook",
            job: "CEO",
            content: <Fragment>
                <p>
                    We couldn&apos;t be happier with the software solution delivered by Newmira Digital. They transformed our
                    vision into reality, providing us with a user-friendly interface and powerful functionality.
                </p>
                <p>
                    Their
                    expertise in software development, coupled with their exceptional project management skills, made
                    the entire process seamless and enjoyable.
                </p>
                <p>...</p>
            </Fragment>,
        },
        {
            image: "/temp/testminal1.png",
            name: "Isabella Smith",
            company: "Naipo Care",
            job: "CEO",
            content: <Fragment>
                <p>
                    Newmira Digital is a trusted partner that consistently delivers outstanding software solutions.
                    Their team&apos;s deep technical knowledge, combined with their creative problem-solving approach, has
                    resulted in innovative solutions that have given us a competitive edge.
                </p>
                <p>
                    Their dedication to client
                    satisfaction and post-launch support further reinforces their commitment to excellence.
                </p>
                <p>
                    We are incredibly impressed with the level of professionalism and expertise displayed by Newmira
                    Digital.
                </p>
            </Fragment>,
        },
        {
            image: "/temp/testminal5.jpg",
            name: "David T",
            company: "Ni",
            job: "Tester",
            content: <Fragment>
                <p>
                    We have had the pleasure of working with Newmira Digital on multiple software development projects,
                    and each time they have exceeded our expectations.
                </p>
                <p>
                    Their team&apos;s technical prowess, innovative
                    thinking, and attention to detail have resulted in exceptional software solutions that have
                    positively impacted our business operations. We highly recommend Newmira Digital to any organization
                    looking for reliable and cutting-edge software development services.
                </p>
            </Fragment>,
        },
    ]

    const [active, setActive] = useState(0);

    return (
        <HomeTestimonialsWrap>
            <Container maxWidth="xl">
                <Grid
                    spacing={8}
                    container>
                    <Grid xs={4}>
                        <Image
                            width={490}
                            height={465}
                            src={testimonials[active]?.image}
                            alt="testminal"/>
                    </Grid>
                    <Grid xs={7}>
                        <h2><span>What</span> they say?</h2>
                        <p className="name">{testimonials[active]?.name}</p>
                        <p className="job">{testimonials[active]?.company || "@"} / {testimonials[active]?.job}</p>
                        <div className="content">
                            {testimonials[active]?.content}
                        </div>
                        <Stack
                            spacing={2}
                            direction="row">
                            <Button
                                disabled={active < 1}
                                startIcon={<ArrowBackIos/>}
                                onClick={() => {
                                    setActive(active - 1)
                                }}
                                size="large"
                                variant="outlined"
                                color="info">
                                Prev
                            </Button>
                            <Button
                                disabled={active === testimonials.length - 1}
                                endIcon={<ArrowForwardIos/>}
                                size="large"
                                variant="outlined"
                                onClick={() => {
                                    setActive(active + 1)
                                }}
                                color="info">
                                Next
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid xs={1}>
                        <div className="navigate">
                            <div>
                                01
                            </div>
                            {
                                testimonials.map((testimonial, index) => (
                                    <div
                                        key={`nav-${index}`}
                                        className={
                                            index === active ? "navigate-item active" : "navigate-item"
                                        }/>
                                ))
                            }
                            <div>
                                {testimonials.length < 10 && "0"}{testimonials.length}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </HomeTestimonialsWrap>
    );
};

const HomeTestimonialsWrap = styled.section`

  padding: 200px 0;

  img {
    border-top-right-radius: 85px;
    max-width: 100%;
    height: auto;
    border-right: 12px solid #101010;
    border-bottom: 12px solid #101010;
  }

  h2 {
    font-size: 42px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 42px;

    span {
      color: #f6e009;
    }
  }

  .name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .job {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 24px;
    text-transform: uppercase;
    color: #9e9e9e;
  }

  .content {
    margin-bottom: 24px;

    p {
      margin-bottom: 12px;
      font-size: 16px;
      line-height: 1.7;
    }
  }

  .navigate {
    height: 100%;
    align-items: center;
    display: flex;
    gap: 8px;
    flex-direction: column;

    div {
      font-size: 24px;
      font-weight: 700;
    }

    .navigate-item {
      width: 5px;
      height: 50px;
      background: #ababab;
      border-radius: 2px;
      transition: all .3s;

      &.active {
        height: 160px;
        background: #f6e009;
        transition: all .3s;
      }
    }
  }
`

export default HomeTestimonials;