import VirusPNG from '../../imgs/virus.png';
import { Header, Wrapper, Img, Links } from './StyledHeader';

export default () => (
  <Header>
    <Wrapper className="wrapper">
      <div className="logo">
        <Img src={VirusPNG} alt="Virus Image" />
      </div>

      <div className="nav">
        <Links href="#" target="_blank">Github</Links>
      </div>
    </Wrapper>
  </Header>
);