import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("sales")
export class Sale{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    value!: number;

    @Column()
    discount!: number;

    @Column()
    productId!: string;

    @Column()
    clientId!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
        
}