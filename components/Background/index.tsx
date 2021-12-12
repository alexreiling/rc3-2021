import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  verticalScrollProgress: number; // [0-1]
}

const Background: React.FC<Props> = (props) => {
  const { verticalScrollProgress, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <Nebula scrollY={verticalScrollProgress} />
      <Gradient />
      <Grid />
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
const Nebula = styled.div<{ scrollY: number }>`
  top: ${(p) => p.scrollY * -5}%;
  height: 110%;
  background-image: url("/background/nebula1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const Gradient = styled.div`
  background: linear-gradient(135deg, rgb(30, 73, 210, 1), rgb(33, 234, 68, 1));
  mix-blend-mode: color;
`;
const Grid = styled.div`
  background-image: url("/background/grid.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;
