import MorseInput from './components/MorseInput'
import DecodedOutput from './components/DecodedOutput'
import ActionButtons from './components/ActionButtons'
import useMorseDecoder from './hooks/useMorseDecoder'
import './app.css'

const App = () => {
  const { input, setInput, output, copied, handleDecode, handleClear, handleCopy } = useMorseDecoder()

  return (
    <div className="container">
      <div className="noise" />
      <header>
        
        <h1>MORSE<span className="accent">.</span>DECODE</h1>
        <p className="subtitle">Translate dots & dashes into plain text</p>
      </header>

      <main>
        <div className="panel">
          <div className="panel-label">
            <span className="dot-indicator" />
            INPUT TRANSMISSION
          </div>
          <MorseInput value={input} onChange={setInput} />
        </div>

        <ActionButtons
          onDecode={handleDecode}
          onClear={handleClear}
          onCopy={handleCopy}
          copied={copied}
        />

        <div className="panel">
          <div className="panel-label">
            <span className="dot-indicator active" />
            DECODED OUTPUT
          </div>
          <DecodedOutput output={output} />
        </div>
      </main>

      <footer>
        <span>· · · — — — · · ·</span>
      </footer>
    </div>
  )
}

export default App