import { Entity, Column, ObjectID, OneToMany, JoinColumn, ObjectIdColumn } from "typeorm";
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column({ default: false })
    open_on_weekends: boolean;

    @Column()
    images: Image[];
}