import { SiTrino } from "react-icons/si"
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
    Title: "DBT",
    Text: "Data modeling in SQL and Jinja with the Data Build Tool. Streamlines data transformation and testing process.",
  },
  {
    Id: 1,
    Icon: <SiTrino />,
    Title: "TRINO",
    Text: "Trino (formerly known as Presto) is a SQL-based query engine that seamlessly integrates in the BI ecosystem.",
  },
  {
    Id: 2,
    Icon: <SiDocker />,
    Title: "DOCKER",
    Text: "Containerization of software components in Docker. Enhancing reproducibility and scalability of CI/CD pipelines.",
  },
  {
    Id: 3,
    Icon: <SiGit />,
    Title: "GIT",
    Text: "Efficient version control for collaborative development, enabling easy tracking, branching, and merging of code changes.",
  },
  {
    Id: 4,
    Icon: <SiApachehive />,
    Title: "HIVE",
    Text: "Apache Hive is Distributed datawarehouse systeming that allows analytics at a large scale.",
  },
  {
    Id: 5,
    Icon: <SiPostgresql />,
    Title: "POSTGRES",
    Text: "Apache Postgres is a powerful relational database system known for its extensibility and reliability.",
  },
  {
    Id: 6,
    Icon: <SiMicrosoftsqlserver />,
    Title: "SSMS",
    Text: "Microsoft SQL Server Management Studio is a GUI to administering Microsoft SQL databases.",
  },
  {
    Id: 7,
    Icon: <SiAmazonaws />,
    Title: "S3",
    Text: "Amazon S3 is a scalable cloud storage service that facilitates efficient data management and integration.",
  },
]

export { TechData }

