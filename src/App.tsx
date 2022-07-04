import { Header } from './Components/Header';
import './global.css';
import styles from './Components/App.module.css';
import { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guirecordon.png',
      name: 'Gui Recordon',
      role: 'Dev front end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-27 17:32:58'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://scontent.fstu1-1.fna.fbcdn.net/v/t1.18169-9/17425049_425175641157494_1610691917794686408_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeESgX6WkoWoXfq2b7q6IIudI5iegHxt2XUjmJ6AfG3ZdUFPmk7cN4bKJ5EQ1FXp2hA&_nc_ohc=406XsSr1bPsAX-KOEvd&tn=AjByls4U5Tou5JJF&_nc_ht=scontent.fstu1-1.fna&oh=00_AT_wKqWX7Ld3r542yYwTIyBvSwGEXYB4TiiF2E5ukwDORQ&oe=62E3F1FF',
      name: 'Mano Brown',
      role: 'Artist',
    },
    content: [
      { type: 'paragraph', content: 'Fala rapeizi 👋' },
      {
        type: 'paragraph',
        content: 'Din din don rap é o som, quem manda no opala ma-rrom 🚀',
      },
      { type: 'link', content: '👉 mano.brown/rapsom' },
    ],
    publishedAt: new Date('2022-06-30 18:00:03'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
