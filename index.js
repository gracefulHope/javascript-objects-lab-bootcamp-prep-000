var recipes = {}

function updateObjectWithKeyAndValue(thing, key, value){
  Object.assign(thing, {[key]: value})
  return thing
}

