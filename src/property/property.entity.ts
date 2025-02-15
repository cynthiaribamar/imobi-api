import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    number: number;

    @Column({default: ""})
    complement?: string;

    @Column()
    zipCode: string;

    @Column({ type: "enum", enum: ["rent", "sale"] })
    contractType: "rent | sale";

    @Column()
    price: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}