import moment from 'moment';
import users from './users';

const blogPosts = [
  {
    imageURL: 'https://via.placeholder.com/350x350',
    category: 'Food',
    title: 'Test title',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat harum obcaecati pariatur sint tempore unde. Aperiam commodi distinctio earum eligendi, enim itaque laudantium magni neque porro temporibus vitae voluptatum?',
    postId: '1',
    date: moment(0),
    user: users[0]
  },
  {
    imageURL: 'https://via.placeholder.com/200x200',
    category: 'Travel',
    title: 'Test title 2',
    excerpt: 'Test excerpt 2',
    postId: '2',
    date: moment(0).add(5, 'days'),
    user: users[1]
  },
  {
    imageURL: 'https://via.placeholder.com/250x250',
    category: 'Food',
    title: 'Test title 3',
    excerpt: '3 Lorem ipsum dolor',
    postId: '3',
    date: moment(0).subtract(5, 'days'),
    user: users[2]
  },
];

export default blogPosts;
