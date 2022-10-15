Task

You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`


const helloWorld = () => {
//   this element param, cant be string
//   return 'Hello, World!'
//   use fromCharCode
  return String.fromCharCode(72,101,108,108,111,44,32,87,111,114,108,100,33)
};