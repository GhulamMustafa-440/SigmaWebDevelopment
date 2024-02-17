class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
        //   console.log(name);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("");
//   console.log(user); // John

user.name = "Harry" // Name is too short.
console.log(user.name)
// user = new User("qw");
// console.log(user);