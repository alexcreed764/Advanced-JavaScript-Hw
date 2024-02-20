// Представьте, что у вас есть класс для управления библиотекой.
// В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и
// получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
// Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того,
// есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.
// Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Biblio {
    #books = [];
    get allBooks() {
      console.log(this.#books);
    }
    addBook(book) {
      if (this.#books.includes(book)) {
        throw new Error(`Книга с заголовком "${book}" уже есть в библиотеке!`);
      } else this.#books.push(book);
    }
    removeBook(book) {
      if (!this.#books.includes(book)) {
        throw new Error(`Книги с заголовком "${book}" нет в библиотеке!`);
      } else {
        const a = this.#books.indexOf(book);
        this.#books.splice(a, 1);
      }
    }
    hasBook(book) {
      console.log(this.#books.includes(book));
    }
    constructor(arrBooks) {
      const unique = [...new Set(arrBooks)];
      const diff = arrBooks.length - unique.length;
      if (diff > 0) {
        throw new Error(`В библиотеке есть дубликаты!`);
      }
      this.#books = arrBooks;
    }
  }
  
  const biblio1 = new Biblio(["q", "w", "e"]);
  // biblio1.addBook("r");
  // biblio1.removeBook("x");
  // biblio1.hasBook("d");
  
  biblio1.allBooks;




  // Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const button = document.getElementById("send");
const input = document.getElementById("input");
const container = document.getElementById("container");

function validateAndAppendReview() {
  try {
    if (input.value.length < 50 || input.value.length > 500) {
      throw new Error(`Review length < 50 or > 500`);
    } else {
      const newRev = document.createElement("div");
      newRev.textContent = input.value;
      container.appendChild(newRev);
      const hr = document.createElement("hr");
      container.appendChild(hr);
      input.value = "";
    }
  } catch (error) {
    alert(error.message);
    input.value = "";
  }
}

button.addEventListener("click", (e) => validateAndAppendReview());

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

initialData.forEach((elem) => {
  const title = document.createElement("div");
  title.textContent = elem.product;
  container.appendChild(title);
  elem.reviews.forEach((rev) => {
    const review = document.createElement("div");
    review.textContent = rev.text;
    container.appendChild(review);
  });
  const hr = document.createElement("hr");
  container.appendChild(hr);
});
