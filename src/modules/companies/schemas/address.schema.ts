import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Address {
  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  name: string;

  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  home: string;

  @Prop()
  postalCode: string;

  @Prop()
  apartment: string;

  @Prop()
  comment: string;

  @Prop()
  domofon: string;

  @Prop()
  address: string;

  @Prop()
  regionId: number;

  @Prop()
  districtId: number;
}