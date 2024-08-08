const obj = {
  number1: 1,
  name: "name",
  color: "color",
  city: "city",
  number2: 2,
  // arr: [{ name: "name", color: "color", city: "city" }],
  newObj: { newArr: [{ name: "name", color: "color", city: "city" }] },
};

// function stringifyObject(obj, index = 0, result = {}) {
//   const objKeys = Object.keys(obj);

//   const resultKeys = objKeys.slice(index, objKeys.length);

//   if (resultKeys.length <= 0) {
//     return result;
//   }

//   const resultKey = resultKeys[0];
//   const resultKeyValue = Reflect.get(obj, resultKey);

//   Reflect.set(result, `${ resultKey.toString() }`, resultKeyValue.toString());
//   console.log(result)

//   return stringifyObject(obj, ++index, result);
// }

const a = JSON.stringify(obj);
console.log(a);

function JSONconverter(obj) {
  let result = "";
  result += "{";

  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);

  objKeys.forEach((key, i) => {
    if (typeof objValues[i] === "string") {
      if (i === objKeys.length - 1) {
        result +=
          insertDoubleQuote(key) + ":" + insertDoubleQuote(objValues[i]);
      } else {
        result +=
          insertDoubleQuote(key) + ":" + insertDoubleQuote(objValues[i]) + ",";
      }
    }

    if (typeof objValues[i] === "number") {
      if (i === objKeys.length - 1) {
        result += insertDoubleQuote(key) + ":" + objValues[i];
      } else {
        result += insertDoubleQuote(key) + ":" + objValues[i] + ",";
      }
    }
    
    if (typeof objValues[i] === "object") {
      
    }
  });

  result += "}";
  return result;
}

function insertDoubleQuote(string) {
  let result = "";
  result += '"' + string + '"';
  return result;
}

console.log(JSONconverter(obj));
