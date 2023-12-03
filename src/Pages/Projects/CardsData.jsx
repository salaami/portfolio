import { DiReact } from 'react-icons/di' 
import { DiLinux } from 'react-icons/di'
import { SiAirbyte } from 'react-icons/si'
import { FaVuejs } from "react-icons/fa"


const CardsData = [
    {
        Id: 0,
        Title: "Portfolio",
        Text: "This website is a React application using jsx and css.",
        Link: "https://github.com/salaami/portfolio",
        Icon: <DiReact />
    },
    {
        Id: 1,
        Title: "Dotfiles",
        Text: "Version controlling my configuration files on Github.",
        Link: "https://github.com/salaami/dotfiles",
        Icon: <DiLinux />
    },
    {
        Id: 2,
        Title: "Airbyte",
        Text: "Open-source data integration engine.",
        Link: "https://github.com/salaami/airbyte/tree/master",
        Icon: <SiAirbyte />
    },
    {
        Id: 3,
        Title: "Takraw Website",
        Text: "Small webapp for my sports club using Vue.js .",
        Link: "https://github.com/salaami/airbyte/tree/master",
        Icon: <FaVuejs />
    },
]

export { CardsData }
