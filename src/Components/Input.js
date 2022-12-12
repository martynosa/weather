import React from 'react';
import { useRef } from 'react';

export default function Input({ setLocation }) {
  const inputEl = useRef();

  const clickHandler = () => {
    setLocation(inputEl.current.value);
    inputEl.current.value = '';
  };

  return (
    <div className="input-group">
      <input
        ref={inputEl}
        type="text"
        className="input"
        placeholder="Location..."
      />
      <button className="button" type="button" onClick={clickHandler}>
        Show
      </button>
    </div>
  );
}
