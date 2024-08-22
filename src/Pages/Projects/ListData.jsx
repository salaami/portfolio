import { FaReact } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";
import { SiAirbyte } from "react-icons/si";
import { FaVuejs } from "react-icons/fa"; 
import { FaToolbox } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";


const ListData = [
  {
    Id: 0,
    Pic: <FaReact />,
    Title: "Portfolio Website",
    Text: "This website is a React application using jsx and css.",
    Link: "https://github.com/salaami/portfolio",
    Tags: ["react.js", "jsx", "css","framer-motion", "flex-box", ]
  },
  {
    Id: 1,
    Pic: <GrArchlinux/>,
    Title: "Dotfiles",
    Text: "Version controlling my configuration files on Github.",
    Link: "https://github.com/salaami/.dotfiles",
    Tags: ["linux", "git", "shell", "lua"]
  },
  {
    Id: 2,
    Pic: <SiAirbyte/>,
    Title: "Airbyte",
    Text: "Contribution to open-source data integration engine.",
    Link: "https://github.com/salaami/airbyte/tree/master",
    Tags: ["python", "oop", "api", "http", "oauth", "rest"]
  },
  {
    Id: 3,
    Pic: <FaVuejs/>,
    Title: "Takraw Website",
    Text: "Small webapp for my sports club using Vue.js.",
    Link: "https://github.com/salaami/takraw-webapp",
    Tags: ["vue.js", "jsx", "css"]
  },
  {
    Id: 4,
    Pic:  <FaToolbox/>,
    Title: "Helper Scripts",
    Text: "Repo for small scripts to speed up my workflow in Obsidian.", 
    Link: "https://github.com/salaami/helper_scripts",
    Tags: ["shell", "markdown", "yaml"]
  },
  {
    Id: 5,
    Pic:  <MdOutlineRealEstateAgent/>,
    Title: "Real Estate",
    Text: "Python app to evaluate real estate offers.", 
    Link: "https://github.com/salaami/real_estate_helper",
    Tags: ["python", "oop", "yaml"]
  }
]

export { ListData }
