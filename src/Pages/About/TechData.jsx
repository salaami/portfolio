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
    Title: "DBT",
    Icon: <SiDbt />,
    Text: "Generate data models in SQL and Jinja using the Data Build Tool.",
  },
  {
    Id: 1,
    Title: "Presto / Trino",
    Icon: <SiPresto />,
    Text: "Leverage Presto/Trino to run SQL queries on different database technologies.",
  },
  {
    Id: 2,
    Title: "Docker",
    Icon: <SiDocker />,
    Text: "Containerization of software components within CI/CD data pipelines.",
  },
  {
    Id: 3,
    Title: "Git",
    Icon: <SiGit />,
    Text: "Version control changes to colaborative projects.",
  },
  {
    Id: 4,
    Title: "Hive",
    Icon: <SiApachehive />,
    Text: "Handling large datasets in Hive using HDFS.",
  },
  {
    Id: 5,
    Title: "Postgres",
    Icon: <SiPostgresql />,
    Text: "Maintain Postgres instances via the CLI tool.",
  },
  {
    Id: 6,
    Title: "SSMS",
    Icon: <SiMicrosoftsqlserver />,
    Text: "GUI to administer MSSQL databases.",
  },
  {
    Id: 7,
    Title: "S3",
    Icon: <SiAmazonaws />,
    Text: "Scalable cloud Storage service for easy and fast data integration.",
  },
]

export { TechData }

