import { Module } from "@nestjs/common";
import { LivestreamModuleBase } from "./base/livestream.module.base";
import { LivestreamService } from "./livestream.service";
import { LivestreamController } from "./livestream.controller";
import { LivestreamResolver } from "./livestream.resolver";

@Module({
  imports: [LivestreamModuleBase],
  controllers: [LivestreamController],
  providers: [LivestreamService, LivestreamResolver],
  exports: [LivestreamService],
})
export class LivestreamModule {}
