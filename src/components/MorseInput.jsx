const MorseInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="morse-input">Morse Input</label>
      <textarea
        id="morse-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter Morse code here... (e.g. .... . .-.. .-.. ---)"
        rows={6}
      />
    </div>
  )
}

export default MorseInput