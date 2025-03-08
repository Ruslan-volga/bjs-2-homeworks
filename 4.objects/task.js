function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marksToAdd = []; 
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function(...marks) {
    if (!this.marksToAdd) {
        return; 
    }
    this.marksToAdd.push(...marks); 
}

Student.prototype.getAverage = function() {
    if (!this.marksToAdd || this.marksToAdd.length === 0) {
        return 0; 
    }
    const sum = this.marksToAdd.reduce((acc, mark) => acc + mark, 0); 
    return sum / this.marksToAdd.length; 
}

Student.prototype.exclude = function(reason) {
    delete this.subject; 
    delete this.marksToAdd; 
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
student2.exclude('плохая учеба');
console.log(student2); 