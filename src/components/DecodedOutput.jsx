const DecodedOutput = ({ output }) => {
  return (
    <div>
      <label htmlFor="decoded-output">Decoded Output</label>
      <textarea
        id="decoded-output"
        value={output}
        readOnly
        placeholder="Decoded text will appear here..."
        rows={6}
      />
    </div>
  )
}

export default DecodedOutput