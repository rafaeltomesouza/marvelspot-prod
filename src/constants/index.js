export const CATEGORIES = {
  comments: 'Comments',
  spoiler: 'Spoiler'
};

export const MENU_HOME = [
  { name: 'View threads', path: 'threads' },
  { name: 'add comments', path: 'addpost' }
];

export const MENU_THREADS = [
  { name: 'Home', path: 'home', noId: true },
  { name: 'add comments', path: 'addpost' }
];

export const MENU_POST = [
  { name: 'Home', path: 'home', noId: true },
  { name: 'View threads', path: 'threads' }
];

export const PATHS = {
  addPost: '/addpost',
  home: '/home',
  login: '/',
  threads: '/threads'
};

export const ITEMS_PER_REQUEST = 21;