import React, {FC} from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import {Stack} from "@mui/material";

const BlogCard: FC = () => {
    return (
        <BlogCardWrap>
            <div className="image-wrap">
                <Image src="/temp/blog3.jpg" width={500} height={500} alt="Blog"/>
                <div className="badge">
                    Database
                </div>
            </div>
            <div className="content-wrap">
                <Stack
                    sx={{width: "100%"}}
                    justifyContent="space-between"
                    direction="row">
                    <p className="info">
                        07/04/2021
                    </p>
                    <p  className="info">
                        1502
                    </p>
                </Stack>
                <h3>
                    Tik tok Banned in India
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim.
                    Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit
                </p>
            </div>
        </BlogCardWrap>
    );
};


const BlogCardWrap = styled.div`
  padding: 20px;
  position: relative;
  cursor: pointer;

  .image-wrap {
    position: relative;
    overflow: hidden;
    border-top-right-radius: 80px;

    .badge {
      position: absolute;
      width: 125px;
      height: 53px;
      background: #f6e009;
      bottom: 0;
      left: 0;
      border-top-right-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 12px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      color: #1f1f1f;
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .content-wrap {
    margin-top: 24px;
    padding-bottom: 42px;
    
    .info {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      opacity: .8;
      transition: all .2s;
    }
    
    h3 {
      font-size: 24px;
      margin-top: 12px;
      margin-bottom: 12px;
      transition: all .2s;
    }
    
    p {
      font-size: 16px;
      line-height: 1.7;
      transition: all .2s;
    }
  }
  
  
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 8px;
    background: #f6e009;
    bottom: 0;
    left: 0;
    transition: all .2s;
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 70%;
    background: #1010103f;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  
  :hover {
    :after {
      height: 70%;
      z-index: -1;
      transition: all .2s;
    }

    .content-wrap {

      .info {
        color: #5f5f5f;
        opacity: 1;
        transition: all .2s;
      }

      h3 {
       color: #1f1f1f;
        transition: all .2s;
      }

      p {
        color: #3f3f3f;
        transition: all .2s;
      }
    }
  }
`

export default BlogCard;