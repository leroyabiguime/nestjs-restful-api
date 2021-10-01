import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marque: string

    @Column()
    dateArrived: Date;

    @Column()
    plaque: string
    
}