import { Entity, Column, ObjectID, ObjectIdColumn, ManyToOne, JoinColumn } from "typeorm";
import Orphanage from "./Orphanage";

@Entity('images')
export default class Image {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    path: string;
}