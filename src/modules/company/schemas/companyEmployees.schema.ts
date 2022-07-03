import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class CompanyEmployee {

  @Prop()
  status: number;

  @Prop()
  position: string;

  @Prop()
  level: string;

  @Prop()
  userId: string;

  @Prop()
  deletedAt: Date;
}