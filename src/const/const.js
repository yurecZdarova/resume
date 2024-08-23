import fotoSimulatorLife from "../assets/Снимок экрана Snake.png"
import fotoSimulatorSite from "../assets/Снимок экрана Site.png"
import fotoSimulatorClicker from "../assets/Снимок экрана Clicker.png"
import fotoSimulatorTechnology from "../assets/Снимок экрана technology.png"

import fotoSimulatorTechnologyMass1 from "../assets/Снимок экрана technology 2.png"
import fotoSimulatorTechnologyMass3 from "../assets/Снимок экрана technology4.png"
import fotoSimulatorTechnologyMass4 from "../assets/Снимок экрана technology 5.png"
import fotoSimulatorTechnologyMass5 from "../assets/Снимок экрана technology 6.png"

import fotoSimulatorLifeMass1 from "../assets/Снимок экрана lifes1.png"
import fotoSimulatorLifeMass3 from "../assets/Снимок экрана life 3.png"

import fotoSimulatorClickerMass1 from "../assets/Снимок экрана clicker 2.png"




import fotoSimulatorSiteMass1 from "../assets/Снимок экрана site1.png"
import fotoSimulatorSiteMass2 from "../assets/Снимок экрана site2.png"
import fotoSimulatorSiteMass3 from "../assets/Снимок экрана site4.png"







export const project=[
    {
        id:1,
        title:"Симулятор жизни",
        description:"Игра кликер симулирует жизнь",
        src:fotoSimulatorLife,
        technology:["React","React-router-dom","MUI"],
        srcOpenProject:"https://yura.mintscale.ru/",
        srcMassOpen:[
            fotoSimulatorLife,
            fotoSimulatorLifeMass1,
            fotoSimulatorLifeMass3,


        ],
    },{
        id:2,
        title:"Симулятор IT",
        description:"игрф кликер с IT технологиями",
        src:fotoSimulatorTechnology,
        technology:["React","zustand","styled-component"],
        srcOpenProject:"https://zustanttreninggame.vercel.app/",
        srcMassOpen:[
            fotoSimulatorTechnologyMass1,
            fotoSimulatorTechnologyMass3,
            fotoSimulatorTechnologyMass4,
            fotoSimulatorTechnologyMass5,
            fotoSimulatorTechnology,
        ]
    },{
        id:3,
        title:"Сайт-резюме",
        description:"Это мой сайт",
        src:fotoSimulatorSite,
        technology:["React","react-router-dom","Swiper"],
        srcOpenProject:"/",
        srcMassOpen:[
            fotoSimulatorSite,
            fotoSimulatorSiteMass1,
            fotoSimulatorSiteMass2,
            fotoSimulatorSiteMass3,
        ]
    },{
        id:4,
        title:"Онлайн магазин",
        description:"игра кликер на быстрое нажатие клавиш",
        src:fotoSimulatorClicker,
        technology:["React","MUI",],
        srcOpenProject:"https://mystore-ashen.vercel.app/",
        srcMassOpen:[fotoSimulatorClickerMass1,fotoSimulatorClicker]
    },
]