Object.defineProperty(Array.prototype, 'partitionObjectsByKey', {
  value: function(key) {
    const uniqKeyVals = [...new Set(this.map((el) => el[key]))]
    const newArr = []
    for (let keyVal of uniqKeyVals) {
      let tempArr = this.filter(el => el[key] === keyVal)
      newArr.push(tempArr)
    }
    return newArr
  }
})
