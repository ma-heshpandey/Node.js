import "reflect-metadata"
import { DataSource, Migration } from "typeorm"
import { User } from "./entity/User"
import {Book} from "./entity/Book"
import * as dotenv from "dotenv"
dotenv.config()


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.user,
    password: process.env.password ,
    database: "MyProject",
    synchronize: true,
    logging: false,
    entities: [User, Book],
    migrations: [],
    subscribers: [],
})
