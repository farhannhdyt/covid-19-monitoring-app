import { CountryPicker } from "..";
import Card from "./Card/Card";
import { Flex, GlobalStats, Heading, LastUpdate, StatsWrapper } from "./StyledStats";

const Stats = ({ handleCountryChange, data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <StatsWrapper>
      {/* Global Cases */}
      <GlobalStats>
        <Heading>Stats Overview</Heading>
        <LastUpdate>Last Update: <b>{ new Date(lastUpdate).toDateString() }</b></LastUpdate>
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Flex>
          <Card cardTitle="Total Confirmed" value={confirmed.value} />
          <Card cardTitle="Total Recovered" value={recovered.value} />
          <Card cardTitle="Total Deaths" value={deaths.value} />
        </Flex>
      </GlobalStats>
    </StatsWrapper>
  )
}

export default Stats
