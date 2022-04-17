import { commentService } from '../services'

export const getCommentHandler = async (req, res) => {
    let filters = req.query
    var result = await commentService.getComments()

    const filteredComment = result.filter(data => {
        let isValid = true;
        for(const key in filters) {
            isValid = isValid && data[key] == filters[key];
        }

        return isValid;
    })

    res.send(filteredComment)
}

export default {
    getCommentHandler
}
