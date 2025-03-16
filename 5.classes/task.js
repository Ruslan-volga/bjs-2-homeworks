class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; 
      this.type = null; 
  }

  get state() {
      return this._state;
  }

  set state(value) {
      if (value < 0) {
          this._state = 0;
      } else if (value > 100) {
          this._state = 100;
      } else {
          this._state = value;
      }
  }

  fix() {
      this.state = Math.min(100, this.state * 1.5); 
  }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine'; 
  }
}


class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author; 
      this.type = 'book'; 
  }
}


class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel'; 
  }
}


class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic'; 
  }
}


class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective'; 
  }
}


const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);



const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

const book = new Book("А. Сапковский","Меч Предназначения", 1992,384, );
console.log(book.author); 
book.state = 10;
console.log(book.state); 
book.fix();
console.log(book.state); 
console.log(book.author); 
book.state = 10;
console.log(book.state); 
book.fix();
console.log(book.state); console.log(book.name);


const gladius = new NovelBook( 'А. Сапковский','Меч Предназначения', 1992, 384);

console.log(gladius.author); 
gladius.state = 10;
console.log(gladius.state); 
gladius.fix();
console.log(gladius.state); console.log(gladius.name);



const gambler = new NovelBook(
  "Фёдор Достоевский", 
  "Игрок", 
  1866, 
  135
);
console.log(gambler.author); 
gambler.state = 90;
console.log(gambler.state); 
gambler.fix();
console.log(gambler.state);

class Library {
  constructor(name) {
      this.name = name;
      this.books = []; 
  }

 
  addBook(book) {
      if (book.state > 30) {
          this.books.push(book); 
      }
  }

 
  findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null; 
  }

  
  giveBookByName(bookName) {
      const bookIndex = this.books.findIndex(book => book.name === bookName);
      if (bookIndex !== -1) {
          return this.books.splice(bookIndex, 1)[0]; 
      }
      return null; 
  }
}


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);  
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 


const newBook = new NovelBook("Новый Автор", "Роман без названия", 2021, 200);
newBook.state = 25; 
library.addBook(newBook); 

const damagedBook = library.giveBookByName("Пикник на обочине");
console.log(damagedBook.name); 
damagedBook.state = 15; 
damagedBook.fix(); 
console.log(damagedBook.state); 

library.addBook(damagedBook); 
console.log("Количество книг после восстановления: " + library.books.length);

// 3 задача
class Student {
  constructor(name) {
      this.name = name; 
      this.marks = {}; 
  }

  addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
          return; 
      }

      if (!this.marks[subject]) {
          this.marks[subject] = []; 
      }

      this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) {
          return 0; 
      }

      const total = this.marks[subject].reduce((sum, mark) => sum + mark, 0); 
      return total / this.marks[subject].length; 
  }
  getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
          return 0; 
      }

      const totalAverage = subjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0);
      return totalAverage / subjects.length; 
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); 
console.log(student.getAverageBySubject("физика")); 
console.log(student.getAverageBySubject("биология")); 
console.log(student.getAverage()); 