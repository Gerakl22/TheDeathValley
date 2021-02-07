import createElement from "../layout/createElement";

export default function createTeam(person) {
  let boxTeamNode = createElement("div", "team__box");
  let imgTeamNode = createElement(
    "img",
    "team__img",
    null,
    person.imgUrl,
    "Photo no loading"
  );

  let resumeTeamNode = createElement("div", "team__resume");
  let nameTeamNode = createElement("h3", "team__name", person.name);
  let jobTeamNode = createElement("span", "team__job", person.job);
  let descriptionTeamNode = createElement(
    "p",
    "team__description",
    person.description
  );
  let appTeamNode = createElement("div", "team__app");
  let networkTeamNode = createElement("div", "team__network");

  for (let i = 0; i < person.href.length; i++) {
    let linkTeamNode = createElement(
      "a",
      "team__link",
      null,
      null,
      null,
      person.href[i]
    );

    let iconTeamNode = createElement("i", `team__icon ${person.icon[i]}`);

    linkTeamNode.appendChild(iconTeamNode);
    networkTeamNode.appendChild(linkTeamNode);
  }

  appTeamNode.appendChild(networkTeamNode);

  nameTeamNode.appendChild(jobTeamNode);

  resumeTeamNode.appendChild(nameTeamNode);
  resumeTeamNode.appendChild(descriptionTeamNode);
  resumeTeamNode.appendChild(appTeamNode);

  boxTeamNode.appendChild(imgTeamNode);
  boxTeamNode.appendChild(resumeTeamNode);

  return boxTeamNode;
}

