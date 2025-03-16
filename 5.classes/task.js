class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
  }

  
  fix() {
      if (this.state < 100) {
          this.state = this.state * 1.5;;
      }
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

  
  get state() {
      return this._state;
  }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine"; 
  }
}


class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount);
      this.author = author; 
      this.type = "book"; 
  }
}


class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel"; 
  }
}


class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic"; 
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective"; 
  }
}


const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 

const gladius = new NovelBook(
  384, 'А. Сапковский',
  'Меч Предназначения',  
  1992,
  384
  
);

console.log(gladius.author); 
gladius.state = 10;
console.log(gladius.state); 
gladius.fix();
console.log(gladius.state); 




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
library.addBook(new DetectiveBook(
  'А. Сапковский',
  'Меч Предназначения',  
  1992,
  384
  
));
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