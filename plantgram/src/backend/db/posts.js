import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Witness this amazing sunset",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpatidar",
    fullName: "Yash Patidar",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    postImage: "https://i.postimg.cc/zBbXZMLY/IMG20230611192722-01.jpg",
    createdAt: "2023-06-18",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Iron Man",
        username: "ironman",

        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Hulk",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Witness this amazing sunset",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpatidar",
    fullName: "Yash Patidar",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    postImage: "https://i.postimg.cc/zBbXZMLY/IMG20230611192722-01.jpg",
    createdAt: "2023-04-18",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Iron Man",
        username: "ironman",

        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Hulk",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "frame always matter",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ironman",
    fullName: "Iron Man",
    profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
    postImage: "https://i.postimg.cc/fRFCCShW/IMG-20200215-183801-01.jpg",
    createdAt: "2023-06-20",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Yash Patidar",
        username: "yashpatidar",

        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Hulk",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpatidar",
    fullName: "Yash Patidar",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    postImage: "",
    createdAt: "2023-06-16",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Amazing Man",
        fullName: "Iron Man",
        username: "ironman",

        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Woah lit!",
        fullName: "Hulk",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Sokovian native Wanda Maximoff and her twin brother Pietro survived an explosion in their apartment building that killed both of their parents. Another missile landed, but did not explode. It terrorized them for days as they remained stuck in the rubble, with the deadly device in front of them, the name Stark emblazed on its side.",
    likes: {
      likeCount: 28,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wanda",
    fullName: "Wanda Maximoff",
    profileAvatar: "https://i.postimg.cc/bJBRwgXt/images-1.jpg",
    postImage: "",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Amazing Wand",
        fullName: "Iron Man",
        username: "ironman",

        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Woah lit!",
        fullName: "Hulk",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I am Taking some sessions to control my Aager but some time i like to be angry",
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hulk",
    fullName: "Hulk",
    profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
    postImage: "",
    createdAt: "2023-06-22",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Amazing Wanda",
        fullName: "Iron Man",
        username: "ironman",

        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
