import { Prop, raw, Schema } from "@nestjs/mongoose";
import { Address } from ".";

@Schema({ timestamps: true })
export class CompanyWarehouse {
  @Prop()
  name: string;

  @Prop(raw(Address))
  address: Record<string, any>;

  @Prop()
  status: number;

  @Prop()
  deletedAt: Date;
}