
export type ProjectCard = {
    title: string;
    date: string;
    description: string;
    imageSrc: string;
    alt: string;
    githubLink?: string;
    downloadLink?: string;
    playLink?: string;
}


const project_cards: ProjectCard[] = [
    {
        title: "Compiler for the Mini Language",
        date: "April 2024 - June 2024",
        description: "For CSC 431, a partner and I constructed a compiler in Java for the Mini language (a programming language similar to C) down to ARMv8 Assembly. " +
            "We also wrote a paper about the process, which is attached and describes everything we did, including static semantic analysis, intermediate representation generation, and finally ARM generation." +
            "This was easily one of the hardest projects I've ever worked on, and we were both immensely proud to have completed it.",
        imageSrc: "/assets/images/sample_mini_program.png",
        alt: "Sample Mini Program",
        downloadLink: "/assets/pdfs/compiler.pdf"
    },
    {
        title:"Migration Network Research",
        date: "April 2024 - September 2024",
        description: "For my senior project, I worked on researching migration networks with my group advised by Professor Theresa Migler." +
            "This led us to creating a graph with countries as the nodes and number of migrants between countries as the edges, and then analyzing said graph to see what factors influence migration." +
            "My partner and I analyzed the effects of politics in the form of democratic index on the network, while our other two groupmates analyzed languages.",
        imageSrc: "/assets/images/Migration Network 2015.png",
        alt: "Migration Network Research",
        githubLink: "https://github.com/HenryHorse/MigrationNetworks"
    },
    {
        title: "Catan AI Simulation",
        date: "May 2024 - June 2024",
        description: "As a group project for CSC 480, my group and I created a version of the board game Settlers of Catan using Pygame, and then created AI agents to play the game and compete against each other." +
            "I worked on the underlying board game structure by making a custom graph and added visualization using Pygame." +
            "This includes the initialization of the harbors, which was a challenge to make reasonably fair." +
            "I also worked on bug fixing.",
        imageSrc: "/assets/images/catan.png",
        alt: "Catan Board Image",
        githubLink: "https://github.com/HenryHorse/Catan"
    },
    {
        title: "Sun Bird",
        date: "March 2024",
        description: "Sun Bird is a group project I did with my roommate and two others for CSC 378: Interactive Entertainment Engineering." +
            "It is a vertical shoot 'em up with art done by yours truly and a killer soundtrack done by my roommate." +
            "I also worked on the moving background with procedural generation, the health bar, and the animations." +
            "Play with audio and click full screen on the bottom right." +
            "Controls are WASD to move, click to shoot in cursor direction, and space for super ability.",
        imageSrc: "/assets/images/Sun Bird.jpeg",
        alt: "Sun Bird Image",
        playLink: "https://emumangames.itch.io/sun-bird"
    },
    {
        title: "Johnrey",
        date: "February 2024",
        description: "Johnrey is a game my roommate and I made for CSC 378: Interactive Entertainment Engineering." +
            "It's kind of a joke game with a western cowboy style narration done in the background by me." +
            "This was my first time using Unity, and I learned a lot." +
            "My roommate and I had a great time making it, so I hope you enjoy." +
            "Play with audio and click full screen on the bottom right. " +
            "Controls are A and D (or arrow keys) to move, space to jump, and left click to shoot an arrow in the direction of the cursor." +
            "You can wall jump and shoot enemy projectiles. I recommend playing with a mouse.",
        imageSrc: "/assets/images/Johnrey.jpeg",
        alt: "Johnrey Image",
        githubLink: "https://github.com/EmuMan/johnrey",
        playLink: "http://users.csc.calpoly.edu/~sdaijava/johnrey/"
    }
];

export default project_cards;