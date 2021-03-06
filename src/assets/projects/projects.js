const projects = [
    {
      title: "Endeavor",
      image: "/images/Endeavor_Admin_Dashboard.jpg",
      gifImage: "/gifs/Endeavor_Admin_Demo.gif",
      description: "A Full-Stack volunteer management web app designed and built for Pursuit, a non-profit organization, handling events, volunteers and mentoring relations. This app gives the volunteer's manager tools to keep their work centralized in one place and instant email notification",
      techs: "Backend: Node, PostgreQSL, Express and SendGrid. Frontend: React, Chart.js, mix of Bootstrap and CSS",
      live: "https://endeavor-app.herokuapp.com/",
      github: "https://github.com/Briahana-Mauge/Endeavor",
    },
    {
      title: "Fashion Footprint",
      image: "/images/Fashion_Footprint.png",
      gifImage: "/gifs/FF_Demo.gif",
      description: "A Full-Stack app designed to reduce the error of trends prediction into the Fashion Industry which is the second-most polluter and water consumer worldwide. Fashion Footprint was founded to reduce the overproduction in the Fashion industry which is estimate to 30% by allowing customers to choose the trends and styles they want to see in stores for future seasons.",
      techs: "Backend: Node, PostgreQSL, Express. Frontend: React, mix of Bootstrap and CSS",
      live: "https://fashion-fprint.herokuapp.com/",
      github: "https://github.com/AminesCodes/Fashion-Sustainability",
    },
    {
      title: "SuitApp",
      image: "/images/SuitApp.png",
      gifImage: "/gifs/SuitApp_Demo.gif",
      description: "A Full-Stack social media app founded on the idea of bringing together the most passionate and creative minds in the world of Cosplay and giving them the tools to reach a wide audience of fans who appreciate and celebrate their work",
      techs: "Backend: Node, PostgreQSL, Express. Frontend: React, mix of Bootstrap and CSS",
      live: "https://suit-app.herokuapp.com/",
      github: "https://github.com/AminesCodes/Suit-App-For-Heroku",
    },
    {
      title: "TV Show WatchList",
      image: "/images/TV_Show_WatchList.png",
      gifImage: "/gifs/TWL_Demo.gif",
      description: "A Full-Stack app designed to helps people decide what to watch next, mostly by reading comments on a selected show or just by referring to how many users have watched it",
      techs: "Backend: Node, PostgreQSL, Express. Frontend: React, mix of Bootstrap and CSS",
      live: "https://tv-show-watchlist.herokuapp.com/",
      github: "https://github.com/AminesCodes/TV-Show-WatchList",
    },
    {
      title: "Escape The Dungeon",
      image: "/images/Escape_The_Dungeon.png",
      gifImage: "/gifs/EscapeDungeon_Demo.gif",
      description: "A three level word puzzle designed to improve vocabulary and spelling skills, where the player guesses a word by clicking letters",
      techs: "Vanilla Javascript, HTML and CSS - Frontend application",
      live: "https://aminescodes.github.io/Escape-The-Dungeon/",
      github: "https://github.com/AminesCodes/Escape-The-Dungeon",
    },
    {
      title: "Pokemon Battle Simulator",
      image: "/images/Pokemon_Battle.png",
      // gifImage: "/gifs/_Demo.gif",
      description: "A simple battle simulator that loads random Pokemon form the Pokemon API with their specific information where the player can pick their Pokemon moves to attack the opponent Pokemon played by the computer.",
      techs: "Vanilla Javascript, HTML and CSS - Front end application",
      live: "https://aminescodes.github.io/Pokemon-Battle-Simulator/",
      github: "https://github.com/AminesCodes/Pokemon-Battle-Simulator",
    },
    {
      title: "Memory Flex",
      image: "/images/Memory_Game.png",
      // gifImage: "/gifs/_Demo.gif",
      description: "A card app designed to improve the short term memory / visual memory. The app has five levels where the player has to match pars of cards.",
      techs: "Vanilla Javascript, HTML and CSS - frontend application",
      live: "https://aminescodes.github.io/Memory-Flex/",
      github: "https://github.com/AminesCodes/Memory-Flex",
    },
    {
      title: "Tic Tac Toe",
      image: "/images/Tic_Tac_Toe.png",
      // gifImage: "/gifs/_Demo.gif",
      description: "The world famous game where the player has to align 3 of their marks to win. The app can be played by two players or versus the computer (which will pick moves randomly)",
      techs: "Vanilla Javascript, HTML and CSS - frontend application",
      live: "https://aminescodes.github.io/Tic-Tac-Toe_HTML-version/",
      github: "https://github.com/AminesCodes/Tic-Tac-Toe_HTML-version",
    },
];

// const resumeLink = 'https://docs.google.com/document/d/e/2PACX-1vSi7zh_27IXMNB2KJ5dStB8C57fBdRtAM3daF03Db0SZ4l_qXFbkFOAvT5l4PrJ4fkc1z_8OUQWEdVI/pub';
// converting a google doc link to display s PDF: replace “edit?usp=sharing” with “export?format=pdf” instead for downloads.
const resumeLinkDownload = 'https://docs.google.com/document/d/1wf0qpzs62mBlnMD9G0s1TMLAPPE-MlTalJEO0arOuz8/export?format=pdf';
const resumeLink = 'https://docs.google.com/document/d/1wf0qpzs62mBlnMD9G0s1TMLAPPE-MlTalJEO0arOuz8/export?format=pdf';
const embedded = 'https://docs.google.com/document/d/e/2PACX-1vSi7zh_27IXMNB2KJ5dStB8C57fBdRtAM3daF03Db0SZ4l_qXFbkFOAvT5l4PrJ4fkc1z_8OUQWEdVI/pub?embedded=true'

module.exports = {
  projects, 
  resumeLink,
  resumeLinkDownload,
  embedded
};