import { Banner, Heading, Text, Link } from './StyledBanner';

export default () => (
  <Banner>
    <Heading>Covid-19 Monitoring App</Heading>
    <Text>Data sources from <Link href="https://covid19.mathdro.id/api" target="_blank">mathdro.id</Link>.</Text>
  </Banner>
);