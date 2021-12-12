import { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  h2 {
    width: 100%;
    text-align: center;
    padding: 4px 0;
    background: white;
    color: black;
    font-weight: bold;
  }
  > .terminal-window__content {
    padding: 12px;
    display: flex;
    flex-direction: column;
    > .terminal-window__cta {
      font-family: "Changa", sans-serif;
      align-self: center;
      font-weight: bold;
      margin: 16px 0 8px;
    }
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const TerminalWindow: React.FC<Props> = (props) => {
  const { title, children, className, ...rest } = props;
  return (
    <Wrapper {...rest} className={"terminal-window " + className}>
      <h2>{title}</h2>
      <div className="terminal-window__content">{children}</div>
    </Wrapper>
  );
};

export default TerminalWindow;
