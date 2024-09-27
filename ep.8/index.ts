const myFriends = [{
    firstName: 'Lisa',
    lastName: 'Mamamoosub',
    AKA: 'Superman',
    age: 100
}, {
    firstName: 'bell',
    lastName: 'mowan',
    AKA: 'ninja',
    age: 78
},{
    firstName: 'nut',
    lastName: 'dew',
    AKA: 'panda',
    age: 56
},{
    firstName: 'jenny',
    lastName: 'lalala',
    AKA: 'pinkblack',
    age: 22 
},{
    firstName: 'nutcha',
    lastName: 'kimson',
    AKA: 'avenger',
    age: 12 
}]

const myFriendsAKA = myFriends.map(function(element, index){
    return ({
        firstName: element.firstName,
        AKA: element.AKA
    })
})

const myFriensdMoreThan = myFriends.filter(function(element, index){
    return element.age > 19
})

console.log(myFriensdMoreThan)


