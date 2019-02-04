import React from 'react'

export default function SampleComponent({ sample, sampleAction }) {
  const handleClick = () => sampleAction(true)
  return (
    <div>
      <div>Sample value: {String(sample)}</div>
      <div>
          <button onClick={handleClick}>Change Sample Value!</button>
      </div>
    </div>
  )
}
