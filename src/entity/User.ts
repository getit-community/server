import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from './Post';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  role: number;

  @Column({ unique: true, length: 200 })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  tempPassword: string | null;

  @Column({ nullable: true })
  salt: string;

  @Column()
  signupType: 'google' | 'github' | 'email';

  @Column({ nullable: true, length: 20 })
  nickname: string;

  @Column({ nullable: true, length: 20 })
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
