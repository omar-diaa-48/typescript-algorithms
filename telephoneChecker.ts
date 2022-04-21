const regex = /^1{0,1}\s*(\([0-9]{3}\)|[0-9]{3})[\s-\s]*[0-9]{3}[\s-\s]*[0-9]{4}$/;

function telephoneCheck(str:string) {
  return regex.test(str)
}

console.log(telephoneCheck("555-555-5555"));