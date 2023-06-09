const data = {
  title: 'Заговорите на тайском уже через 3 месяца',
  subtitle: 'Курс тайского языка от Alpha Language School',
  callToAction: 'Записаться',
  imageKeyword: 'Thailand',
  navMenu: {
    title: 'Меню',
    items: [
      {
        title: 'Главная',
        blockId: 'home',
      },
      {
        title: 'Преимущества',
        blockId: 'features',
      },
      {
        title: 'Отзывы',
        blockId: 'testimonials',
      },
      {
        title: 'FAQ',
        blockId: 'faq',
      },
      {
        title: 'Контакты',
        blockId: 'contact',
      },
    ],
  },
  blocks: [
    {
      id: 'home',
      type: 'content',
      title: 'Заговорите на тайском уже через 3 месяца',
      imageKeyword: 'Thailand',
      content:
        'Хотите заговорить на тайском языке, но не знаете с чего начать? Хотите быстро и эффективно овладеть языком? Тогда курс тайского языка от Alpha Language School — это то, что вам нужно! За 3 месяца обучения вы научитесь говорить на тайском языке без акцента и сможете беспрепятственно общаться с местными жителями, понимать тайскую культуру и традиции.',
      alignment: 'left',
    },
    {
      id: 'features',
      type: 'features',
      title: 'Наши преимущества:',
      subtitle: 'Курс тайского языка от Alpha Language School',
      features: [
        {
          title: 'Удобное расположение',
          subtitle: 'Школа находится в районе Чалонг, который славится своими пляжами и природой',
          icon: 'map-pin',
        },
        {
          title: 'Обеспечение годовой учебной визой',
          subtitle:
            'Мы поможем вам получить годовую учебную визу для дальнейшего обучения в Таиланде',
          icon: 'book-open',
        },
        {
          title: 'Высокий уровень доверия у студентов и иммиграционки',
          subtitle:
            'Наши студенты регулярно получают надежные и квалифицированные рекомендации от иммиграционной службы и образовательных учреждений',
          icon: 'thumbs-up',
        },
      ],
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      title: 'Отзывы наших студентов',
      testimonials: [
        {
          name: 'Ирина',
          gender: 'female',
          position: 'Преподаватель',
          text: 'Я очень довольна обучением на курсе тайского языка от Alpha Language School. Преподаватели действительно заслуживают высоких отзывов за профессионализм и индивидуальный подход к каждому студенту.',
        },
        {
          name: 'Алексей',
          gender: 'male',
          position: 'Студент',
          text: 'Я очень благодарен Alpha Language School за курс тайского языка, который я прошел. Спасибо преподавателям за терпение, трудолюбие и внимание к деталям.',
        },
        {
          name: 'Дарина',
          gender: 'female',
          position: 'Менеджер',
          text: 'Я хотела бы выразить свою благодарность Alpha Language School за курс тайского языка. Мне очень понравилось обучаться у наших преподавателей. Они объясняют материал четко и доходчиво, а также помогают студентам приобрести необходимые навыки для общения на тайском языке.',
        },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Часто задаваемые вопросы',
      subtitle: 'Курс тайского языка от Alpha Language School',
      questions: [
        {
          question: 'Сколько времени занимает курс?',
          answer: 'Курс длится 3 месяца.',
        },
        {
          question: 'Каковы требования к студентам?',
          answer:
            'Требования к студентам отсутствуют. Курс подходит для всех желающих изучить тайский язык.',
        },
        {
          question: 'В какое время проходят занятия?',
          answer: 'Занятия проходят в удобное для студента время в период с 9:00 до 18:00. ',
        },
      ],
    },
    {
      id: 'contact',
      type: 'callToAction',
      title: 'Записаться на курс',
      subtitle: 'Курс тайского языка от Alpha Language School',
      callToAction: 'Записаться',
    },
  ],
  contactForm: {
    id: 'contact',
    title: 'Свяжитесь с нами',
    subtitle: 'Если у вас есть вопросы, свяжитесь с нами',
  },
};

export default data;
