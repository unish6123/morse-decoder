import { MORSE_MAP } from '../data/morseMap';

//flag any chars that aren't . - space 
export function validateInput(raw) {
  const invalid = [...new Set(raw.split('').filter(c => !/[.\- \n]/.test(c)))];
  return invalid;
}

// if the new line exists it merges them with 3 extra spaces.  
export function normalizeInput(raw) {
  return raw
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('   '); 
}

// first splits by word and second by characters
export function tokenize(normalized) {
  return normalized
    .split(/\s{3,}/)            // 3+ spaces word boundary
    .map(word => word.split(' ').filter(t => t.length > 0)); // splits by characters
}

// Decodes the individual token by looking at morseMap hashmap. 
export function decodeToken(token) {
  if (!token) 
    return '';
  const clean = token.replace(/[^.\-]/g, ''); // strip any surviving bad chars
  return MORSE_MAP[clean] ?? '?';
}

// Joins the decoded characters
export function decodeWords(words) {
  return words
    .map(word => word.map(decodeToken).join(''))
    .join(' ');
}

// Returns { output, warnings }
// if there were invalid characters it will show in a output & if it didni't find in the look up it will give "?"
export function decodeMorse(raw) {
  const invalidChars = validateInput(raw);
  const warnings = invalidChars.length > 0
    ? [`Invalid characters ignored: ${invalidChars.map(c => JSON.stringify(c)).join(', ')}`]
    : [];

  const normalized = normalizeInput(raw);
  const words = tokenize(normalized);
  const output = decodeWords(words);

  // Warn about unknown tokens (?)
  const hasUnknown = output.includes('?');
  if (hasUnknown) warnings.push('Some tokens were unrecognized and decoded as "?"');

  return { output, warnings };
}