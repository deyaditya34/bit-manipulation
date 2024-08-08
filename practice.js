const obj = {
  name: "name",
  color: "color",
  city: "city",
};

function stringifyObject(obj, index = 0, result = {}) {
  const objKeys = Object.keys(obj);

  const resultKeys = objKeys.slice(index, objKeys.length);

  if (resultKeys.length <= 0) {
    return result;
  }
  
  const resultKey = resultKeys[0];
  const resultKeyValue = Reflect.get(obj, resultKey);

  Reflect.set(result, `${ resultKey.toString() }`, resultKeyValue.toString());
  console.log(result)

  return stringifyObject(obj, ++index, result);
}

console.log(stringifyObject(obj));
