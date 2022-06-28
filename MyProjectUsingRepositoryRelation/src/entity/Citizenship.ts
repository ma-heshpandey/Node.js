import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import { User } from "./User"

@Entity()
export class Citizenship{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number :number

    @OneToOne(()=>User,{ eager: true,  cascade: true})  //eager fetches all data from the relaton tabe also
    @JoinColumn()
    user: User

}
