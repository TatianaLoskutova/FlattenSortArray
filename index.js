function flattenAndSort(array) {
    let res = [];
    array.forEach(el => {
        if (Number.isInteger(el)) {
            res.push(el)
        } else if (Array.isArray(el) && el.length) {
            res = [...res, ...el]
        }
    })
    return res.sort((a, b) => a - b)
}