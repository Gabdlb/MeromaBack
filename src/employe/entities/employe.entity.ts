import {Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, BeforeInsert, OneToOne, JoinColumn} from 'typeorm';

@Entity()
export class Employe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ nullable: true })
    nom: string;

    @Column('varchar',{ nullable: true })
    prenom: string;

    @Column('varchar',{ nullable: false })
    email: string;

    @Column('timestamptz', {
        nullable: false,
        default: () => new Date(),
        name: 'dateArrivee',
    })
    dateArrivee: Date;

    @Column('varchar',{ nullable: false })
    salaire: number;
}
