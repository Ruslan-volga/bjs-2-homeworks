function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.arrMarks = []; 
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function(...marks) {
    if (!this.arrMarks) {
        return; 
    }
    this.arrMarks.push(...marks); 
}

Student.prototype.getAverage = function() {
    if (!this.arrMarks || this.arrMarks.length === 0) {
        return 0; 
    }
    const sum = this.arrMarks.reduce((acc, mark) => acc + mark, 0); 
    return sum / this.arrMarks.length; 
}

Student.prototype.exclude = function(reason) {
    delete this.subject; 
    delete this.arrMarks; 
    this.excluded = reason; 
}

// Пример использования
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Алгебра");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1); // {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Алгебра"}

let student2 = new Student("Артем", "мужской", 25);
student2.setSubject("Геометрия");
student2.exclude('прогулы');
console.log(student2); // {name: "Артем", gender: "мужской", age: 25, excluded: "плохая учеба"}