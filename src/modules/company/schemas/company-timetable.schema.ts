import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class CompanyTimeTable {
  @Prop()
  startTime: number;

  @Prop()
  endTime: number;

  @Prop()
  day: number;

  @Prop()
  status: number;
}