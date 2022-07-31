import React from 'react';

export default function ClickCounter({ clicks }) {
  return clicks > 0 ? (
    <p className="clicks-counter">{clicks}</p>
  ) : (
    <p className="clicks-counter">&nbsp;</p>
  );
}
