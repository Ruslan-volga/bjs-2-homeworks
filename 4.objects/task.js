Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName; // Установка предмета
}

Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
        return; // Если у студента нет массива оценок, выходим из функции
    }
    this.marks.push(...marksToAdd); // Добавление оценок в массив
}

Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
        return 0; // Если оценок нет, возвращаем 0
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0); // Суммируем оценки
    return sum / this.marks.length; // Возвращаем среднее арифметическое
}

Student.prototype.exclude = function(reason) {
    delete this.subject; // Удаляем предмет
    delete this.marks; // Удаляем оценки
    this.excluded = reason; // Устанавливаем причину исключения
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