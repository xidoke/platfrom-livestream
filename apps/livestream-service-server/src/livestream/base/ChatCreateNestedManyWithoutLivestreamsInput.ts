/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ChatWhereUniqueInput } from "../../chat/base/ChatWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ChatCreateNestedManyWithoutLivestreamsInput {
  @Field(() => [ChatWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChatWhereUniqueInput],
  })
  connect?: Array<ChatWhereUniqueInput>;
}

export { ChatCreateNestedManyWithoutLivestreamsInput as ChatCreateNestedManyWithoutLivestreamsInput };
