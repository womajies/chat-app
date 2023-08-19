export default {
  state: () => ({
    users: [
      {
        uid: 0,
        username: 'Emmett Brown',
        avatar: 'emmet.jpg',
        status: 'Был завтра в 16:32',
        chat: [
          {
            id: 1,
            time: new Date('August 16, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 17, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 17, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 18, 2023 09:24:11 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 18, 2023 09:26:09 UTC'),
            text: 'Edt perspiciatis unde omnis iste nat.',
            type: "user",
          },
        ],
      },
      {
        uid: 1,
        username: 'Someuser',
        avatar: 'user-1.png',
        status: 'Был 7 часов назад',
        chat: [],
      },
      {
        uid: 2,
        username: 'Some Abuser',
        avatar: 'user-2.png',
        status: 'Онлайн',
        chat: [
          {
            id: 1,
            time: new Date('August 14, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 14, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 16, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 16, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 18, 2023 11:26:09 UTC'),
            text: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 3,
        username: 'Biba',
        avatar: 'user-3.png',
        status: 'Был 12 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 13, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 15, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 15, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 15, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Stotam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 4,
        username: 'Boba',
        avatar: 'user-4.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 16, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 17, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 17, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 19, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 5,
        username: 'Ahrenel Abidov',
        avatar: 'user-5.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 17, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 17, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 17, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 18, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Sed ut rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 6,
        username: 'Pudge',
        avatar: 'user-6.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 17, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 18, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 18, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 19, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 7,
        username: 'Jandarm',
        avatar: 'user-7.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 18, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 18, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 19, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 19, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
      {
        uid: 8,
        username: 'Ваня Пупкин',
        avatar: 'user-8.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 12, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 15, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 15, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 19, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 19, 2023 11:26:09 UTC'),
            text: 'Ut unde omn',
            type: "user",
          },
        ],
      },
      {
        uid: 9,
        username: 'Ahiho',
        avatar: 'user-9.png',
        status: 'Был 7 часов назад',
        chat: [
          {
            id: 1,
            time: new Date('August 14, 2023 11:15:30 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 2,
            time: new Date('August 15, 2023 11:19:21 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
          {
            id: 3,
            time: new Date('August 15, 2023 11:22:32 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 4,
            time: new Date('August 18, 2023 11:24:02 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "own",
          },
          {
            id: 5,
            time: new Date('August 18, 2023 11:26:09 UTC'),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            type: "user",
          },
        ],
      },
    ],
  }),

  getters: {
    getUsers(state) {
      return state.users;
    },
  },

  mutations: {
    SET_USERS(state, users) {
      state.messages = users;
    },
  },
};
