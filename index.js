var recipes = {}

function updateObjectWithKeyAndValue(thing, key, value){
  var newThing = Object.assign({}, thing)
  Object.assign(newThing, {[key]: value})
  return newThing
}

