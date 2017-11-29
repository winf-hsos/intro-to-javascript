/* Another important data structure is the object */

var person = {
    firstname: "Chuck",
    lastname: "Norris"
};
console.log(person.firstname);

/*
 * An object can contain arrays as well
 */

var studentObj = {
    firstname: "Michael",
    email: "michael@hs-osnabrueck.de",
    courses: ["Digitization", "Data Management & BI", "Business Information Systems"],
};

// An array has a forEach-method
studentObj.courses.forEach(
    // This an anonymous function - it has no name
    function(course) {
        console.log(course);
    });

// Another way to iterate through Michael's courses
for (var i = 0; i < studentObj.courses.length; i++) {
    console.log(studentObj.courses[i]);
}


/* Objects can be nested */

var nestedObj = {
    name: "Michael",
    address: {
        street: "Sesame Street",
        no: 1,
        zipcode: 1010
    }
}

console.log(nestedObj.address.street);

process.exit(0);
