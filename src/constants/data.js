const comments = [
  // {
  //   id: 1,
  //   title: "This is the first post",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero mollitia veniam. Quo dignissimos dolorum qui, hic iure odio quibusdam ipsa alias atque omnis accusamus? Reprehenderit minima atque animi quia.",
  //   img: "non knonwn",
  //   views: 0,
  //   comments: [],
  // },
  // {
  //   id: 1,
  //   title: "This is the second post",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero mollitia veniam. Quo dignissimos dolorum qui, hic iure odio quibusdam ipsa alias atque omnis accusamus? Reprehenderit minima atque animi quia.",
  //   img: "non knonwn",
  //   views: 0,
  //   comments: [
  //     {
  //       id: 1,
  //       time: "20 July, 2022",
  //       username: "John Doe",
  //       commentText: "This is great",
  //       like: 0,
  //       dislike: 0,
  //       replies: [],
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   title: "This is the third post",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero mollitia veniam. Quo dignissimos dolorum qui, hic iure odio quibusdam ipsa alias atque omnis accusamus? Reprehenderit minima atque animi quia.",
  //   img: "non knonwn",
  //   views: 0,
  //   comments: [
  //     {
  //       id: 1,
  //       time: "21 July, 2022",
  //       username: "John Doe",
  //       commentText: "I am in love with this",
  //       like: 0,
  //       dislike: 0,
  //       replies: [
  //         {
  //           id: 1,
  //           time: "22 July, 2022",
  //           username: "Philip",
  //           replieText: "Me too, I'm so obssessed",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "1",
    body: "First comment",
    username: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2022-06-10T18:00:33.010+02:00",
  },
  {
    id: "2",
    body: "Firt comment first child",
    username: "Sparrow",
    userId: "2",
    parentId: "1",
    createdAt: "2022-05-10T18:00:33.010+02:00",
  },
  {
    id: "3",
    body: "Second comment",
    username: "Van Dick",
    userId: "3",
    parentId: null,
    createdAt: "2022-06-10T18:00:33.010+02:00",
  },
  {
    id: "4",
    body: "Second comment first child",
    username: "Jack",
    userId: "1",
    parentId: "2",
    createdAt: "2022-05-10T18:00:33.010+02:00",
  },
  {
    id: "5",
    body: "Second comment second child",
    username: "Jack",
    userId: "1",
    parentId: "2",
    createdAt: "2022-06-11T18:00:33.010+02:00",
  },
];

export default comments;
