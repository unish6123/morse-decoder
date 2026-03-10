# MORSE.DECODE

A clean, fast Morse code interpreter built with React. Paste any Morse code and instantly decode it into plain text. Deployed on Firebase Hosting.

---

## What It Does

- Paste Morse code into the input area
- Click **Decode** to translate it into plain text
- Supports letters (A–Z), numbers (0–9), and common punctuation
- Handles single-space letter boundaries and three-space word boundaries
- Newlines are treated as word breaks
- Unknown Morse patterns decode to `?` instead of crashing

---

## Tech Stack

- **React 18** — UI
- **Vite** — build tool
- **Firebase Hosting** — deployment

---

## Local Setup

### Prerequisites



### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/morse-decoder.git
cd morse-decoder
```

Install dependencies:

```
npm install
```

---

## Running Locally

```
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

---

## How to Deploy to Firebase Hosting

### Step 1 — Install Firebase CLI

```
npm install -g firebase-tools
```

### Step 2 — Login to Firebase

```
firebase login
```

This will open a browser window. Sign in with your Google account.

### Step 3 — Build the app

```
npm run build
```

This generates a `dist/` folder with your production-ready app.

### Step 4 — Initialize Firebase (first time only)

```
firebase init hosting
```

When prompted:
- Select your Firebase project
- Set public directory to: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds with GitHub: `No`
- Overwrite `dist/index.html`: `No`

### Step 5 — Deploy

```
firebase deploy
```

Your app will be live at:

```
https://YOUR_PROJECT_ID.web.app
```

---

## Input Format

| Spacing | Meaning |
|---|---|
| Single space | Separates letters |
| Three spaces | Separates words |
| Newline | Treated as a word break |

### Examples

```
.... . .-.. .-.. ---                        → HELLO
.... . .-.. .-.. ---   .-- --- .-. .-.. -.. → HELLO WORLD
... --- ...                                 → SOS
.... . -.--   .--- ..- -.. .               → HEY JUDE
```

---

## Project Structure

```
morse-decoder/
├── src/
│   ├── data/
│   │   └── morseMap.js         # Morse → character dictionary
│   ├── utils/
│   │   └── morseParser.js      # All decoding logic
│   ├── hooks/
│   │   └── useMorseDecoder.js  # React state management
│   ├── components/
│   │   ├── MorseInput.jsx      # Input textarea
│   │   ├── DecodedOutput.jsx   # Output display
│   │   └── ActionButtons.jsx   # Decode / Clear / Copy
│   ├── App.jsx                 # Root component
│   ├── app.css                 # Styles
│   └── main.jsx                # Entry point
├── firebase.json
├── .firebaserc
└── README.md
```

---

## Parsing Approach

Input goes through a 4-step pipeline — all pure functions with no React dependency:

1. **Normalize** — trim whitespace, convert newlines into 3-space word boundaries
2. **Tokenize** — split by 3+ spaces to get words, then by single space to get individual tokens
3. **Decode** — look up each token in the Morse dictionary
4. **Reassemble** — join letters with no space, join words with a single space

---

*· · · — — — · · ·*
