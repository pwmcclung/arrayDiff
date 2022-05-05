function arrayDiff(a, b) {
  if (a.length===0) {return []}
  if (b.length===0){return a}
  let result = []
  a.forEach( function included(element){
    if(!b.includes(element)){return result.push(element)}
  })
  return result
}
