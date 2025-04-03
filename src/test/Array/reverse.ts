const reverseTest = (targetStr) => {
  const targetList = Array.from(targetStr) // 避免split导致的unicode编码问题
  let finalStr = ''
  for (let i = targetList.length -1; i >= 0; i--) {
    finalStr += targetList[i]
  }
  return finalStr
}

console.log(reverseTest('hello 😄😭 world'))