import { useState } from 'react'
import { decodeMorse } from '../utils/morseParser'

const useMorseDecoder = () => {
  const [input, setInput]   = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  function handleDecode() {
  const { output: decoded } = decodeMorse(input)
  setOutput(decoded)
}

  function handleClear() {
    setInput('')
    setOutput('')
    setCopied(false)
  }

  function handleCopy() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return { input, setInput, output, copied, handleDecode, handleClear, handleCopy }
}

export default useMorseDecoder