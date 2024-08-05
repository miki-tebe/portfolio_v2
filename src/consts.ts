import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mikiyas Tibebu",
  EMAIL: "mikitebe123@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Welcome to my personal website! I am a software engineer based in Addis Ababa, Ethiopia. I am passionate about web development, and I love to learn new things. I am currently working as a backend developer at a startup called Auction Ethiopia.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my thoughts and experiences.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/chewag",
  },
  {
    NAME: "github",
    HREF: "https://github.com/miki-tebe",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/mikiyas-t-43801519a",
  },
];
