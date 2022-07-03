import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class CompanyTimeTable {
  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop()
  day: number;

  @Prop()
  status: number;
}