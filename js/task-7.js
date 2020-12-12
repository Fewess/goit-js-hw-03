const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


const account = {
    balance: 0,
    
    transactions: [],

  createTransaction(amount, type) { 
    return {
      id: Date.now(),
      type,
      amount,
    };
    },
      
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(transaction);
    this.balance += amount;

     },
      
  withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
      console.log('Bad amount');
        return;
        
      }
    if (amount > this.balance) {
      console.log('Снятие такой суммы не возможно, недостаточно средств.');
      return;
         }  
    
    const transaction = this.createTransaction(amount, Transaction.withdraw);
    this.transactions.push(transaction);
    this.balance -= amount;
     },
    
  getBalance() {
    return this.balance;
     },
    
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id !== transaction.id) continue;

      return transaction;
    }
    return null;
     },
     
  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (type !== transaction.type) continue;
      
      sum += transaction.amount;
    }

    return sum; 
  }
};

console.log(account.getBalance());

account.deposit(1200);
console.log(account.getBalance());