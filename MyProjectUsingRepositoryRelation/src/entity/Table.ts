import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { User } from "./User"


@Entity()
export class Table {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tableNumber: number

    @ManyToMany(()=>User,{eager:true, cascade:true})
    @JoinTable()
    user: User[]

    // @OneToMany(()=> Book, (book)=> book.id)
    // book: Book[]

}
