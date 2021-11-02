import React from 'react';
import './global.css';
import { Header, Banner, Stats, Chart } from './components';
import { globalStyles, Container, Footer } from './StyledApp';
import { fetchAPI } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedAPI = await fetchAPI();
    this.setState({ data: fetchedAPI });
  }

  handleCountryChange = async (country) => {
    const data = await fetchAPI(country);
    this.setState({ data, country });
  };

  render() {
    globalStyles();
    const { data, country } = this.state;

    return (
      <>
        <Header />
        <Container>
          <Banner className="flex-item" />
          <Stats data={data} handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />

          <Footer>{new Date().getFullYear()}</Footer>
        </Container>
      </>
    );
  }
}

export default App;
