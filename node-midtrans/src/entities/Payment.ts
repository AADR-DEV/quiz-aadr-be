import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "payments" })
export class Payment {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column()
	order_id!: string;

	@Column({ nullable: true })
	name!: string;

	@Column({ nullable: true })
	email!: string;

	@Column({ nullable: true })
	gross_amount!: number;

	@Column({ nullable: true })
	transaction_status!: string;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	created_at!: Date;
}
