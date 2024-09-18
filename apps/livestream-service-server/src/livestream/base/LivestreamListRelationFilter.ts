/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LivestreamWhereInput } from "./LivestreamWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LivestreamListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LivestreamWhereInput,
  })
  @ValidateNested()
  @Type(() => LivestreamWhereInput)
  @IsOptional()
  @Field(() => LivestreamWhereInput, {
    nullable: true,
  })
  every?: LivestreamWhereInput;

  @ApiProperty({
    required: false,
    type: () => LivestreamWhereInput,
  })
  @ValidateNested()
  @Type(() => LivestreamWhereInput)
  @IsOptional()
  @Field(() => LivestreamWhereInput, {
    nullable: true,
  })
  some?: LivestreamWhereInput;

  @ApiProperty({
    required: false,
    type: () => LivestreamWhereInput,
  })
  @ValidateNested()
  @Type(() => LivestreamWhereInput)
  @IsOptional()
  @Field(() => LivestreamWhereInput, {
    nullable: true,
  })
  none?: LivestreamWhereInput;
}
export { LivestreamListRelationFilter as LivestreamListRelationFilter };
