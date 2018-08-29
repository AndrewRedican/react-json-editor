export default {
  format: "{reason} at line {line}",
  types: {
    colon: "colon",
    key: "key",
    value: "value",
    number: "number",
    string: "string"
  },
  invalidToken: {
    sequence: {
      prohibited: "'{firstToken}' token cannot be followed by a '{secondToken}' token",
      permitted: "'{firstToken}' token can only be followed by '{secondToken}' token"
    },
    typesSequence: {
      prohibited: "A {firstType} cannot be followed by a {secondType}.",
      permitted: "A {firstType} can only be followed by a {secondType}."
    },
    double: "'{token}' token cannot be followed by another '{token}' token",
    whitelist: "'{firstToken}' token can only follow '{secondToken}' token",
    useInstead: "'{badToken}' token is not accepted. Use '{goodToken}' instead",
    unexpected: "Unexpected '{token}' token found"
  },
  brace: {
    curly: {
      missingOpen: "Missing '{' open curly brace",
      missingClose: "Open '{' curly brace is missing closing '}' curly brace",
      cannotWrap: "'{token}' token cannot be wrapped in '{}' curly braces"
    },
    square: { 
      missingOpen: "Missing '[' open square brace", 
      missingClose: "Open '[' square brace is missing closing ']' square brace",
      cannotWrap: "'{token}' token cannot be wrapped in '[]' square braces"
    }
  },
  string: {
    missingOpen: "Missing/invalid opening string '{quote}' token",
    missingClose: "Missing/invalid closing string '{quote}' token",
    mustBeWrappedByQuotes: "Strings must be wrapped by quotes",
    nonAlphanumeric: "Non-alphanemeric token '{token}' is not allowed outside string notation",
    unexpectedKey: "Unexpected key found at string position"
  },
  key: {
    numberAndLetterMissingQuotes: "Key beginning with number and containing letters must be wrapped by quotes",
    spaceMissingQuotes: "Key containing space must be wrapped by quotes",
    unexpectedString: "Unexpected string found at key position"
  },
  noTrailingOrLeadingComma: "Trailing or leading commas in arrays and objects are not permitted"
};