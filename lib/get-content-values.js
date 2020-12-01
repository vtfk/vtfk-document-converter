module.exports = (list, lang) => {
    return list.reduce((previous, next) => {
        if (previous === '') return next[lang];
        else return `${previous}\n${next[lang]}`;
    }, '');
}