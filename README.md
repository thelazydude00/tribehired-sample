# Tribehired expressjs

Tribehired backend assessment

## Getting Started

### 1. Clone and Install
```bash
#clone the repo
git clone https://github.com/thelazydude00/tribehired-sample.git

# Navigate to clonned folder and install dependencies
cd tribehired-sample && yarn
```

### 2. Run Server
yarn start

### 3. Run Test
```bash
yarn test

# generate coverage report
yarn test:coverage
```

## sample response

#### [GET] /top_posts
```
[
    {
        "post_id": 1,
        "post_title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "post_body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "total_number_of_comments": 5
    },
    {
        "post_id": 2,
        "post_title": "qui est esse",
        "post_body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "total_number_of_comments": 5
    },
    {
        "post_id": 3,
        "post_title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "post_body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "total_number_of_comments": 5
    },
    {
        "post_id": 4,
        "post_title": "eum et est occaecati",
        "post_body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "total_number_of_comments": 5
    },
    {
        "post_id": 5,
        "post_title": "nesciunt quas odio",
        "post_body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "total_number_of_comments": 5
    },
    {
        "post_id": 6,
        "post_title": "dolorem eum magni eos aperiam quia",
        "post_body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "total_number_of_comments": 5
    },
    {
        "post_id": 7,
        "post_title": "magnam facilis autem",
        "post_body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        "total_number_of_comments": 5
    },
    {
        "post_id": 8,
        "post_title": "dolorem dolore est ipsam",
        "post_body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        "total_number_of_comments": 5
    },
    {
        "post_id": 9,
        "post_title": "nesciunt iure omnis dolorem tempora et accusantium",
        "post_body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        "total_number_of_comments": 5
    },
    {
        "post_id": 10,
        "post_title": "optio molestias id quia eum",
        "post_body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
        "total_number_of_comments": 5
    }
]
```

#### [GET] /comments
```
[
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }
]
```

#### [GET] /comments?email=Eliseo@gardner.biz
```
[
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
]
```