class TeamMembers {
    name;
    role;
    address;
    constructor(name, role, address) {
        this.name = name;
        this.role = role;
        this.address = address;
    }


}

// new team member
class Accounts extends TeamMembers {

    accountType;

    constructor(name, role, address, accountType) {
        super(name, role, address);
        this.accountType = accountType;
    }

    createAAccount(person) {
        console.log(this.name, "open a bank account for ", person);
    }

}

// new team member

class Cashier {
    name;
    role;
    address;
    constructor(name, role, address) {
        this.name = name;
        this.role = role;
        this.address = address;
    }
    giveCash(person) {
        console.log(this.name, "give money ", student);
    }
}





const reza = new Accounts('reza', 'job seeker', 'MYM', 'Premium')
reza.createAAccount('Roman')
console.log(reza);