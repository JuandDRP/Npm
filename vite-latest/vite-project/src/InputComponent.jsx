import { useState } from 'react'

const InputComponent=() => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
        <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

        
      <span>{inputValue}</span>
      </>
    );
}


export default InputComponent