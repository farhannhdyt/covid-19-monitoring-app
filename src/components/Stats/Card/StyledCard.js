import { styled } from '@stitches/react';

export const CardComponent = styled('div', {
    width: "18rem",
    height: "auto",
    border: "1px solid #e2e2e2",
    borderRadius: "6px",
    padding: "50px",
    lineHeight: "40px",
    textAlign: 'center',
    margin: "50px auto",
    backgroundColor: "#FAFAFA"
});

export const CardTitle = styled('h3', {
  fontWeight: "400",
  fontSize: "20px",
  color: "#666666"
});

export const CardData = styled('h1', {
  fontSize: "30px",
  marginBottom: "10px",

  "&.confirmed-data": {
    color: "#F6AD55"
  },
  "&.recovered-data": {
    color: "#68D391"
  },
  "&.deaths-data": {
    color: "#F56565"
  }
});