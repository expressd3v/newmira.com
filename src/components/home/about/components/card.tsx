import React, {FC} from 'react';
import styled from "@emotion/styled";
import {Card, CardContent} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

interface Props {
    project: {
        title: string;
        description: string;
        img: string;
    }
}

const ProjectCard: FC<Props> = (props) => {
    const {project} = props
    return (
        <ProjectCardWrap elevation={0}>
            <CardContent sx={{zIndex: 1}}>
                <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link href="/contact">
                        Contact Us
                    </Link>
                </div>
            </CardContent>
            <div className="action">
                <Image
                    width={50}
                    height={50}
                    src={project.img}
                    alt=""/>
            </div>
        </ProjectCardWrap>
    );
};


const ProjectCardWrap = styled(Card)`
  height: 350px;
  border-radius: 12px;
  position: relative;
  padding: 12px;
  border: 1px solid transparent;
  
  .content {
    position: absolute;
    z-index: 2;
    left: 24px;
    width: calc(100% - 48px);
  }

  .action {
    position: absolute;
    bottom: 0;
    right: 0;
    :after {
      content: "";
      width: 136px;
      height: 102px;
      position: absolute;
      background-color: #1f1f1f;
      bottom: 0;
      right: 0;
      border-top-left-radius: 70px;
      transition: all .2s;
    }
    
    img {
      position: absolute;
      bottom: 23px;
      right: 40px;
      z-index: 1;
    }
  }
  
  :hover {
    border: 1px solid #f6e009;
    .action {
      :after {
        width: 600px;
        height: 600px;
        border-radius: 1000px;
        bottom: -270px;
        right: -270px;
        transition: all .2s;
      }
    }
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  p {
    text-align: left;
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 32px;
    font-weight: 600;
  }
  
  a {
    font-size: 18px;
    color: #f6e009;
    text-transform: uppercase;
    text-decoration: none;
  }
`

export default ProjectCard;