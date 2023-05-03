import { hashPassword } from "src/utils/bcrypt";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, BaseEntity, BeforeInsert } from "typeorm";

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar' })
    name: string;
    @Column({ unique: true })
    email: string;
    @Column({ type: 'varchar' })
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @CreateDateColumn()
    updatedAt: Date;


    @BeforeInsert()
    async setPassword(password: string) {
        this.password = await hashPassword(password || this.password);
    }
}