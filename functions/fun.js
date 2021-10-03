function readData(path) {
    fetch(path)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data;
    })
    .catch((err) => {
        return `<h1>${err}</h1>`
    })
}

module.exports.handler = {
    readData:readData
}