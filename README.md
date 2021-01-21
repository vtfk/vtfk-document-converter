[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# @vtfk/minelev-document-converter

Converts new document type back into old document type. This allows for a smoother transition from old to new

## Installation

```bash
npm i @vtfk/minelev-document-converter
```

## Usage 

Import the module
Then call it with the document object and the language you want for the old document


```javascript
const convert = require('@vtfk/minelev-document-converter');

const oldDocument = convert(newDocument, 'nb');
```

## Differences

The following properties will not be given back with the old document, because they are not used anywhere..

* minElevVersion
* skjemaUtfyllingStop
* userAgent
