import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import HomeComponent from './components/Home';
let Container = styled.div`
  display:flex;
  flex-direction : column;
  align-items:center;
  margin: 30px 0 10px;
 
`;
function App() {
  return (
   <Container>
      <Title/>
      <HomeComponent/>
      </Container>   
   
   
  );
}

export default App;
