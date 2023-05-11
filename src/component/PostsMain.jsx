import React from 'react';
import PostMain from './PostMain';
import './PostsMain.css';
import './Navbar.css';
import useServer from '../hooks/useServer.js';

const PostsMain = ({ posts, getPosts }) => {
  const { post, delete: destroy } = useServer()

  const likePostHandler = async (id) => {
    await post({ url: `/news/like/${id}` });
    getPosts();
  };

  const dislikePostHandler = async (id) => {
    await post({ url: `/news/dislike/${id}` });
    getPosts();
  };

  // const editNewsHandler = async (id) => {
  //   await patch ({ url: `/news/${id}`});
  //   getPosts();
  // };

  const deleteNewsHandler = async (id) => {
    await destroy({ url: `/news/${id}` });
    getPosts();
  };

  // Ordenar el array de posts por más likes
  const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);

  return (
    <>
      {
        sortedPosts.map((new_) =>
          <PostMain
            key={new_.id}
            news={new_}
            like={likePostHandler}
            dislike={dislikePostHandler}
            deletes={deleteNewsHandler}
            // edit={editNewsHandler}
            title={new_.title}
            content={new_.content}
            photo={new_.photo}
          />
        )
      }
    </>
  );
};

export default PostsMain;
