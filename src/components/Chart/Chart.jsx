import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import { ChartWrapper } from './StyledChart';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [ dailyData, setDailyData ] = useState([]);
  useEffect(() => {
    const fetchedDailyDataAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchedDailyDataAPI();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line 
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            backgroundColor: "#3333ff",
            fill: true
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            backgroundColor: 'red',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
          }]
        }}
      />
    ) : null
  );

  const barChart = (
    confirmed ? (
      <Bar 
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value]
            }
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` }
        }}
      />
    ) : null
  );

  return (
    <ChartWrapper>
      { country ? barChart : lineChart }
    </ChartWrapper>
  )
}

export default Chart
