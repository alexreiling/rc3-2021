import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import {
  horizontalContentPadding,
  RELATIVE_HORIZONTAL_PADDING,
} from "../../styles/mixins/pageContent";
import Header from "../Header";
import MobileMenu from "./MobileMenu";

const Wrapper = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  max-height: 100vh;
  width: 100vw;
  padding-top: ${RELATIVE_HORIZONTAL_PADDING * 100}vw;
  z-index: 10;
  pointer-events: none;

  > * {
    ${horizontalContentPadding};
  }
  ${(p) =>
    p.open &&
    css`
      background-color: rgba(0, 0, 0, 0.75);
      height: 100vh;
    `}
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onChangeOpen: (open: boolean) => any;
  onHeaderHeightChange: (headerHeight: number) => any;
}

const MenuOverlay: React.FC<Props> = (props) => {
  const { open, onChangeOpen, onHeaderHeightChange, ...rest } = props;
  return (
    <Wrapper {...rest} open={open}>
      <Header
        open={open}
        onChangeOpen={onChangeOpen}
        onSize={({ height }) => {
          console.log(height);

          onHeaderHeightChange(height || 100);
        }}
      />
      <MobileMenu show={open} />
    </Wrapper>
  );
};

export default MenuOverlay;
