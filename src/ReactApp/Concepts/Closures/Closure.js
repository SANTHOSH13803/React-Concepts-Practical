function Bank() {
  let accountBalance = 0;

  function addBalance(balacneAmount = 0) {
    accountBalance += balacneAmount;
  }

  function getBalance() {
    console.log(accountBalance);
    return accountBalance;
  }

  function withDrawBalance(amount = 0) {
    if (accountBalance >= amount) {
      accountBalance -= amount;
      console.log(accountBalance);
      return accountBalance;
    }
    console.log("NO enough balance");
    return "No Enough balance";
  }

  return {
    addBalance,
    getBalance,
    withDrawBalance
  };
}

const user1 = Bank();
// we can access the accountBalance event after the above function execution
user1.getBalance();
user1.addBalance(500);
user1.withDrawBalance(600);
user1.getBalance();

// output :

// 0
// 500
// NO enough balance
// 500

// ------------------------Theory ------------------------

// Defination
// A closure is created when an inner function remembers variables from its
// outer function scope, even after the outer function has completed execution.

// Trap question :

// Q. outer function finshed by why count still exits
// Ans. Closure preserved scope
