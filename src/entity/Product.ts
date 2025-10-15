import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("products")
export class Product{
    // Definição das colunas e propriedades da entidade Product
    @PrimaryColumn()
    readonly id!: string;

    // Outras colunas como name, ean, price, description, categoryId, etc.
    @Column()   
    name!: string;

    @Column()
    ean!: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price!: number;

    @Column()
    description!: string;

    @Column()
    categoryId!: string;

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