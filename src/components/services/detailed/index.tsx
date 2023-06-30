import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Card, CardContent, Container, Stack} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Lottie from "lottie-react";
import web from "./web.json";
import mobile from "./mobile.json";
import ux from "./ux.json";
import marketing from "./marketing.json";
import seo from "./seo.json";
import social from "./social.json";

const ServiceDetailed: FC = () => {
    return (
        <ServiceDetailedWrap>
            <Container maxWidth="xl">
                <Grid
                    spacing={5}
                    container>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={web}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            Website Development
                                        </h4>

                                        <p>
                                            Our web development process begins with a deep understanding of your
                                            business goals and target audience. We then design a custom website that
                                            reflects your brand identity and effectively communicates your message. From
                                            intuitive navigation to visually engaging layouts, we ensure that your
                                            website not only looks great but also delivers a seamless user experience.
                                        </p>
                                        <p>
                                            We focus on clean and optimized code, ensuring that your website loads
                                            quickly and performs efficiently. Our development team follows industry
                                            standards and adheres to SEO best practices, enabling your website to rank
                                            higher in search engine results and attract organic traffic.
                                        </p>
                                        <p>
                                            Throughout the development process, we prioritize collaboration and
                                            communication, keeping you involved and informed at every stage. We
                                            encourage your feedback and input to ensure that the final product aligns
                                            with your vision.
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", p: 2, borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={mobile}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            App Development
                                        </h4>
                                        <p>
                                            Whether you need a native iOS or Android app, a cross-platform solution, or
                                            a progressive web app, we have the expertise to turn your vision into
                                            reality. We leverage the latest technologies, industry best practices, and a
                                            user-centric approach to deliver high-quality mobile applications that meet
                                            your specific requirements.
                                        </p>
                                        <p>
                                            Our app development process begins with a thorough understanding of your
                                            goals, target audience, and market landscape. We collaborate closely with
                                            you to define the app&apos;s functionality, features, and design aesthetics.
                                            Our
                                            team brings your ideas to life through sleek designs, seamless navigation,
                                            and a focus on delivering an exceptional user experience.
                                        </p>
                                        <p>
                                            We meticulously develop and test your app, ensuring optimal performance,
                                            compatibility, and security across various devices and platforms. Our
                                            developers follow coding standards and leverage modern frameworks and
                                            libraries to deliver robust, scalable, and future-ready mobile applications.
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={ux}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            UI/UX DESIGNING
                                        </h4>
                                        <p>
                                            We understand that effective UI/UX design goes beyond aesthetics—it is about
                                            understanding user behavior, anticipating their needs, and creating
                                            interfaces that seamlessly guide them through your digital products or
                                            services. Our design process starts with in-depth research and analysis to
                                            gain insights into your users, industry trends, and competition.
                                        </p>
                                        <p>
                                            With a deep understanding of your goals and target audience, we craft
                                            tailored UI/UX design solutions that reflect your brand identity and create
                                            memorable experiences. From wireframing and prototyping to the final visual
                                            design, we meticulously refine every aspect of the user interface to ensure
                                            it aligns with your vision and enhances usability.
                                        </p>
                                        <p>
                                            Our designers leverage the latest design tools and techniques to create
                                            stunning visuals, striking color schemes, and captivating typography that
                                            resonate with your users. We focus on creating a seamless and intuitive user
                                            flow, optimizing interactions, and ensuring accessibility across different
                                            devices and screen sizes.
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={marketing}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            DIGITAL MARKETING
                                        </h4>
                                        <p>
                                            Our digital marketing services encompass a wide range of disciplines,
                                            including search engine optimization (SEO), pay-per-click (PPC) advertising,
                                            social media marketing, content marketing, email marketing, and more. We
                                            combine these strategies to create a comprehensive and integrated approach
                                            that maximizes your online presence and drives tangible business growth.
                                        </p>
                                        <p>
                                            We begin by conducting thorough research and analysis to gain insights into
                                            your industry, competitors, and target audience. This information forms the
                                            foundation of our strategies, enabling us to identify the most effective
                                            channels and tactics to reach your audience and achieve your marketing
                                            objectives.
                                        </p>
                                        <p>
                                            Our team of experts then executes the strategies with precision, leveraging
                                            industry best practices and the latest tools and technologies. We
                                            continuously monitor campaign performance, analyze data, and make
                                            data-driven optimizations to ensure that your marketing efforts yield the
                                            best possible return on investment (ROI).
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={seo}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            SEO & CONTENT WRITING
                                        </h4>
                                        <p>
                                            Search engine optimization (SEO) is essential for improving your website's
                                            visibility and driving targeted organic traffic. Our SEO specialists conduct
                                            in-depth keyword research, analyze your website's performance, and optimize
                                            various on-page and off-page elements to enhance your search engine
                                            rankings. We stay up-to-date with the latest SEO trends and algorithms to
                                            ensure that your website remains competitive and visible in search engine
                                            results.
                                        </p>
                                        <p>
                                            Content writing plays a crucial role in SEO success. Our talented content
                                            writers create compelling, informative, and keyword-rich content that
                                            resonates with your target audience. Whether it's website copy, blog posts,
                                            articles, or social media content, we craft high-quality content that
                                            engages readers and encourages them to take action. Our content writing
                                            services are tailored to your industry and target audience, helping you
                                            establish thought leadership and drive meaningful interactions with your
                                            customers.
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Card
                            variant="outlined"
                            sx={{backgroundColor: "transparent", borderRadius: 6}}>
                            <CardContent>
                                <Grid
                                    alignItems="center"
                                    justifyContent="space-around"
                                    spacing={6}
                                    container>
                                    <Grid xs={4}>
                                        <Lottie animationData={social}/>
                                    </Grid>
                                    <Grid xs={7}>
                                        <h4>
                                            Social Media & Reputation Management
                                        </h4>
                                        <p>
                                            Social media has become an essential platform for businesses to connect with
                                            their customers and showcase their brand personality. Our social media
                                            experts create tailored strategies that align with your business goals,
                                            target audience, and industry. We handle everything from social media
                                            account setup and content creation to community management and paid
                                            advertising. By leveraging popular social media platforms, we help you reach
                                            and engage your audience, drive website traffic, and foster brand loyalty.
                                        </p>
                                        <p>
                                            Online reputation management is crucial in today's digital landscape. We
                                            understand the importance of maintaining a positive brand image and managing
                                            your online reputation effectively. Our reputation management specialists
                                            monitor online conversations, reviews, and mentions of your brand across
                                            various platforms. We address customer feedback promptly, manage negative
                                            reviews and comments, and work proactively to enhance your brand's online
                                            reputation.
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </ServiceDetailedWrap>
    );
};


const ServiceDetailedWrap = styled.section`
  padding: 100px 0;
  border-top: 1px solid #ffffff0f;
  border-bottom: 1px solid #ffffff0f;

  h4 {
    font-size: 32px;
    letter-spacing: 2px;
    margin-bottom: 12px;
    text-transform: uppercase;
    padding-top: 12px;
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
    line-height: 2;
    margin-bottom: 16px;
    text-align: justify;
  }
`

export default ServiceDetailed;