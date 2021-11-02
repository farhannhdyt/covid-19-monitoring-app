import { styled } from '@stitches/react';

export const CountryWrappper = styled('div', {
  marginTop: "40px"
});

export const Select = styled('select', {
  width: "25rem",
  padding: "12px 20px",
  border: "1px solid #e2e2e2",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.2s",
  outline: "none",
  fontSize: "15px",

  "&:hover": {
    border: "1px solid #000"
  },

  "&::expand": {
    display: "none"
  }
});