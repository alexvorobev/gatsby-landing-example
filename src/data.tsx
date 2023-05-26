const data = {
  title: 'Курс английского языка на Пхукете с носителем',
  subtitle:
    'Изучите английский язык с носителем языка на тропическом острове среди единомышленников.',
  callToAction: 'Зарегистрироваться',
  navMenu: {
    title: 'Курс английского языка',
    items: [
      {
        title: 'О курсе',
        blockId: 'about',
      },
      {
        title: 'Преимущества',
        blockId: 'advantages',
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
      id: 'about',
      type: 'content',
      title: 'О курсе английского языка на Пхукете',
      subtitle: '',
      content:
        'Наш курс английского языка на Пхукете предлагает уникальную возможность изучить английский язык в туристическом рае среди единомышленников и с носителем языка. Курс предназначен для всех, кто хочет не только эффективно изучать английский язык, но и наслаждаться отдыхом на тропическом острове в течение учебного периода.',
      alignment: 'left',
    },
    {
      id: 'advantages',
      type: 'features',
      title: 'Преимущества нашего курса английского языка на Пхукете',
      subtitle: '',
      features: [
        {
          title: 'Трекинг прогресса',
          subtitle: 'Отслеживайте свой прогресс в изучении английского языка',
          icon: 'trending-up',
        },
        {
          title: 'Чат с единомышлиниками',
          subtitle:
            'Общайтесь в чате с нашими студентами, которые готовятся к изучению английского языка',
          icon: 'message-square',
        },
        {
          title: 'Оплата криптовалютой',
          subtitle: 'Оплатите наш курс английского языка на Пхукете с помощью криптовалюты',
          icon: 'dollar-sign',
        },
      ],
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      title: 'Отзывы студентов',
      subtitle: '',
      testimonials: [
        {
          name: 'Иван',
          position: 'Студент',
          text: 'Отличный курс, нашел много новых друзей и значительно улучшил свой английский язык! Спасибо!',
        },
        {
          name: 'Анна',
          position: 'Студент',
          text: 'Я очень довольна курсом! Носитель языка отличный преподаватель, и на острове много интересных мест, куда можно сходить после занятий.',
        },
        {
          name: 'Максим',
          position: 'Студент',
          text: 'Я имел уникальную возможность изучить английский язык на Пхукете с носителем языка, и этот курс превзошел все мои ожидания! Рекомендую всем!',
        },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Часто задаваемые вопросы',
      subtitle:
        'Наши курсы длительностью от 1 до 12 недель. В течение этого периода вы будете заниматься 20 часов в неделю.',
      questions: [
        {
          question: 'Как долго длится курс?',
          answer:
            'Наши курсы длительностью от 1 до 12 недель. В течение этого периода вы будете заниматься 20 часов в неделю.',
        },
        {
          question: 'Входят ли проживание и еда в стоимость курса?',
          answer:
            'Проживание и еда не входят в стоимость курса, но мы поможем вам найти жилье и рестораны в вашем бюджете.',
        },
        {
          question: 'Какие методики обучения применяются на курсе?',
          answer:
            'Мы применяем современные инновационные методики обучения, включая коммуникативный метод и метод PBL (Project Based Learning).',
        },
      ],
    },
    {
      id: 'contact',
      type: 'contact',
      title: 'Напишите нам',
      subtitle: '',
    },
    {
      id: 'callToAction',
      type: 'callToAction',
      title: 'Запишитесь на курс английского языка на Пхукете с носителем прямо сейчас!',
      subtitle: '',
      callToAction: 'Зарегистрироваться',
    },
  ],
};

export default data;
