const findTheOldest = function(arr) {
    let year = new Date().getFullYear();
    return arr.reduce((acc, value) => {
        let ageCurrent = null;
        if(value.yearOfDeath === undefined){
            ageCurrent = year - value.yearOfBirth;
        } else{
            ageCurrent = value.yearOfDeath - value.yearOfBirth;
        }
        if(acc.yearOfDeath === undefined){
            ageOldest = year - acc.yearOfBirth;
        } else{
            ageOldest = acc.yearOfDeath - acc.yearOfBirth;
        }
        return ageOldest > ageCurrent ? acc : value;
    })
    // const getAge = function (birth, death) {
    //     if (!death) {
    //       death = new Date().getFullYear();
    //     }
    //     return death - birth;
    //   };
      
    //   const findTheOldest = function (people) {
    //     return people.reduce((oldest, currentPerson) => {
    //       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    //       const currentAge = getAge(
    //         currentPerson.yearOfBirth,
    //         currentPerson.yearOfDeath
    //       );
    //       return oldestAge < currentAge ? currentPerson : oldest;
    //     });
    //   };
      
}

// Do not edit below this line
module.exports = findTheOldest;
