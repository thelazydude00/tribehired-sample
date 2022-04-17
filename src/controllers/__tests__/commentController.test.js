import { commentService } from '../../services'
import commentController from '../commentController'

describe("validate method for getCommentHandler", () => {
    test("call without query", async () => {
        const mComments = [
            {
                "postId": 1,
                "id": 1,
                "name": "user 1",
                "email": "Eliseo@gardner.biz",
                "body": "comment 1"
            }
        ]

        jest.spyOn(commentService, 'getComments').mockResolvedValueOnce(mComments)

        const mReq = { query: {} };
        const mRes = {
            status: jest.fn().mockReturnThis(), 
            send: jest.fn().mockReturnThis({})
        };

    
        await commentController.getCommentHandler(mReq, mRes)

        expect(mRes.send).toHaveBeenCalledTimes(1)
        expect(mRes.send).toBeCalledWith(mComments)
    })

    test("should 200 with filter param", async () => {
        const mComments = [
            {
                "postId": 1,
                "id": 1,
                "name": "user 1",
                "email": "Eliseo@gardner.biz",
                "body": "comment 1"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "user 2",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "comment 2"
            },
        ]

        jest.spyOn(commentService, 'getComments').mockResolvedValueOnce(mComments)

        const mReq = { query: {
            name: "user 2"
        } };

        const mRes = {
            status: jest.fn().mockReturnThis(), 
            send: jest.fn().mockReturnThis({})
        };

    
        await commentController.getCommentHandler(mReq, mRes)

        expect(mRes.send).toHaveBeenCalledTimes(1)
        expect(mRes.send).toBeCalledWith([
            {
                "postId": 1,
                "id": 2,
                "name": "user 2",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "comment 2"
            }
        ])
    })
})