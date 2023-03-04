import PhaedraLogo from "assets/images/logos/phaedra.jpeg";
import BrainxLogo from "assets/images/logos/brainxtech.png";
import CodenyaLogo from "assets/images/logos/codenya.png";
import BrainplowLogo from "assets/images/logos/brainplow.jpg";
import SchoolInfo from "assets/images/logos/govt.png";
import UniLogo from "assets/images/logos/fast.png";
import UniUom from "assets/images/logos/uom1.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
 /* {
    title: " Solutions",
    alt: "PS image",
    role: "Senior oftware Engineer",
    skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
    period: "2019 - Present",
    logo: PhaedraLogo
  } */
  ];
export const institutes = [
  {
    short_title: "Dr.M.G.R. Educational and Research Institute",
    title: "Dr.M.G.R. Educational and Research Institute",
    alt: "Mr MGR",
    role: "MCA - Master of Computer Application",
    skills: ["C++", "Java", "web development", "data structures", "DBMS"],
    period: "2022 - 2024",
    startingYear: "2022",
    logo: UniLogo,
   /* awards: [
      {
        title: "Speed Programming Battle",
        description:
          "Knowledge of data structures, algorithms, and programming languages such as Java, Python, and C++",
        date: "May 1, 2015"
      },
      {
        title: "Silver Medal",
        description:
          "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
        date: "May 1, 2014"
      },
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ] */
  },


 {
    short_title: "University of Madras",
    title: "University of Madras",
    alt: "University of Madras",
    role: "B.Com - Bachelor of Commerce",
    skills: ["FinancialAccounting", "CostAccounting", "Statistics"],
    period: "2018 - 2021",
    startingYear: "2018",
    logo: UniUom,

 },


 {
    short_title: "Govt Hr Sec school",
    title: "Govt Hr Sec school",
    alt: "University of Madras",
    role: "HSC - Higher Secondary School Certificate",
    skills: ["Computer Science", "Accountancy"],
    period: "2018",
    startingYear: "2018",
    logo: SchoolInfo,

 }
];

export const skills = [

  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
 
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },


  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
 
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
