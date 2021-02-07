import showAndHidePopUp from "../src/Components/PopUp";
import initMapYandex from "../src/Components/YandexMap";
import createTeam from "../src/Components/Team";

import "./styles/style.scss";

const arrImgForBlockWorks = [
  "/img/works_1.png",
  "/img/works_2.png",
  "/img/works_3.png",
  "/img/works_4.png",
  "/img/works_5.png",
  "/img/works_6.png",
];

const teamData = [
  {
    imgUrl: "/img/team_1.png",
    name: "Lily Suzuki",
    job: " / Artist",
    description:
      "Artist develops desktop publishing, website design, animation and video game production",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
  {
    imgUrl: "/img/team_2.png",
    name: "Al Rayhan",
    job: " / UI Designer",
    description:
      "Lorem Ipsum is not simply is an action designer random text It has roots ina peace",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
  {
    imgUrl: "/img/team_3.png",
    name: "Bob Marley",
    job: " / Team Lead",
    description:
      "Provides guidance, instruction, direction and leadership to a group of individuals (the team)",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
  {
    imgUrl: "/img/team_4.png",
    name: "Tim Raymer",
    job: " / Architect",
    description: "Central character in the creation of information systems ",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
  {
    imgUrl: "/img/team_5.png",
    name: "Liza Minelli",
    job: " / Qa Tester",
    description:
      "Responsible for the quality of software development and deployment",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
  {
    imgUrl: "/img/team_6.png",
    name: "Kate Suzuki",
    job: " / Programmer",
    description: "Tasked with designing and creating software programs",
    href: [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.instagram.com",
      "https://www.mail.ru",
    ],
    icon: [
      "fa fa-facebook",
      "fa fa-twitter",
      "fa fa-instagram",
      "fa fa-envelope-o",
    ],
  },
];

const blockTeamNode = document.querySelector(".team__block");

showAndHidePopUp(arrImgForBlockWorks);
window.initMapYandex = initMapYandex;

for (let i = 0; i < teamData.length; i++) {
  blockTeamNode.appendChild(createTeam(teamData[i]));
}


