import styled from 'styled-components'

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
          {props.children}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;


