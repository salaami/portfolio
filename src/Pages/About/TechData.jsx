import { SiPresto } from 'react-icons/si'
import { SiDocker } from 'react-icons/si'
import { SiDbt } from 'react-icons/si'
import { SiApachehive } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiMicrosoftsqlserver } from 'react-icons/si'
import { SiAmazonaws } from 'react-icons/si'
import { SiGit } from 'react-icons/si'

const TechData = [
  {
    Id: 0,
    Icon: <SiDbt />,
    Text: "Generate data models in SQL and Jinja using the Data Build Tool.",
    Title: "DBT",
  },
  {
    Id: 1,
    Icon: <SiPresto />,
    Text: "Leverage Presto/Trino to run SQL queries on different database technologies.",
    Title: "Presto / Trino",
  },
  {
    Id: 2,
    Icon: <SiDocker />,
    Text: "Containerization of software components within CI/CD data pipelines.",
    Title: "Docker",
  },
  {
    Id: 3,
    Icon: <SiGit />,
    Text: "Version control changes to colaborative projects.",
    Title: "Git",
  },
  {
    Id: 4,
    Icon: <SiApachehive />,
    Text: "Handling large datasets in Hive using HDFS.",
    Title: "Hive",
  },
  {
    Id: 5,
    Icon: <SiPostgresql />,
    Text: "Maintain Postgres instances via the CLI tool.",
    Title: "Postgres",
  },
  {
    Id: 6,
    Icon: <SiMicrosoftsqlserver />,
    Text: "GUI to administer MSSQL databases.",
    Title: "Management Studio",
  },
  {
    Id: 7,
    Icon: <SiAmazonaws />,
    Text: "Scalable cloud Storage service for easy and fast data integration.",
    Title: "S3",
  },
]

export { TechData }

