function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function(...marksAdd) {
    if (!this.marks) {
        return; 
    }
    this.marks.push(...marksAdd); 
}

Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
        return 0; 
    }
    const sum = this.marks.reduce((acc, value) => acc + value, 0); 
    return sum / this.marks.length; 
}

Student.prototype.exclude = function(reason) {
    delete this.subject; 
    delete this.marks; 
    this.excluded = reason;  
}


let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Алгебра");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1); 

let student2 = new Student("Артем", "мужской", 25);
student2.setSubject("Геометрия");
student2.exclude('прогулы');
console.log(student2); 