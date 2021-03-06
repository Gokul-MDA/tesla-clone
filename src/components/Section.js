import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;

  @media screen and (max-width: 768px) {
    scroll-snap-align: start;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGrp = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGrp>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGrp>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

export default Section;
