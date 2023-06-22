import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Patidar",
    username: "yashpatidar",
    password: "gulla123",
    bio: "learning React",
    bookmarks: [],
    website: "https://github.com/yashpatidar17/The-social-media-App",
    profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
    following: [
      {
        _id: uuid(),
        fullName: "Iron Man",
        username: "ironman",
        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
      },
      // {
      //   _id: uuid(),
      //   fullName: "Hulk",
      //   username: "hulk",
      //   profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
      // },
      // {
      //   _id: uuid(),
      //   fullName: "Wanda Maximoff",
      //   username: "wanda",
      //   profileAvatar: "https://i.postimg.cc/bJBRwgXt/images-1.jpg",
      // },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Iron Man",
        username: "ironman",
        profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
      },
      {
        _id: uuid(),
        fullName: "Bruce Banner",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
      },
      {
        _id: uuid(),
        fullName: "Wanda Maximoff",
        username: "wanda",
        profileAvatar: "https://i.postimg.cc/bJBRwgXt/images-1.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Iron",
    lastName: "Man",
    username: "ironman",
    password: "3000",
    bio: "Resting in Peace",
    bookmarks: [],
    website: "https://github.com/yashpatidar17/The-social-media-App",
    profileAvatar: "https://i.postimg.cc/7Y892C2p/download.jpg",
    following: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      },
      {
        _id: uuid(),
        fullName: "Bruce Banner",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      },
      {
        _id: uuid(),
        fullName: "Bruce Banner",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
      },
      {
        _id: uuid(),
        fullName: "Wanda Maximoff",
        username: "wanda",
        profileAvatar: "https://i.postimg.cc/bJBRwgXt/images-1.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Wanda",
    lastName: "Maximoff",
    username: "wanda",
    password: "2000",
    bio: "Depends on mood",
    bookmarks: [],
    website: "https://github.com/yashpatidar17/The-social-media-App",
    profileAvatar: "https://i.postimg.cc/bJBRwgXt/images-1.jpg",
    following: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      }
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      },
      {
        _id: uuid(),
        fullName: "Bruce Banner",
        username: "hulk",
        profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bruce",
    lastName: "Banner",
    username: "hulk",
    password: "4000",
    bio: "Turns into green when i am angry",
    bookmarks: [],
    website: "https://github.com/yashpatidar17/The-social-media-App",
    profileAvatar: "https://i.postimg.cc/BndnSGyc/download.jpg",
    following: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      }
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Yash Patidar",
        username: "yashpatidar",
        profileAvatar: "https://i.postimg.cc/76VjbgBM/IMG20220709162937.jpg",
      },
      
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  
];
