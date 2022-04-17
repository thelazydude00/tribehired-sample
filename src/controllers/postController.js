import { postService, commentService } from '../services'
import TopPost from '../models/TopPost'

export const topPostHandler = async (req, res) => {
    try {
        const values = await Promise.all([
            postService.getPosts(),
            commentService.getComments()
        ])

        const posts = values[0]
        const comments = values[1]
        const newArr = posts.map((post) => {
            const filteredCommentsByPostId = comments.filter(x => x.postId === post.id)

            return new TopPost(
                post.id,
                post.title,
                post.body,
                filteredCommentsByPostId.length
            )
        })

        res.send(newArr)

    } catch(err) {
        res.sendStatus(500)
    }
}

export default {
    topPostHandler
}