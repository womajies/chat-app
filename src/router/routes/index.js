export default [
  {
    path: process.env.NODE_ENV === 'production' ? '/chat-app/' : '/',
    component: () => import('../../views/Index'),
    name: 'home',
    meta: {
      title: 'Chat - App',
      description: 'Приложение - мессенджер',
    },
  },
];
