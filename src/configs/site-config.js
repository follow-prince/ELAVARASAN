import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()}Made by Prince.`,
  author: {
    name: "Prince",
    accounts: [
      {
        url: "https://github.com/follow-prince",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/_follow_prince",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.instagram.com/follow.prince",
        label: "Instagram Account",
        type: "black",
        icon: <FaInstagram />
      },
      {
        url: "https://www.linkedin.com/in/elavarasa003/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      
      {
        url: "mailto:elavarasa.003@gmail.com",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
