import javascriptIcon from '../images/logos/javascript.svg'
import reactIcon from '../images/logos/react.svg'
import reduxIcon from '../images/logos/redux.svg'
import html5Icon from '../images/logos/html5icon.svg'
import cssIcon from '../images/logos/css3.svg'
import pythonIcon from '../images/logos/python.svg'
import nodejsIcon from '../images/logos/Node.js_logo.svg'

import bgImg from '../images/projects/bridgegood.jpg'
import golImg from '../images/projects/gameOfLifeImg.png'
import bblsImg from '../images/projects/bubblesImg.png'

import iraPic from '../images/ira-pic.jpg'
import justinPic from '../images/justin-pic.jpg'
import alexPic from '../images/alex-pic.jpg'

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
        tech: 'React | Redux | Node.js', 
        desc: 'A place I worked once!',
        img: bgImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Game of Life',
        tech: 'JavaScript | React',
        desc: 'A place I worked once!',
        img: golImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Bubbles', 
        tech: 'React | Redux ',
        desc: 'A place I worked once!',
        img: bblsImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Sleep Tracker',
        tech: 'React | Redux | Node.js', 
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Family Recipes', 
        tech: 'React | Redux | Node.js',
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'MedCabinet', 
        tech: 'React | Redux | Node.js',
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    // {
    //     name: 'Notes Notes Notes',
    //     tech: 'React | Node.js',
    //     desc: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/'
    // },
    // {
    //     name: '30 Day Challenge',
    //     tech: 'React | Node.js', 
    //     desc: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/'
    // },
    // {
    //     name: 'My Resume',
    //     tech: 'PDF', 
    //     desc: 'All the places I've worked',
    //     img: '',
    //     link: ''
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

export const modalText = {
    bridgegood: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    gameOfLife: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    bubbles: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    sleepTracker: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    familyRecips: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    medCabinet: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    notesNotesNotes: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    thirtyDayChallenge: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
    resume: {
        title: '',
        tag: '',
        detail: '',
        link: '',
    },
}
