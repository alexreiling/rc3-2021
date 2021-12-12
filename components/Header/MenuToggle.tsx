import { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MenuToggle: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return (
    <Wrapper {...rest} id="menu-toggle">
      Menu
    </Wrapper>
  );
};

export default MenuToggle;
