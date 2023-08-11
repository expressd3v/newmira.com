import React, {FC} from 'react';
import styled from "@emotion/styled";
import {
    Button,
    ButtonBase,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Input,
    InputLabel,
    Stack,
    Typography
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {AlternateEmail, Mail, PhoneOutlined, SendOutlined} from "@mui/icons-material";
import Image from "next/image";

const HomeContact: FC = () => {
    return (
        <HomeContactWrap>
            <Container maxWidth="xl">
                <h2>Contact us</h2>
                <Grid
                    justifyContent="space-between"
                    spacing={{lg: 5, xs: 2}}
                    container>
                    <Grid lg={6} xs={12}>
                        <Stack
                            sx={{ mb: {lg: 0, xs: 6}}}
                            alignItems="flex-start"
                            spacing={3}>
                            <FormControl
                                fullWidth
                                variant="standard">
                                <InputLabel
                                    shrink
                                    focused
                                    color="info"
                                    htmlFor="component-simple">
                                    First Name
                                </InputLabel>
                                <Input
                                    sx={{
                                        height: 50
                                    }}
                                    fullWidth
                                    placeholder="Your First Name @"
                                    id="component-simple"
                                    />
                            </FormControl>
                            <FormControl
                                fullWidth
                                variant="standard">
                                <InputLabel
                                    shrink
                                    focused
                                    color="info"
                                    htmlFor="component-simple">
                                    Last Name
                                </InputLabel>
                                <Input
                                    sx={{
                                        height: 50
                                    }}
                                    fullWidth
                                    id="component-simple"
                                    placeholder="Your Last Name @"
                                    />
                            </FormControl>
                            <FormControl
                                fullWidth
                                variant="standard">
                                <InputLabel
                                    shrink
                                    focused
                                    color="info"
                                    htmlFor="component-simple">
                                    Email
                                </InputLabel>
                                <Input
                                    sx={{
                                        height: 50
                                    }}
                                    fullWidth
                                    id="component-simple"
                                    placeholder="Your Email Address @"
                                />
                            </FormControl>
                            <FormControl
                                fullWidth
                                variant="standard">
                                <InputLabel
                                    shrink
                                    focused
                                    color="info"
                                    htmlFor="component-simple">
                                    Message
                                </InputLabel>
                                <Input
                                    multiline
                                    rows={4}
                                    fullWidth
                                    id="component-simple"
                                    placeholder="Your Message @"
                                />
                            </FormControl>
                            <Divider sx={{mb: 4}}/>
                            <Button
                                sx={{height: 50, padding: "0 40px"}}
                                variant="contained"
                                endIcon={<SendOutlined/>}
                                size="large">
                                Send Message
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid lg={4} xs={12}>
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}
                            fontWeight={700}
                            fontSize={16}
                            mb={2}
                            variant="h4">
                            <PhoneOutlined/>
                            Mobile number
                        </Typography>
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 3,
                                gap: 2
                            }}>
                            (415) 766-7183
                            <Button
                                href="tel:(415) 766-7183"
                                sx={{borderRadius: 12}}
                                size="small"
                                variant="contained">
                                Call
                            </Button>
                        </Typography>

                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}
                            fontWeight={700}
                            fontSize={16}
                            mt={4}
                            mb={2}
                            variant="h4">
                            <Mail/>
                            E-mail
                        </Typography>
                        <Typography
                            mb={1}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 3,
                                gap: 2
                            }}>
                            info@newmira.com
                        </Typography>

                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}
                            fontWeight={700}
                            fontSize={16}
                            mt={4}
                            mb={2}
                            variant="h4">
                            <AlternateEmail/>
                            Address
                        </Typography>
                        <Typography
                            mb={1}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 3,
                                gap: 2
                            }}>
                            1600 Shatuck Ave., Suite 216<br/>
                            Berkeley, California USA 94709
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <ButtonBase
                target="_blank"
                href="https://www.google.com/maps/place/1600+Shattuck+Ave.+%23216,+Berkeley,+CA+94709%E7%BE%8E%E5%9B%BD/@37.8781161,-122.2719711,17z/data=!3m1!4b1!4m5!3m4!1s0x80857ea10daae777:0xa3d3b85b8e7b1cd8!8m2!3d37.8781161!4d-122.2693962?entry=ttu"
                className="map">
                <Image
                    width={50}
                    height={50}
                    src="/svgs/map.svg"
                       alt="Map Icon"/>
            </ButtonBase>
        </HomeContactWrap>
    );
};


const HomeContactWrap = styled.section`
  padding: 150px 0;
  //background: #222222;
  border-top: 1px solid #ffffff0f;
  border-bottom: 1px solid #ffffff0f;
  position: relative;
  
  @media(max-width: 600px) {
    padding: 60px 0;
  }
  
  .map {
    width: 116px;
    height: 92px;
    border-top-left-radius: 60px;
    background: #f6e009;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 102px;

    @media(max-width: 600px) { 
      bottom: auto;
      top: 60px;
      width: 60px;
      height: 50px;
      border-top-left-radius: 32px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  
  h2 {
    font-size: 42px;
    margin-bottom: 42px;

    @media(max-width: 600px) {
      font-size: 32px;
      margin-bottom: 22px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`

export default HomeContact;