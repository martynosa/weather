import React from 'react';
import { useRef } from 'react';

export default function Input({ setLocation }) {
  const inputEl = useRef();

  return (
    <div className="group">
      <input
        ref={inputEl}
        type="text"
        className="input"
        placeholder="Location..."
      />
      <button
        className="button"
        type="button"
        onClick={() => setLocation(inputEl.current.value)}
      >
        Show
      </button>
    </div>
  );
}
