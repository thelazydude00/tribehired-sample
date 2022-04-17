export default class TopPost {
    constructor(postId, postTitle, postBody, totalNumberOfComments) {
        this.post_id = postId
        this.post_title = postTitle
        this.post_body = postBody
        this.total_number_of_comments = totalNumberOfComments
    }
}