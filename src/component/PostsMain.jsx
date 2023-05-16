import React, { useState } from 'react';
import PostMain from './PostMain';
import useServer from '../hooks/useServer'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './PostsMain.css'
import './Navbar.css'

const PostsMain = ({ posts, getPosts, filteredPosts }) => {
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const { post, delete: destroy } = useServer()

  const likePostHandler = async (id) => {
    await post({ url: `/news/like/${id}` })
    getPosts()
  }

  const dislikePostHandler = async (id) => {
    await post({ url: `/news/dislike/${id}` })
    getPosts();
  };

  const deleteNewsHandler = async (id) => {
    await destroy({ url: `/news/${id}` })
    getPosts();
  }

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  const handleLikeClick = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "1") {
      setSelectedOrder("likes");
    } else if (selectedValue === "2") {
      setSelectedOrder("original");
    }
  };

  const sortedPosts = [...posts]
    .sort((a, b) => {
      if (selectedOrder === "likes") {
        return b.likes - a.likes;
      } else if (selectedOrder === "original") {
        return posts.indexOf(a) - posts.indexOf(b);
      }

      return 0;
    })
    .filter((post) => !selectedTheme || post.theme === selectedTheme);

  return (
    <>
      <div className="style-buttons">
        <Button
          className={selectedTheme === null ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick(null)}>
          Todos
        </Button >
        <Button className={selectedTheme === 'politics' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('politics')}>Política</Button>
        <Button className={selectedTheme === 'sports' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('sports')}>Deporte</Button>
        <Button className={selectedTheme === 'culture' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('culture')}>Cultura</Button>
        <Button className={selectedTheme === 'economy' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('economy')}>Economía</Button>
        <Button className={selectedTheme === 'education' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('education')}>Educación</Button>
        <Button className={selectedTheme === 'society' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('society')}>Sociedad</Button>
        <Button className={selectedTheme === 'technology' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('technology')}>Tecnología</Button>
        <Button className={selectedTheme === 'science' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('science')}>Ciencia</Button>
        <Button className={selectedTheme === 'gaming' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('gaming')}>Gaming</Button>
        <Button className={selectedTheme === 'medicine' ? 'bi active' : 'bi'} variant="light" onClick={() => handleThemeClick('medicine')}>Medicina</Button>
      </div>
      <div className='bg-light'>
  <Form.Select aria-label="Default select example" onChange={handleLikeClick} className="custom-select">
    <option>Ordenar por...</option>
    <option value="1">Más valorados</option>
    <option value="2">Más recientes</option>
  </Form.Select>
</div>

      {sortedPosts.map((new_) => (
        <PostMain
          key={new_.id}
          news={new_}
          like={likePostHandler}
          dislike={dislikePostHandler}
          deletes={deleteNewsHandler}
          title={new_.title}
          content={new_.content}
          photo={new_.photo}
          theme={new_.theme}
          getPosts={getPosts}
        />
      ))}
    </>
  )
}

export default PostsMain
