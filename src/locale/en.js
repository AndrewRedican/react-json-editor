export default {
  format: "{reason} at line {line}",
  symbols: {

    colon: "colon",           // :
    comma: "comma",           // ,  ،  、
    semicolon: "semicolon",   // ;
    slash: "slash",           // /  relevant for comment syntax support
    backslash: "backslash",   // \  relevant for escaping character
    brackets: {
      round: "round brackets",   // ( )
      square: "square brackets", // [ ]
      curly: "curly brackets",   // { }
      angle: "angle brackets"    // < >
    },
    period: "period",            // . Also known as full point, full stop, or dot
    /**
     * See https://en.wikipedia.org/wiki/Quotation_mark
     * Should we accept different forms of ' and " quotes to identify string literals: ‘ ’  “ ”  
     */
    quotes: {
      single: "single quote", 
      double: "double quote",
      grave: " grave accent" // ` used on Javascript ES6 Syntax for String Templates
    },
    space: "space",           //       
    ampersand: "ampersand",   //	&
    asterisk: "asterisk",     //	*  relevant for some comment sytanx
    at: "at sign",            //	@  multiple uses in other coding languages including certain data types
    equals: "equals sign",    //	=
    hash: "hash",             //	#
    percent: "percent",       //	% 
    plus: "plus",             //	+
    minus: "minus",           //	−
    dash: "dash",
    hyphen: "hyphen",
    tilde: "tilde",           //	~
    underscore: "underscore", //	_
    bar: "vertical bar",      //	|
  },
  types: {
    key: "key",
    value: "value",
    number: "number",
    string: "string",
    //... Reference: https://en.wikipedia.org/wiki/List_of_data_structures
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