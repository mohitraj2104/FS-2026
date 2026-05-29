let obj = {
    name:"student",
    course: "FDS",
    accountBalance:10000,
    get balance(){
        console.log(this.accountBalance);
    },
    set updateBalance(value){
        this.accountBalance=value;
    }
}
obj.supdateBalance= 50000
obj.balance
console.log(obj.name)
obj.name='new student';
console.log(obj.name)