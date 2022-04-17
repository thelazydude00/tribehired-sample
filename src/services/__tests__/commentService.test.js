import axios from 'axios'
import commentService from '../commentService'

jest.mock("axios");

describe("commentService", () => {
    test("getComments", async () => {
        axios.get.mockResolvedValue({ 
            data: [
                {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                    "postId": 4,
                    "id": 17,
                    "name": "eos est animi quis",
                    "email": "Preston_Hudson@blaise.tv",
                    "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
                },
            ] 
        })

        const response = await commentService.getComments()

        expect.arrayContaining(response)
    });
})