const { default: TopPost } = require("../TopPost")

test("match object created value", () => {
    const obj = new TopPost(1, "post title 1", "post body 1", 5)
    expect(obj.post_id).toBe(1)
    expect(obj.post_title).toBe("post title 1")
    expect(obj.post_body).toBe("post body 1")
    expect(obj.total_number_of_comments).toBe(5)
})