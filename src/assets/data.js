export const rules = [
  {
    id: 0,
    title: "Изучите дело",
    content:
      "внимательно изучите все материалы дела, включая допросы свидетелей и фотографии",
    image: "/src/assets/images/howtoplay/elipse1.jpeg",
  },
  {
    id: 1,
    title: "Выполните задания",
    content:
      "в процессе игры вам нужно выполнять задания, которые вы найдёте в коробке",
    image: "/src/assets/images/howtoplay/elipse2.jpeg",
  },
  {
    id: 2,
    title: "Подтвердите версию",
    content:
      "если вы считаете, что знаете правильный ответ на  очередное задание, то перейдите по ссылке и проверьте свою теорию",
    image: "/src/assets/images/howtoplay/elipse3.png",
  },
  {
    id: 3,
    title: "Найдите настоящего убийцу!",
    content: "игра считается завершённой, когда все задания успешно выполнены",
    image: "/src/assets/images/howtoplay/elipse4.jpeg",
  },
];

export const questions = [
  {
    id: 0,
    question: "сколько людей могут играть в игру?",
    answer:
      "В “смертельные тайны” интересно играть в одиночку, вдвоём или большой компанией",
  },
  {
    id: 1,
    question: "У МЕНЯ ОСТАЛИСЬ ВОПРОСЫ, КАК С ВАМИ СВЯЗАТЬСЯ?",
    answer: "Обратитесь в службу поддержки по контактам, указанным на сайте",
  },
  {
    id: 2,
    question: "У МЕНЯ ОСТАЛИСЬ ВОПРОСЫ, КАК С ВАМИ СВЯЗАТЬСЯ?",
    answer: "Обратитесь в службу поддержки по контактам, указанным на сайте",
  },
  {
    id: 3,
    question: "Когда выйдет следующее дело?",
    answer: "Мы планируем выпускать новый сюжет каждые 2-3 месяца",
  },
  {
    id: 4,
    question: "Есть ли возрастные ограничения?",
    answer: "Мы не рекомендуем детям до 10 лет",
  },
  {
    id: 5,
    question: "Сколько времени занимает прохождение игры?",
    answer: "Среднее время прохождения 3-4 часа",
  },
  {
    id: 6,
    question: "Я могу сыграть только один раз?",
    answer:
      "Да, игра рассчитана на разовое прохождение, но мы разрабатываем многоразовый сценарий",
  },
  {
    id: 7,
    question: 'Кто автор игр "Смертельные тайны"',
    answer: "Команда людей, объединенная общим интересам к детективам",
  },
  {
    id: 8,
    question: "Что делать, если я зашел в тупик?",
    answer:
      "Вы всегда можете воспользоваться подсказками в ходе выполнения заданий",
  },
];

export const players = [
  {
    id: 0,
    name: "Player 1",
    best: "11111111",
  },
  {
    id: 1,
    name: "Player 2",
    best: "22222222",
  },
  {
    id: 2,
    name: "Player 3",
    best: "33333333",
  },
  {
    id: 3,
    name: "Player 4",
    best: "44444444",
  },
  {
    id: 4,
    name: "Player 5",
    best: "55555555",
  },
  {
    id: 5,
    name: "Player 6",
    best: "66666666",
  },
  {
    id: 6,
    name: "Player 7",
    best: "77777777",
  },
  {
    id: 7,
    name: "Player 8",
    best: "88888888",
  },
  {
    id: 8,
    name: "Player 9",
    best: "99999999",
  },
  {
    id: 9,
    name: "Player 10",
    best: "1010101010",
  },
];
export const cases = [
  {
    id: 0,
    title: "Загадочное убийство на вилле Кортни",
    description:
      "11 июля 2020 года в маленьком городке Роадленд произошло шокирующее убийство Оливии Грин. Девушка была убита в собственном доме. Полиция арестовала Джейка Робинсона. Суд приговорил его к смертной казне. Ваша работа – изучить материалы дела, опровергнуть вину Джейка и найти настоящего убийцу.",
    image: require("@/assets/images/magazine/185480d0cf28dd4355da38b3223e42a5.png"),
    caseQuestions: [
      {
        id: 1,
        question: "Вы можете доказать невиновность Джейка Робинсона?",
        condition: "Выберите 3 документа, которые опровергают его вину",
        options: [
          {
            id: 0,
            option: "Ответ на запрос Питеру Грину",
          },
          {
            id: 1,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 2,
            option: "Допрос Сида Флетчера",
          },
          {
            id: 3,
            option: "Допрос Генри Росса",
          },
          {
            id: 4,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 5,
            option: "Банковская выписка счёта Джейка",
          },
        ],
        playerVersionNeeded: false,
        trueAnswers: [0, 1, 2],
        help: [
          "Обратите внимание на запрос Питеру Грину",
          "Обратите внимание на запрос Питеру Грину",
        ],
        accepted: [
          "По счастливому обстоятельству, на обратной стороне газеты была статья о том самом празднике в Порт-Роке и фотография, на которой видна машина с номером.",
          "В бланке до роса Джейка указана модель его автомобиля, а также номер, который совпадает с номером машины в газете. На фотографии изображен салют.",
          "Согласно статье, он начался в 23:00. Между Порт-Роком  и Роадлендом минимум 1,5 часа на машине. Так что Джейк точно бы не успел ко времени убийства Оливии. Вы можете открыть первый конверт!",
        ],
      },
      {
        id: 2,
        question: "Вы можете доказать невиновность Джейка Робинсона?",
        playerVersionNeeded: false,
        condition: "Выберите 2 документа, которые опровергают его вину",
        options: [
          {
            id: 0,
            option: "Ответ на запрос Питеру Грину",
          },
          {
            id: 1,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 2,
            option: "Допрос Сида Флетчера",
          },
          {
            id: 3,
            option: "Допрос Генри Росса",
          },
          {
            id: 4,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 5,
            option: "Банковская выписка счёта Джейка",
          },
        ],
        trueAnswers: [0, 1],
        help: [
          "Обратите внимание на запрос Питеру Грину",
          "Обратите внимание на запрос Питеру Грину",
        ],
        accepted: [
          "В бланке до роса Джейка указана модель его автомобиля, а также номер, который совпадает с номером машины в газете. На фотографии изображен салют.",
          "Согласно статье, он начался в 23:00. Между Порт-Роком  и Роадлендом минимум 1,5 часа на машине. Так что Джейк точно бы не успел ко времени убийства Оливии. Вы можете открыть первый конверт!",
        ],
      },
      {
        id: 3,
        question: "Вы можете доказать невиновность Джейка Робинсона?",
        condition: "Выберите 4 документа, которые опровергают его вину",
        playerVersionNeeded: false,
        options: [
          {
            id: 0,
            option: "Ответ на запрос Питеру Грину",
          },
          {
            id: 1,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 2,
            option: "Допрос Сида Флетчера",
          },
          {
            id: 3,
            option: "Допрос Генри Росса",
          },
          {
            id: 4,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 5,
            option: "Банковская выписка счёта Джейка",
          },
        ],
        trueAnswers: [0, 2, 3, 1],
        help: [
          "Обратите внимание на запрос Питеру Грину",
          "Обратите внимание на запрос Питеру Грину",
        ],
        accepted: [
          "Банковская выписка счёта Джейка",
          "В бланке до роса Джейка указана модель его автомобиля, а также номер, который совпадает с номером машины в газете. На фотографии изображен салют.",
          "Согласно статье, он начался в 23:00. Между Порт-Роком  и Роадлендом минимум 1,5 часа на машине. Так что Джейк точно бы не успел ко времени убийства Оливии. Вы можете открыть первый конверт!",
        ],
      },
      {
        id: 4,
        question: "Вы можете доказать невиновность Джейка Робинсона?",
        condition: "Выберите 5 документа, которые опровергают его вину",
        playerVersionNeeded: true,
        options: [
          {
            id: 0,
            option: "Ответ на запрос Питеру Грину",
          },
          {
            id: 1,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 2,
            option: "Допрос Сида Флетчера",
          },
          {
            id: 3,
            option: "Допрос Генри Росса",
          },
          {
            id: 4,
            option: "Банковская выписка счёта Джейка",
          },
          {
            id: 5,
            option: "Банковская выписка счёта Джейка",
          },
        ],
        trueAnswers: [2, 3, 1, 4, 0],
        help: [
          "Обратите внимание на запрос Питеру Грину",
          "Обратите внимание на запрос Питеру Грину",
        ],
        accepted: [
          "По счастливому обстоятельству, на обратной стороне газеты была статья о том самом празднике в Порт-Роке и фотография, на которой видна машина с номером.",
          "В бланке до роса Джейка указана модель его автомобиля, а также номер, который совпадает с номером машины в газете. На фотографии изображен салют.",
        ],
      },
    ],
  },
];
