import { styled, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif"
  },
  '::selection': {
    backgroundColor: "#000",
    color: "#fff"
  }
});

export const Container = styled('div', {
  maxWidth: "900px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
});

export const Footer = styled('p', {
  textAlign: 'center',
  padding: "25px",
  color: "#999"
});