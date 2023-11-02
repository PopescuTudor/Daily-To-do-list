import styled from 'styled-components'

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        <Title>
          {props.children}
        </Title>

      </Card>
    </Background>
  )
}

export default Layout;

const Background = styled.div`
  background: #F5F9FF;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 1000px;
  height: 670px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 42px;
`;

const Title = styled.span`
  color: #11175E;
  font-family: 'Rubik';
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-left: 200px;
`;