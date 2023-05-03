import { apiURL } from "../config";
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import useServer from "../hooks/useServer";
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './PostsMain.css'
import './Navbar.css'

function PostMain({ new_ , deletePost, likePost, dislikePost, hasImage, photo, title, content, theme }) {
  const { patch } = useServer();
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editedTheme, setEditedTheme] = useState(theme);

  const deleteButtonHandler = (e) => {
    deletePost(new_.id);
  };

  const handleLikeClick = () => {
    likePost(new_.id);
  };

  const handleDislikeClick = () => {
    dislikePost(new_.id);
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditedTitle(new_.title);
    setEditedContent(new_.content);
    setEditedTheme(new_.theme);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await patch({
      url: `/news/${new_.id}`,
      body: formData,
      hasImage: true,
    });
    setEditing(false);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  const handleEditedTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditedContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleEditedThemeChange = (e) => {
    setEditedTheme(e.target.value);
  };

  const { isAuthenticated } = useAuth()

  if (editing) {
    return (
      <form onSubmit={handleEditSubmit}>
        <Form.Control
          type="text"
          name="title"
          value={editedTitle}
          onChange={handleEditedTitleChange}
        />
        <Form.Control
          as="textarea"
          name="content"
          value={editedContent}
          onChange={handleEditedContentChange}
        />
        <Form.Control
          type="text"
          name="theme"
          value={editedTheme}
          onChange={handleEditedThemeChange}
        />
        <Button type="submit" variant="primary">Guardar cambios</Button>
        <Button type="button" variant="secondary" onClick={handleEditCancel}>Cancelar</Button>
      </form>
    );
  }

  return (
    <Card className='postmain modal-shadow'>
      {hasImage && <Card.Img className='postmain-img' variant="top" src={`${apiURL}/photos/${photo}`} alt={title} />}
      <Card.Body >
        <h1 className='card-title' >
          {new_.title}
        </h1>
        <Card.Text >
          {new_.content}
        </Card.Text>
        <div className='nav-container_division'>
          <div>
            {isAuthenticated && (
              <Button onClick={handleEditClick}>
                Editar
              </Button>
            )}
            {isAuthenticated && (
              <Button onClick={deleteButtonHandler}>
                Eliminar
              </Button>
            )}
          </div>
          <span>{new_.likes}</span>

          <Button onClick={handleDislikeClick} className="bi bi-hand-thumbs-down-fill" variant="light"> Dislike </Button>
          <Button onClick={handleLikeClick} className="bi bi-hand-thumbs-up-fill" variant="light"> likes </Button>
          <span>{new_.dislikes}</span>
        </div>


      </Card.Body>
    </Card>
  );
}

export default PostMain;