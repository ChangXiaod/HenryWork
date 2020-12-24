function together(name){
  return `Hello ${name}`
}
function showAge(age){
  console.log(`他 ${age} 岁`)
}
module.exports.together = together
module.exports.showAge = showAge