import useServer from '../hooks/useServer.js'
import PostMain from './PostMain'

import './PostsMain.css'
import './Navbar.css'


const PostsMain = ({ posts, getPosts }) => {
  const { post, delete: destroy } = useServer()
  // const [news, setNews] = useState(posts) //este era uno de los problema!!

  const likePostHandler = async (id) => {
    await post({ url: `/news/like/${id}` })
    getPosts()
  }

  const dislikePostHandler = async (id) => {
    await post({ url: `/news/dislike/${id}` })
    getPosts()
  }

  const deleteNewsHandler = async (id) => {
    await destroy({ url: `/news/${id}` })
    getPosts()
  }

  return (
    <>
      {
        posts.map((new_) => //aquí cambiamos de news.(anterior codigo) a el renombrado posts
          <PostMain
            key={new_.id}
            news={new_}
            like={likePostHandler}
            dislike={dislikePostHandler}
            deletes={deleteNewsHandler}
            title={new_.title}
            content={new_.content}
            photo={new_.photo}
          />
        )
      }
    </>
  )
}
export default PostsMain

