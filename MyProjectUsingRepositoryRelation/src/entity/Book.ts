import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    date: Date

    @ManyToOne(()=> User,{eager: true,  cascade: true})
    user: User


}
