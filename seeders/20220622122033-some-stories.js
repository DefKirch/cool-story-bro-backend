"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "About Raymond Reddington",
          content:
            "Raymond Reddington is a main character in the NBC series The Blacklist. Reddington is a criminal mastermind, making it to #4 and later to #1 on the FBI's Ten Most Wanted Fugitives, who suddenly turns himself in after 20+ years of evading the FBI.",
          imageUrl:
            "https://static.wikia.nocookie.net/blacklist/images/b/b6/Raymond-Red-Reddington.jpg/revision/latest/scale-to-width-down/350?cb=20191011224017",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "A story about Tom Keen",
          content:
            "When he was 3 years old, Christopher Hargrave was kidnapped from his parents Susan and Howard Hargrave. His mother mentioned it has been 28 years since his disappearance, which makes him 31 years old by the event of “Susan Hargrave”. As a foster child by the name of Jacob Phelps, he was a petty thief who was eventually recruited at a young age by an underground spy trainer known as the Major in 1994. As an adult, he was hired by Raymond Reddington to keep an eye on Elizabeth Keen, however Jacob got romantically involved with Elizabeth which led Reddington to fire him. To protect himself and to remain with Elizabeth, Jacob went to Milos Kirchoff and the Major reassigned Jacob's contract to Milos when he offered to double Red's original price. As part of his cover, Phelps took the identity of Thomas Vincent Keen and started working as a fourth grade teacher. He and Liz eventually married and made plans to adopt a child. After his death at the hands of Ian Garvey and Elizabeth's death at the hands of Elias VanDyke, their daughter Agnes Keen is being taking care of by Harold Cooper.",
          imageUrl:
            "https://static.wikia.nocookie.net/blacklist/images/1/1e/Tom_Keen.png/revision/latest/scale-to-width-down/350?cb=20170419194751",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Aang the Airnomad",
          content:
            "A massive statue of Avatar Aang was created on Aang Memorial Island, a small island located in Yue Bay. A teenage Aang is depicted wearing Air Nomad monk robes and holding a staff with the airbending symbol on top, overlooking the city he founded with the help of his friends. The statue was created and donated by the Fire Nation as a sign of peace and goodwill. As is tradition, a statue of Aang was also added to the inner sanctuary of the Southern Air Temple in order to keep the line of statues of past Avatars up to date. His statue stood in the middle of the assemblage.",
          imageUrl:
            "https://static.wikia.nocookie.net/avatar/images/0/0d/Aang%27s_statue.png/revision/latest/scale-to-width-down/200?cb=20121107103705",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Zuko the Fire Nation Royal",
          content:
            "Zuko is a Fire Nation royal and firebending master who reigned as Fire Lord from 100 AG until his abdication in 167 AG. He is the eldest child and only son of Princess Ursa and Fire Lord Ozai. Originally the primary enemy of Team Avatar, Zuko devoted three years to trying to capture the long-lost Avatar to end his banishment and regain his honor as Crown Prince of the Fire Nation. He is recognizable by the distinctive burn scar on the left side of his face, which was given to him by his father, Ozai, shortly before his banishment as a result of an incident in which he unintentionally disrespected his father by speaking out of turn and refusing to duel him.",
          imageUrl:
            "https://static.wikia.nocookie.net/avatar/images/b/b9/Zuko_fight.png/revision/latest/scale-to-width-down/200?cb=20140517113732",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
