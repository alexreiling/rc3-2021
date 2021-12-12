import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import MobileMenuItem from "./MobileMenuItem";

const ROUTES = [
  {
    label: "world",
    path: "/",
  },
  {
    label: "platform",
    path: "/",
  },
  {
    label: "wiki",
    path: "/",
  },
  {
    label: "news",
    path: "/",
  },
  {
    label: "plan",
    path: "/",
  },
  {
    label: "board",
    path: "/",
  },
  {
    label: "messages",
    path: "/",
  },
];
const Wrapper = styled.nav<{ show?: boolean }>`
  transition: all 0.5s linear;
  > :not(:first-child) {
    margin-top: 16px;
  }
  ${(p) =>
    p.show
      ? css`
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          transform: scale(1.1);
          pointer-events: none;
        `}
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

const MobileMenu: React.FC<Props> = (props) => {
  const { show, ...rest } = props;
  return (
    <Wrapper {...rest} show={show}>
      {ROUTES.map(({ label, path }, index) => (
        <MobileMenuItem key={index} label={label} path={path} />
      ))}
    </Wrapper>
  );
};

export default MobileMenu;
