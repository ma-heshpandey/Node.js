import "reflect-metadata"
import { DataSource, Migration } from "typeorm"
import { User } from "./entity/User"
import {Book} from "./entity/Book"
import { Citizenship } from "./entity/Citizenship"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mahesh",
    database: "RelationDatabaase",
    synchronize: true,
    logging: false,
    entities: [User, Book, Citizenship],
    migrations: [],
    subscribers: [],
})
