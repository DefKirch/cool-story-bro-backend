"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "The blacklist",
          description:
            "For decades, ex-government agent Raymond “Red” Reddington (James Spader) has been one of the FBI's most wanted fugitives. Brokering shadowy deals for criminals across the globe, Red was known by many as “The Concierge of Crime.” Now, he's mysteriously surrendered to the FBI with an explosive offer: he will help catch a long-thought-dead terrorist, Ranko Zamani, under the condition that he speaks only to Elizabeth “Liz” Keen, an FBI proﬁler fresh out of Quantico. For Liz, it's going to be one hell of a ﬁrst day on the job.",
          backgroundColor: "#3a3a3a",
          color: "#e6e6e6",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Avatar: The Last Airbender",
          description:
            "Avatar: The Last Airbender, also known as Avatar: The Legend of Aang in some PAL regions, is an Emmy award-winning American animated television series that aired for three seasons on Nickelodeon and the Nicktoons Network. The series was created and produced by Michael Dante DiMartino and Bryan Konietzko, who served as executive producers along with Aaron Ehasz. Avatar is set in an Asian-influenced world of martial arts and elemental manipulation. The show drew on elements from East Asian, South Asian, and Western culture, making it a mixture of what were previously traditionally separate categories of Japanese anime and Western domestic cartoons.",
          backgroundColor: "#f0efeb",
          color: "#8b4513",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
