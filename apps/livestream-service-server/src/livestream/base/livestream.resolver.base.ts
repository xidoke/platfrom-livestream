/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Livestream } from "./Livestream";
import { LivestreamCountArgs } from "./LivestreamCountArgs";
import { LivestreamFindManyArgs } from "./LivestreamFindManyArgs";
import { LivestreamFindUniqueArgs } from "./LivestreamFindUniqueArgs";
import { CreateLivestreamArgs } from "./CreateLivestreamArgs";
import { UpdateLivestreamArgs } from "./UpdateLivestreamArgs";
import { DeleteLivestreamArgs } from "./DeleteLivestreamArgs";
import { ChatFindManyArgs } from "../../chat/base/ChatFindManyArgs";
import { Chat } from "../../chat/base/Chat";
import { DonationFindManyArgs } from "../../donation/base/DonationFindManyArgs";
import { Donation } from "../../donation/base/Donation";
import { User } from "../../user/base/User";
import { LivestreamService } from "../livestream.service";
@graphql.Resolver(() => Livestream)
export class LivestreamResolverBase {
  constructor(protected readonly service: LivestreamService) {}

  async _livestreamsMeta(
    @graphql.Args() args: LivestreamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Livestream])
  async livestreams(
    @graphql.Args() args: LivestreamFindManyArgs
  ): Promise<Livestream[]> {
    return this.service.livestreams(args);
  }

  @graphql.Query(() => Livestream, { nullable: true })
  async livestream(
    @graphql.Args() args: LivestreamFindUniqueArgs
  ): Promise<Livestream | null> {
    const result = await this.service.livestream(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Livestream)
  async createLivestream(
    @graphql.Args() args: CreateLivestreamArgs
  ): Promise<Livestream> {
    return await this.service.createLivestream({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Livestream)
  async updateLivestream(
    @graphql.Args() args: UpdateLivestreamArgs
  ): Promise<Livestream | null> {
    try {
      return await this.service.updateLivestream({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Livestream)
  async deleteLivestream(
    @graphql.Args() args: DeleteLivestreamArgs
  ): Promise<Livestream | null> {
    try {
      return await this.service.deleteLivestream(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Chat], { name: "chats" })
  async findChats(
    @graphql.Parent() parent: Livestream,
    @graphql.Args() args: ChatFindManyArgs
  ): Promise<Chat[]> {
    const results = await this.service.findChats(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Donation], { name: "donations" })
  async findDonations(
    @graphql.Parent() parent: Livestream,
    @graphql.Args() args: DonationFindManyArgs
  ): Promise<Donation[]> {
    const results = await this.service.findDonations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Livestream): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
