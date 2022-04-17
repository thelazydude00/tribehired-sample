import { commentService, postService } from '../../services'
import postController from '../postController'

describe("validate method for topPostHandler", () => {
    test("should 200 and return correct value", async () => {
        const mPosts = [
            {
                "userId": 1,
                "id": 1,
                "title": "post title 1",
                "body": "post body 1"
            },
        ]
        const mComments = [
            {
                "postId": 1,
                "id": 1,
                "name": "User 1",
                "email": "user1@gmail.com",
                "body": "comment 1"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "User 2",
                "email": "user2@gmail.com",
                "body": "comment 2"
            },
        ]

        jest.spyOn(postService, 'getPosts').mockResolvedValueOnce(mPosts)
        jest.spyOn(commentService, 'getComments').mockResolvedValueOnce(mComments)

        const mReq = {};
        const mRes = {
            status: jest.fn().mockReturnThis(), 
            send: jest.fn().mockReturnThis({})
        };
    
        await postController.topPostHandler(mReq, mRes)

        expect(mRes.send).toHaveBeenCalledTimes(1)
        expect(mRes.send).toBeCalledWith([
            {
                "post_body": "post body 1",
                "post_id": 1,
                "post_title": "post title 1",
                "total_number_of_comments": 2,
            }
        ])
    })

    test("should 500 if either posts data or comments data is empty", async () => {
        const mComments = []

        jest.spyOn(postService, 'getPosts').mockRejectedValueOnce(new Error("unable to fetch post data"))
        jest.spyOn(commentService, 'getComments').mockResolvedValueOnce(mComments)

        const mReq = {};
        const mRes = {
            status: jest.fn().mockReturnThis(), 
            send: jest.fn().mockReturnValue({}),
            sendStatus: jest.fn().mockReturnThis(),
        };
    
        await postController.topPostHandler(mReq, mRes)

        expect(mRes.sendStatus).toHaveBeenCalledTimes(1)
    })
})