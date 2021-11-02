import { styled, keyframes } from '@stitches/react';

export const Heading = styled('h1', {
  fontSize: "6em",
});

const fade = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

export const Banner = styled('div', {
  marginTop: "80px",
  height: "100vh",
  animation: `${fade} 1s`
});

export const Text = styled('h3', {
  fontSize: '1.625em',
  fontWeight: "300"
});

export const Link = styled('a', {
  color: "#00a8ff",
  textDecoration: "none",
  borderBottom: "1px solid transparent",
  transition: "border .3s",
  fontWeight: "400",

  "&:hover": {
    borderBottom: "1px solid #00a8ff"
  }
});