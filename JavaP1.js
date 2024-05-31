const person = {
    balance: 100,
}

function withdraw(person, withdraw_amount){
    if (withdraw_amount > person.balance) {
        console.log ("Withdrawl cannot be processed due to insufficent funds.");
    }
    else person.balance -= withdraw_amount;
         console.log ("Updated balance property:" + person.balance, "$");
}
withdraw(person, 120)
