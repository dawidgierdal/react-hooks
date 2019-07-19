import React from 'react';
import styled from 'styled-components';
import { MyResponsiveComponent } from "./components/MyResponsiveComponent";
import { SetName } from "./components/SetName";
import { GetSomeData } from "./components/GetSomeData";
import { CounterWrapper } from "./components/CounterWrapper";

const SApp = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;  
`;

function App() {
  return (
    <SApp className="App">
        <MyResponsiveComponent />
        <SetName />
        <GetSomeData />
        <CounterWrapper />
    </SApp>
  );
}

export default App;
