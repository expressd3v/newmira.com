import React from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import {Box} from "@mui/material";

const MobileHero = () => {
    return (
        <MobileHeroWrap>
            <Box sx={{pl: 4, mb: 2}}>
                <Image
                    style={{height: "40px", width: "auto"}}
                    width={147}
                    height={117}
                    src="/logo-light.png"
                    alt="Newmira Digital"/>
            </Box>
            <div className="image-wrap">
                <video
                    autoPlay
                    loop
                    src="/videos/cover.mp4"
                    muted/>
            </div>
            <h1>
                <span>
                    Innovate Your
                </span>&nbsp;<br/>
                WEB<br/>
                MOBILE<br/>
                Database<br/>
                e-Commerce
            </h1>
            <p>
                Newmira Digital is a leading software, website, database, mobile and e-commerce development
                company. With a passion for innovation and a commitment to
                delivering top-notch solutions, we empower organizations to thrive in the digital landscape.
            </p>
        </MobileHeroWrap>
    );
};


const MobileHeroWrap = styled.section`
  position: relative;
  background: #f6e009;
  padding: 100px 20px;
  overflow: hidden;
  
  @media(max-width: 600px) {
    padding: 100px 20px 60px;
  }

  //.circle {
  //  position: absolute;
  //  background: #f6e009;
  //  width: 100vh;
  //  height: 100vh;
  //  border-radius: 1000px;
  //  top: -50vh;
  //  left: -50vh;
  //  z-index: -1;
  //}
  
  h1 {
    color: #ffffff;
    margin-bottom: 12px;
    font-size: 42px;
    line-height: 1.3;
    text-transform: uppercase;
    span {
      font-size: 24px;
      color: #1f1f1f;
    }
  }
  
  p {
    color: #000000;
    font-size: 18px;
    font-weight: 600;
  }

  .image-wrap {
    video {
      width: 100%;
      border-top-left-radius: 60px;
      border-bottom-right-radius: 60px;
    }
  }
`

export default MobileHero;