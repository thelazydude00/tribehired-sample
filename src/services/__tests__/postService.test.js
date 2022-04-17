import axios from 'axios'
import postService from '../postService'

jest.mock("axios");

describe("commentService", () => {
    test("getPosts", async () => {
        axios.get.mockResolvedValue({ 
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
            ]
        })

        const response = await postService.getPosts()

        expect.arrayContaining(response)
    });

    test("getPost with valid arg", async () => {
        axios.get.mockResolvedValue({ 
            data: {
                "userId": 7,
                "id": 70,
                "title": "voluptatem laborum magni",
                "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
              }
        })

        const response = await postService.getPost(70)

        expect(response).not.toBeNull()
        expect(response).not.toBeUndefined()
    });


    test("getPost with invalid arg", async () => {
        axios.get.mockResolvedValue({ 
            data: {}
        })

        const response = await postService.getPost("abc")

        expect(response).toEqual({})
    });
})