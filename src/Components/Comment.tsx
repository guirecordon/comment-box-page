import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0);

  function handleCommentLikes() {
    setLikes(likes + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/guirecordon.png" />

      <div className={styles.commentBox}>
        <div className={styles.boxContent}>
          <header className={styles.header}>
            <div className={styles.credentials}>
              <strong>Name</strong>
              <time>Cerca de 2h</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp onClick={handleCommentLikes} />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
