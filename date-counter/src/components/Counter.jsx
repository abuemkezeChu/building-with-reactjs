import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const date = new Date()
  date.setDate(date.getDate() + count)

  const handleReset = () => {
    setCount(0)
    setStep(1)
  }

  return (
    <>
      <div>
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="10"
          value={step}
          onChange={event => setStep(Number(event.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount(count => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={event => setCount(Number(event.target.value))}
        />
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  )
}

export default Counter
