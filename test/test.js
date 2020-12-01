const convert = require('../index');

const newDocument = require('./documents/varsel-fag.json');
//const newDocument = require('./documents/varsel-atferd.json');
//const newDocument = require('./documents/varsel-orden.json');
//const newDocument = require('./documents/samtale.json');
//const newDocument = require('./documents/ikke-samtale.json');
//const newDocument = require('./documents/notat.json');
//const newDocument = require('./documents/yff....');

console.log(convert(newDocument, 'nb'));