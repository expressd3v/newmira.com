import React, {FC} from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import {IconButton, Stack} from "@mui/material";
import {Facebook, LinkedIn, Twitter} from "@mui/icons-material";

interface Props {
    member: any;
}

const TeamCard: FC<Props> = (props) => {
    const {member} = props;

    return (
        <TeamCardWrap>
            <Image src={member.image} alt="Team Member" width={680} height={1020}/>
            <div className="hover-wrap">
                <h3>{member.name}</h3>
                <p className="job">
                    {member.job}
                </p>
                <p>
                    {member.description}
                </p>
                <Stack
                    spacing={1}
                    direction="row">
                    <IconButton color="secondary">
                        <LinkedIn/>
                    </IconButton>
                    <IconButton color="secondary">
                        <Twitter/>
                    </IconButton>
                    <IconButton color="secondary">
                        <Facebook/>
                    </IconButton>
                </Stack>
            </div>
        </TeamCardWrap>
    );
};


const TeamCardWrap = styled.div`
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: -8px;
    transition: all .3s;
  }


  .hover-wrap {
    transform: rotateY(90deg) rotateZ(90deg);
    transition: all .5s;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background: #f6e009;
    padding: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    h3 {
      color: #1f1f1f;
      font-size: 24px;
      line-height: 1;
      margin-bottom: 4px;
      text-align: center;
    }
    
    p {
      color: #3f3f3f;
      text-align: center;
      margin-bottom: 24px;
      
      &.job {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 12px;
      }
    }
  }
  
  &:hover {
    .hover-wrap {
      transition: all .5s;
      transform: rotateY(0deg) rotateZ(0deg);
    }
    
    img {
      transform: scale(1.2);
      transition: all .3s;
    }
  }
`

export default TeamCard;