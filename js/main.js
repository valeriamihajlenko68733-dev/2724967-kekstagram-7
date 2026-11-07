// ---------- Вспомогательные функции ----------
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

// ---------- Данные ----------
const DESCRIPTIONS = [
  'Красивый закат на берегу моря',
  'Утренний кофе и свежая газета',
  'Прогулка по осеннему парку',
  'Верный друг ждёт у окна',
  'Вкусный завтрак в выходной день',
  'Горные вершины в лучах солнца',
  'Городские огни ночью',
  'Полевые цветы на лугу',
  'Тёплый плед и любимая книга',
  'Закат над тихой рекой',
];

const NAMES = [
  'Артём',
  'Иван',
  'Мария',
  'Ольга',
  'Сергей',
  'Анна',
  'Дмитрий',
  'Екатерина',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// ---------- Счётчик для уникальных id комментариев ----------
let commentId = 1;

// ---------- Создание одного комментария ----------
const createComment = () => {
  const sentencesCount = getRandomInt(1, 2); // 1 или 2 предложения
  const used = new Set();
  const parts = [];

  while (parts.length < sentencesCount) {
    const index = getRandomInt(0, MESSAGES.length - 1);
    if (!used.has(index)) {
      used.add(index);
      parts.push(MESSAGES[index]);
    }
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: parts.join(' '),
    name: getRandomElement(NAMES),
  };
};

// ---------- Создание массива комментариев ----------
const createComments = () => {
  const count = getRandomInt(0, 30);
  return Array.from({ length: count }, createComment);
};

// ---------- Создание одной фотографии ----------
const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: createComments(),
});

// ---------- Итоговый массив из 25 фотографий ----------
const photos = Array.from({ length: 25 }, (_, index) => createPhoto(index));

// Для проверки в консоли:
console.log(photos);
