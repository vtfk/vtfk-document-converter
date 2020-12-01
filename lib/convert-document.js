//const logger = require('./logger');
const oldDocument = require('./convert-to-old-document');

module.exports = (data, language) => {
    const documentType = data.type === 'samtale' ? data.type : `${data.type}-${data.variant}`;
    let oldDocumentTemplate = oldDocument(data);
    //logger('info', ['convert-document-type', data.type, 'finish']);
    console.log('convert-document', 'convert-document-type', data.type, 'finish')
    if (data.type !== 'notat') {
        oldDocumentTemplate = { ...oldDocumentTemplate, ...require(`./convert-content-${documentType}`)(data.content, language) };
        //logger('info', ['convert-document', documentType, 'finish']);
        console.log('convert-document', 'convert-document', documentType, 'finish')
    }
    
    return oldDocumentTemplate;
}
