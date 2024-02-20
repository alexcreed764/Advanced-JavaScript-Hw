// Задание 1
  
  // • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
  
  // • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
  
  // {
  // title: "Название альбома",
  // artist: "Исполнитель",
  // year: "Год выпуска"
  // }
  
  // • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
  // • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const music = [
    { title: "album1", artist: "artist", year: 2000 },
    { title: "album2", artist: "artist", year: 2001 },
    { title: "album3", artist: "artist", year: 2002 },
  ];
  
  const musicCollection = {
    music: [...music],
    [Symbol.iterator]: function () {
      let countAlbums = 0;
      return {
        next: () => {
          if (countAlbums >= this.music.length) {
            return { done: true };
          } else {
            return {
              value: this.music[countAlbums++],
              done: false,
            };
          }
        },
      };
    },
  };
  
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist}(${album.year})`);
  }
  
  
  // Задание 2
  
  // Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
  
  // Необходимо создать систему управления этими заказами, которая позволит:
  
  // • Отслеживать, какой повар готовит какое блюдо.
  // • Записывать, какие блюда заказал каждый клиент.
  
  // Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
  
  // Повара и их специализации:
  
  // Виктор - специализация: Пицца.
  // Ольга - специализация: Суши.
  // Дмитрий - специализация: Десерты.
  
  // Блюда и их повара:
  
  // Пицца "Маргарита" - повар: Виктор.
  // Пицца "Пепперони" - повар: Виктор.
  // Суши "Филадельфия" - повар: Ольга.
  // Суши "Калифорния" - повар: Ольга.
  // Тирамису - повар: Дмитрий.
  // Чизкейк - повар: Дмитрий.
  
  // Заказы:
  
  // Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
  // Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
  // Клиент Ирина заказала: Чизкейк.


  const Victor = {
    name: "Виктор",
  };
  const Olga = {
    name: "Ольга",
  };
  
  const Dmitry = {
    name: "Дмитрий",
  };
  
  const Irina = {
    name: "Ирина",
  };
  
  const Mariya = {
    name: "Мария",
  };
  
  const Alexey = {
    name: "Алексей",
  };
  
  let cookers = new Map();
  cookers.set("Виктор", "Пицца");
  cookers.set("Ольга", "Суши");
  cookers.set("Дмитрий", "Десерты");
  
  cookers.forEach((dish, cook) => {
    console.log(`${cook} - специализация: ${dish}`);
  });
  
  const DmitryDishes = new Set();
  DmitryDishes.add("Тирамису");
  DmitryDishes.add("Чизкейк");
  
  const OlgaDishes = new Set();
  OlgaDishes.add("Суши 'Филадельфия'");
  OlgaDishes.add("Суши 'Калифорния'");
  
  const VictorDishes = new Set();
  VictorDishes.add("Пицца 'Маргарита'");
  VictorDishes.add("Пицца 'Пепперони'");
  
  let cookersAndDishes = new Map();
  cookersAndDishes.set(Dmitry, DmitryDishes);
  cookersAndDishes.set(Olga, OlgaDishes);
  cookersAndDishes.set(Victor, VictorDishes);
  
  cookersAndDishes.forEach((cook, dish) => {
    cook.forEach((dishPref) => {
      console.log(`${dishPref} повар: ${dish.name}`);
    });
  });
  
  const orderedDishes = new Map();
  orderedDishes.set(Irina, "Чизкейк");
  orderedDishes.set(Mariya, "Суши 'Калифорния' и Пиццу 'Маргарита'");
  orderedDishes.set(Alexey, "Пиццу 'Пепперони' и Тирамису");
  
  orderedDishes.forEach((dish, client) => {
    console.log(`Клиент ${client.name} заказал: ${dish}`);
  });
  
