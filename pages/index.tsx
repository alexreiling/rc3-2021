import type { NextPage } from 'next'
import Head from 'next/head'
import {
  UIEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import Background from "../components/Background";
import MenuOverlay from "../components/MenuOverlay";
import PageTitle from "../components/PageTitle";
import TerminalWindow from "../components/TerminalWindow";
import { horizontalContentPadding } from "../styles/mixins/pageContent";
import {
  pagePaddingBottom,
  pagePaddingTop,
} from "../styles/mixins/pagePadding";

const COPY = {
  title: "welcome to rc3\nnow/here",
};
const TERMINALS = {
  world: {
    title: "world",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est sunt laboriosam iusto commodi optio omnis officia exercitationem cum recusandae in nisi nobis, praesentium similique earum obcaecati. Fugit, excepturi ad?",
    link: {
      label: "explore",
      href: "https://google.com",
    },
  },
  platform: {
    title: "platform",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est sunt laboriosam iusto commodi optio omnis officia exercitationem cum recusandae in nisi nobis, praesentium similique earum obcaecati. Fugit, excepturi ad?",
  },
  community: {
    title: "community",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est sunt laboriosam iusto commodi optio omnis officia exercitationem cum recusandae in nisi nobis, praesentium similique earum obcaecati. Fugit, excepturi ad?",
    link: {
      label: "explore",
      href: "https://google.com",
    },
  },
};

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);
  const [relativeVerticalScroll, setRelativeVerticalScroll] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleContentScroll: UIEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const { scrollHeight, clientHeight, scrollTop } = e.currentTarget;
      setRelativeVerticalScroll(scrollTop / (scrollHeight - clientHeight));
    },
    []
  );

  return (
    <Wrapper>
      <Head>
        <title>RC3 demo page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background verticalScrollProgress={relativeVerticalScroll} />

      <MenuOverlay
        open={menuOpen}
        onChangeOpen={setMenuOpen}
        onHeaderHeightChange={setHeaderHeight}
      />

      <PageContent
        blur={menuOpen}
        ref={contentRef}
        onScroll={handleContentScroll}
      >
        <ShadowHeader height={headerHeight} />
        <PageTitle>{COPY.title}</PageTitle>
        <TerminalWindow title={TERMINALS.world.title}>
          <div>{TERMINALS.world.text}</div>
          <a className="terminal-window__cta" href={TERMINALS.world.link.href}>
            {TERMINALS.world.link.label}
          </a>
        </TerminalWindow>
        <TerminalWindow title={TERMINALS.platform.title}>
          <div>{TERMINALS.platform.text}</div>
        </TerminalWindow>
        <TerminalWindow title={TERMINALS.community.title}>
          <div>{TERMINALS.community.text}</div>
          <a
            className="terminal-window__cta"
            href={TERMINALS.community.link.href}
          >
            {TERMINALS.community.link.label}
          </a>
        </TerminalWindow>
      </PageContent>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  max-height: 100%;
`;

const PageContent = styled.main<{ blur?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 100%;
  height: 100vh;
  width: 100%;
  transition: all 0.5s linear;
  overflow: scroll;

  ${pagePaddingTop}
  ${pagePaddingBottom}

  h1 {
    max-width: 300px;
  }
  > .terminal-window {
    ${horizontalContentPadding};
    margin-top: 24px;
  }
  ${(p) =>
    p.blur &&
    css`
      filter: blur(5px);
      transform: scale(0.98);
    `}
`;
const ShadowHeader = styled.div<{ height: number }>`
  content: "";
  height: ${(p) => p.height}px;
`;
