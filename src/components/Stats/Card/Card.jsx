import { 
  CardTitle,
  CardComponent,
  CardData
} from './StyledCard';
import CountUp from 'react-countup';

const Card = ({
  value,
  cardTitle,
  cardTitleClass
}) => {
  return (
    <CardComponent>
      <CardData className={cardTitleClass}>
        <CountUp 
          start={0}
          end={value}
          duration={2.75}
          separator=","
        />
      </CardData>
      <CardTitle>{cardTitle}</CardTitle>
    </CardComponent>
  )
}

export default Card;
