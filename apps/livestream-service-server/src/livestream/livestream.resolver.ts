import * as graphql from "@nestjs/graphql";
import { LivestreamResolverBase } from "./base/livestream.resolver.base";
import { Livestream } from "./base/Livestream";
import { LivestreamService } from "./livestream.service";

@graphql.Resolver(() => Livestream)
export class LivestreamResolver extends LivestreamResolverBase {
  constructor(protected readonly service: LivestreamService) {
    super(service);
  }
}
