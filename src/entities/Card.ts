import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Card {
  @Column()
  status: string;

  @Column()
  dateStart: string;

  @Column()
  dateEnd: string | null;

  @Column()
  consumption: {
    totalConsumption: number;
  } | null;

  @Column()
  flag: string;

  @Column()
  country: string;

  @Column()
  plan: string;

  // @ManyToOne(() => User, (user) => user.cards)
  // user: User;
}
