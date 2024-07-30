import portfolio from '../../assets/images/portfolio_screenshot.png'
import dotfiles from '../../assets/images/dotfiles_screenshot.png'
import airbyte from '../../assets/images/airbyte_screenshot.png'
import helper_scripts from '../../assets/images/helper_scripts_screenshot.png'
import real_estate from '../../assets/images/real_estate_screenshot.png'
import takraw_website from '../../assets/images/takraw_website_screenshot.png'

const ListData = [
  {
    Id: 0,
    Pic: portfolio,
    Title: "Portfolio Website",
    Text: "This website is a React application using jsx and css.",
    Link: "https://github.com/salaami/portfolio",
    Tags: ["react.js", "jsx", "css","framer-motion", "flex-box", ]
  },
  {
    Id: 1,
    Pic: dotfiles,
    Title: "Dotfiles",
    Text: "Version controlling my configuration files on Github.",
    Link: "https://github.com/salaami/.dotfiles",
    Tags: ["linux", "git", "shell", "lua"]
  },
  {
    Id: 2,
    Pic: airbyte,
    Title: "Airbyte",
    Text: "Contribution to open-source data integration engine.",
    Link: "https://github.com/salaami/airbyte/tree/master",
    Tags: ["python", "oop", "api", "http", "oauth", "rest"]
  },
  {
    Id: 3,
    Pic: takraw_website,
    Title: "Takraw Website",
    Text: "Small webapp for my sports club using Vue.js.",
    Link: "https://github.com/salaami/takraw-webapp",
    Tags: ["vue.js", "jsx", "css"]
  },
  {
    Id: 4,
    Pic: helper_scripts,
    Title: "Helper Scripts",
    Text: "Repo for small scripts to speed up my workflow in Obsidian.", 
    Link: "https://github.com/salaami/helper_scripts",
    Tags: ["shell", "markdown", "yaml"]
  },
  {
    Id: 5,
    Pic: real_estate,
    Title: "Real Estate",
    Text: "Python app to evaluate real estate offers.", 
    Link: "https://github.com/salaami/real_estate_helper",
    Tags: ["python", "oop", "yaml"]
  }
]

export { ListData }
