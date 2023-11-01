import { DiReact } from 'react-icons/di' 
import { DiLinux } from 'react-icons/di'
import { SiAirbyte } from 'react-icons/si'

const CardsData = [
    {
        Id: 0,
        Title: "portfolio",
        Text: "This website is a React application using jsx and css.",
        Link: "https://github.com/salaami/portfolio",
        Icon: <DiReact />
    },
    {
        Id: 1,
        Title: "dotfiles",
        Text: "Version controlling my configuration files on Github.",
        Link: "https://github.com/salaami/dotfiles",
        Icon: <DiLinux />
    },
    {
        Id: 2,
        Title: "airbyte",
        Text: "Open-source data integration engine.",
        Link: "https://github.com/salaami/airbyte/tree/master",
        Icon: <SiAirbyte />
    },
]

export { CardsData }
