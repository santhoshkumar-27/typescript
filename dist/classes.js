var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var obDb = /** @class */ (function () {
    function obDb(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeAbleName = this.firstName;
    }
    obDb.prototype.changeUnChangeAbleName = function () {
        // this.unChangeAbleName = 'foold'; we can't assign because it's only read only property
    };
    obDb.prototype.getElement = function () {
        return this.firstName + ' ' + this.lastName;
    };
    obDb.maxAge = 50;
    return obDb;
}());
var sant = new obDb('santhosh', 'kumar');
console.log(sant.getElement());
// console.log(sant.firstName) because it's private only 
// console.log(obDb.maxAge) it only access by the object not instance
var dbDb = /** @class */ (function (_super) {
    __extends(dbDb, _super);
    function dbDb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dbDb.prototype.setWriter = function (writer) {
        this.writers = writer;
    };
    dbDb.prototype.getWriter = function () {
        return this.writers;
    };
    return dbDb;
}(obDb));
var newUser = new dbDb('foo', 'badd');
console.log(newUser.getElement());
newUser.setWriter('emotion');
console.log(newUser.getWriter());
console.log(newUser.getElement());
