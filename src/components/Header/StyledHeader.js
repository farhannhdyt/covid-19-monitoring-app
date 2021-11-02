import { keyframes, styled } from '@stitches/react';

export const Header = styled("header", {
  maxWidth: "100%",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
  position: "sticky",
  top: "0",
  zIndex: "1",
});

export const Wrapper = styled('div', {
  '&.wrapper': {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '900px',
    margin: 'auto',
  }
});

const spin = keyframes({
  "100%": { transform: 'rotate(360deg)' }
});

export const Img = styled('img', {
  width: '50px',
  animation: `${spin} 5s linear infinite`
});

export const Links = styled('a', {
  color: "#000",
  textDecoration: "none",
  borderBottom: "1px solid transparent",
  transition: "border .3s ease",

  "&:hover": {
    borderBottom: "1px solid #000"
  }
});