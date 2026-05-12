import React from 'react';

export default function RequestActions({ onAccept, onDecline }) {
  return (
    <div className="request-actions">
      <button onClick={onAccept}>Accept</button>
      <button onClick={onDecline}>Decline</button>
    </div>
  );
}
