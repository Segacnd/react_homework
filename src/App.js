import React, { useState } from "react";
import styled from "styled-components";
import index from './styled/index.css'

const ProgressBar = styled.div`
  width: 250px;
  height: 50px;
  border: 1.3px solid black;
  border-radius: 6px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.prop ? props.prop + '%' : '0%'};
  height: 51px;
  background-color: red;
`;

const Input = styled.input`
  width: 99px;
  height: 25px;
  padding: 4px 6px;
  border: 1.3px solid black;
  border-radius: 6px;
  margin: 10px 0;
`;

const NameInput = styled(Input)`
  width: 128px;
`


function App() {
  const [inputValue, setInputValue] = useState('')

  const [value, setValue] = useState(0)
  function changeValue(e) {
    const currentValue = e.target.value;
    if (!Number.isFinite(currentValue) && currentValue >= 0 && currentValue <= 100) {
      setValue(e.target.value)
    }
  }


  const list = ['Vasya', 'Grisha', 'Misha', 'Petya', 'Kolya']

  const getName = list.filter(elem => { return elem.toLowerCase().includes(inputValue.toLowerCase()) }).join(' ')

  const [searchType, setSearchType] = useState('immediately');

  function handleSearch(e) {

    switch (searchType) {
      case 'immediately': setInputValue(e.target.value); break;
      case 'delay': setTimeout(() => setInputValue(e.target.value), 2000); break;
    }
  }

  const handleOnChangeSearchType = (e) => {
    setSearchType(e.target.value)
  };

  const keyDown = (event) => {
    if (event.key === 'Enter' && searchType == 'press') {
      setInputValue(event.target.value)
    }
  }

  return (
    <div>

      <ProgressBar>
        <Progress prop={value}>

        </Progress>
      </ProgressBar>
      <Input
        type='text'
        placeholder="Enter progress..."
        value={value}
        onChange={changeValue}
      />
      <div className="secondTask">

        <h3>{getName}</h3>

        <NameInput
          type={'text'}
          onKeyDown={keyDown}
          onChange={handleSearch}
        />
        <label >
          <input type='radio' name='searchType' value='immediately' checked onChange={handleOnChangeSearchType} />
          immediately
        </label>
        <label>
          <input type={'radio'} name='searchType' value='delay' onChange={handleOnChangeSearchType} />
          With delay 2 sec
        </label>
        <label>
          <input type={'radio'} value="press" name='searchType' onChange={handleOnChangeSearchType} />
          Press
        </label>

      </div>

    </div>
  );
}

export default App;
