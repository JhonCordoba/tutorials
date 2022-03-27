var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Human.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Human;
}());
var myHuman = new Human("Jhon", "Cordoba");
console.log(myHuman.getFullName());
