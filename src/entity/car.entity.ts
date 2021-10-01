import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Car{
    @PrimaryColumn()
    id: number;

    @Column()
    marque: string

    @Column()
    dateArrived: Date;

    @Column()
    plaque: string
    
}