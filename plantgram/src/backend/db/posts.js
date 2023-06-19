import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "vitness this amazing sunset",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpatidar",
    fullName: "Yash Patidar",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066367/frittr/vada-pav_g0u58t.webp",
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
    content: "frame always matter",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ironman",
    fullName: "Iron Man",
    profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066367/frittr/vada-pav_g0u58t.webp",
    createdAt: "2023-06-19",
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
    content: "Broken Glider",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpatidar",
    fullName: "Yash Patidar",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066367/frittr/vada-pav_g0u58t.webp",
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
];
