import React, {FC} from 'react';
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

interface Props {
    url: string;
}

const Player: FC<Props> = (props) => {
    const {url} = props;

    return (
        <PlayerWrap>
            <ReactPlayer
                controls
                url={url}/>
        </PlayerWrap>
    );
};

const PlayerWrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  &>div {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    left: 0;
    top: 0;
  }
`

export default Player;