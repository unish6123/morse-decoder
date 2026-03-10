const ActionButtons = ({ onDecode, onClear, onCopy, copied }) => {
  return (
    <div className="buttons">
      <button className="primary" onClick={onDecode}>⬡ Decode</button>
      <button onClick={onClear}>✕ Clear</button>
      <button className={copied ? 'copied' : ''} onClick={onCopy}>
        {copied ? '✓ Copied!' : '⎘ Copy Output'}
      </button>
    </div>
  )
}

export default ActionButtons