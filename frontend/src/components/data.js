import javascriptIcon from '../images/logos/javascript.svg';
import reactIcon from '../images/logos/react.svg';
import reduxIcon from '../images/logos/redux.svg';
import html5Icon from '../images/logos/html5icon.svg';
import cssIcon from '../images/logos/css3.svg';
import pythonIcon from '../images/logos/python.svg';
import nodejsIcon from '../images/logos/Node.js_logo.svg';

import bgImg from '../images/projects/bridgegood-small.jpg';
import bgImgBig from '../images/projects/bridgegood-big.jpg';
import golImg from '../images/projects/gol-small.jpg';
import golImgBig from '../images/projects//gol-big.jpg';
// import bblsImg from '../images/projects/bubblesImg.png'
import discSm from '../images/projects/dis-small.jpg';
import discBig from '../images/projects/dis-big.jpg';
import tsTodoSm from '../images/projects/ts-todo-small.jpg';
import tsTodoBig from '../images/projects/ts-todo-big.jpg';

import iraPic from '../images/ira-pic.jpg';
import justinPic from '../images/justin-pic.jpg';
import alexPic from '../images/alex-pic.jpg';

export const skillsData = [
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Redux', icon: reduxIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: cssIcon },
]

export const projectData = [
    {   
        name: 'BRIDGEGOOD',
        detail: `A reservation app where users can reserve a space at the BRIDGEGOOD Creative Studio to come in and study and or work as a designer. I created the Front-end using react and redux to make the reservation page, the back-end using Node.js to store the data to make a reservation, and tested the code with Jest.`,
        img: bgImg,
        link: 'https://www.bridgegood.com/reservation',
        modalImg: bgImgBig,
        tag: '',
        tech: 'React | Redux | Node.js', 
    },
    {
        name: `Conway's Game of Life`,
        detail: 'A zero-player game, its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.',
        img: golImg,
        link: 'https://game-of-life-again.vercel.app/',
        modalImg: golImgBig,
        tag: 'a cellular automaton game',
        tech: 'JavaScript | React',
    },
    {
        name: 'Discord Clone',
        detail: 'Made a Discord page to practice Tailwindcss',
        img: discSm,
        link: 'https://discord-clone-eosin.vercel.app/',
        modalImg: discBig,
        tag: 'Tailwindcss v3.0 practice',
        tech: 'React | Tailwindcss ',
    },
    {
        name: 'Typescript Todo',
        detail: 'Used Typescript to make a Todo app with react',
        img: tsTodoSm,
        link: 'https://react-typescript-todo-dnd.vercel.app/',
        modalImg: tsTodoBig,
        tag: 'Typescript with React',
        tech: 'Typescript | React',
    },
    // {
    //     name: 'Bubbles',
    //     detail: 'A place I worked once!',
    //     img: bblsImg,
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     tag: '',
    //     tech: 'React | Redux ',
    // },
    // {
    //     name: 'Sleep Tracker',
    //     detail: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     tag: '',
    //     tech: 'React | Redux | Node.js',
        
    // },
    // {
    //     name: 'Family Recipes', 
    //     detail: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     tag: '',
    //     tech: 'React | Redux | Node.js',
    // },
    // { 
    //     name: 'MedCabinet', 
    //     detail: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     tag: '',
    //     tech: 'React | Redux | Node.js',
    // },
    // {
    //     detail: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     name: 'Notes Notes Notes',
    //     tag: '',
    //     tech: 'React | Node.js',
    // },
    // {
    //     detail: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/',
    //     modalImg: '',
    //     name: '30 Day Challenge',
    //     tag: '',
    //     tech: 'React | Node.js', 
    // },
    // {
        
        
    //     detail: 'All the places I worked',
    //     img: '',
    //     link: '',
    //     modalImg: '',
    //     name: 'My Resume',
    //     tag: '',
    //     tech: 'PDF', 
    // },
]

export const testData = [
    {
        name: 'Ira Sanchez', 
        img: iraPic, 
        text: 'I mentored Gregory for 4 months has he moved through the technical curriculum at Lambda School. He consistently put out high quality work that not only functions well but looks good too. Gregory works well on a team and can take on leadership positions if need be. He can also work alone and does not need others to stay disciplined and on track. Anyone seeking a skilled front-end engineer with an eye for design can confidently hire Gregory'
    },
    {
        name: 'Justin Russell',
        img: justinPic,
        text: `Gregory Hawman is amazing to work with, and has great experience in HTML, CSS, JavaScript, React, Redux, Node, SQL, Knex, ReST API's, and Github. He is a broadminded Lambda Student and his exceptional work flow, skills, imagination and understanding of change requests made collaborating on projects a dream. Gregory assumed a leadership role in Lambda School, inspiring and motivating his colleagues. Studying at Lambda School is most challenging, and he battled the impediments. I could always depend on him to set the best example as a student at Lambda School. I've constantly felt Gregory Hawman was one of the most effective team mates I have ever had the privilege of working with.`
    },
    {
        name: 'Alex Martinez',
        img: alexPic,
        text: `Gregory isn't just a great student but also an inspiring person. His exceptional work flow, skills and comprehension of change requests made working with him a dream. Gregory is organized and has no problem to work hard when necessary. His leadership and organizational skills have been invaluable to the group. Gregory makes the impossible possible. He is a great person to work with and is a great addition to any organization.`
    },
]
