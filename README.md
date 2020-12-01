# minelev-document-converter

Converts new document type back into old document type. This allows for a smoother transition from old to new

## Usage

**Maybe something about where to get this package from?**

```javascript
const convert = require('minelev-document-converter');

const oldDocument = convert(newDocument, 'nb');
```

## Differences

The following properties will not be given back with the old document, because they are not used anywhere..

* minElevVersion
* skjemaUtfyllingStop
* userAgent