import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'Silenced',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNTc3NTg3M15BMl5BanBnXkFtZTgwMzc1MTAzMjE@._V1._SY209_CR3,0,140,209_.jpg',
    genre: 'Thriller',
    days,
    times,
  },
  {
    title: 'Secretly Greatly',
    poster: 'https://i.imgur.com/0x9JFH5.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'The Good, the Bad, the Weird',
    poster: 'https://i.imgur.com/0GO8Pq1.png',
    genre: 'Comedy',
    days,
    times,
  },
  {
    title: 'Masquerade',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODMzYmI3MjgtNDY4MS00YzVjLTg0MDctYzVlZDM2MmRlMmZjXkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1._SY209_CR3,0,140,209_.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'The Attorney',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2ODg5NDcxN15BMl5BanBnXkFtZTgwMDEzNzIwMTE@._V1._SY209_CR0,0,140,209_.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'Welcome to Dongmakgol',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDgxNTIzNV5BMl5BanBnXkFtZTgwMjc2MDA2MDE@._V1._SY209_CR8,0,140,209_.jpg',
    genre: 'Comedy/Action',
    days,
    times,
  },
  {
    title: 'Arrow, the Ultimate Weapon',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMjAyNzA0N15BMl5BanBnXkFtZTcwMTcxOTIwNw@@._V1._SY209_CR4,0,140,209_.jpg',
    genre: 'Thriller/Action',
    days,
    times,
  },
  {
    title: 'Sunny',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MTgxMjgxNl5BMl5BanBnXkFtZTgwOTU2MTAzMjE@._V1._SY209_CR3,0,140,209_.jpg',
    genre: 'Drama',
    days,
    times,
  },
    {
    title: 'Dancing Queen',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExOTY5NTYzMV5BMl5BanBnXkFtZTgwOTkzMTAzMjE@._V1._SY209_CR3,0,140,209_.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
  },
  {
    title: 'Marathon',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNzI4NzgxNF5BMl5BanBnXkFtZTcwOTAzMjk3OA@@._V1._SY209_CR8,0,140,209_.jpg',
    genre: 'Drama/Sport',
    days,
    times,
  },
  {
    title: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
  },
  {
    title: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];
