import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const formattedDate = format(publishedAt, "d LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const distancedDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(['post muito bacana, ein!']);
  const [value, setValue] = useState('');

  const isValueEmpty = value.length === 0;

  function handleInputText({target}: ChangeEvent<HTMLTextAreaElement>) {
    setValue(target.value);
  }

  function handleNewPost(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, value]);
    setValue('');
  }

  function handleEmptyField({ target }: InvalidEvent<HTMLTextAreaElement>) {
    target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(comment: string) {
    const updatedList = comments.filter(
      (existingComment) => existingComment !== comment,
    );
    setComments(updatedList);
    console.log(updatedList);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.postAuthor}>
          <Avatar borderOn src={author.avatarUrl} />
          <div className={styles.credentials}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {distancedDate}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === 'paragraph') {
            return <p key={content}>{content}</p>;
          } else if (type === 'link') {
            return (
              <p key={content}>
                <a href="#">{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewPost} className={styles.contentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={value}
          onChange={handleInputText}
          onInvalid={handleEmptyField}
          required
          name="comment"
          placeholder="Escreva seu comentário aqui..."
        />
        <button disabled={isValueEmpty} type="submit">
          Publicar
        </button>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </article>
  );
}
