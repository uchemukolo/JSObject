class Account{
    constructor(name, BVN, balance, acctType){
        this.name = name;
        this.BVN = BVN;
        this.balance = balance;
        this.acctType = acctType;
        this.records = records;
    }

    static createRecord(BVN, name, balance, acctType){
        var records = new Map();
        this.records = records.set(BVN, [balance, name, acctType]);
        return records;
    }

    static deposit(BVN, amount, name, acctType){
        if (this.records.has(BVN)) {
            var newBalamce = this.records.get(BVN)[0] + amount;
            this.records = this.records.set(BVN, [newBalamce, name, acctType]);
            return this.records; 
        }
    }

    static withdraw(BVN, amount, name, acctType){
        if (this.records.has(BVN)) {
            if (this.balance > this.minimumBalance) {
                var newBalamce = this.records.get(BVN)[0] - amount;
                this.records = this.records.set(BVN, [newBalamce, name, acctType]);
                return this.records;        
            }
        }
    }
}

class SavingsAccount extends Account{
    constructor(openingBalance, minimumBalance){
        super();
        this.openingBalance = openingBalance;
        this.minimumBalance = 500;
        this.acctType = "Savings"; 
    }
}

class CurrentAccount extends Account{
    constructor(openingBalance, minimumBalance){
        super();
        this.openingBalance = openingBalance;
        this.minimumBalance = 0;
        this.acctType = "Current";
    }
}

console.log(SavingsAccount.createRecord(1234, "Uche M.", 100000000000));
console.log(SavingsAccount.deposit(1234, 200, "Uche M."));
console.log(SavingsAccount.withdraw(1234, 600, "Uche M."));