/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DonationWhereUniqueInput } from "../../donation/base/DonationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DonationUpdateManyWithoutLivestreamsInput {
  @Field(() => [DonationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DonationWhereUniqueInput],
  })
  connect?: Array<DonationWhereUniqueInput>;

  @Field(() => [DonationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DonationWhereUniqueInput],
  })
  disconnect?: Array<DonationWhereUniqueInput>;

  @Field(() => [DonationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DonationWhereUniqueInput],
  })
  set?: Array<DonationWhereUniqueInput>;
}

export { DonationUpdateManyWithoutLivestreamsInput as DonationUpdateManyWithoutLivestreamsInput };
