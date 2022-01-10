const jsontoxml = require('jsontoxml')
module.exports = jsToXml((data, tagSingular, tagPlural) => {
    let tag = tagSingular
    return jsontoxml({
        [tag]: data
    })
})