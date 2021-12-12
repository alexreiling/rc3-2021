import { HTMLAttributes } from "react";
import styled from "styled-components";

const LOGO_URL = "/common/logo.gif";

const Wrapper = styled.div`
  max-width: max(100px, 25vw);
  display: flex;
  > img {
    width: 100%;
    flex: 1;
    transform: translateX(-10%) translateY(-10%);
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Logo: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper {...rest}>
      <img src={LOGO_URL} />
    </Wrapper>
  );
};

export default Logo;
