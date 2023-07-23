import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import jwt from 'jsonwebtoken';
import { Exclude, Expose } from 'class-transformer';
import bcrypt from 'bcryptjs';
import config from '../../config/config';
import { Session } from './session.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  public generateToken(): string {
    const { id } = this;
    return jwt.sign({ id }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(this.password, password).catch((e) => false);
  }

  @BeforeInsert()
  @BeforeUpdate()
  public async genHash(): Promise<void> {
    if (!this.password) return;
    this.password = await bcrypt.hash(this.password, 8);
  }
}
