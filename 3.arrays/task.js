function compareArrays(arr1, arr2) {
    return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]); 
}

function getUsersNamesInAgeRange(users, gender) {
  
}

function getUsersNamesInAgeRange(people, gender) {
  
    let mas = people.filter(item => item.gender === gender).map(item => item.age);
    let res = mas.reduce((sum, age) => sum + age, 0);
    
    return (mas.length > 0) ? res / mas.length : 0;
    
    }
  