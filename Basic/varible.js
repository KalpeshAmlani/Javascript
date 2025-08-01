const accountId = 12345;
let accountName = "John Doe"
var accountBalance = 1000.00 // Dont use var, prefer let or const, Var is function scoped(its change as per function) and can lead to unexpected behavior.
accountCity = "New York"
let accountState;
// accountId = "67890"; // Reassigning accountId

accountName = 'KAlpesh Amlani' // Reassigning accountName is allowed
accountBalance = 1500.00 // Reassigning accountBalance is allowed
accountCity = "Los Angeles" // Reassigning accountCity is allowed
console.table([accountId, accountName, accountBalance, accountCity,accountState]);