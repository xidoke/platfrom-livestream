import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LivestreamService } from "./livestream.service";
import { LivestreamControllerBase } from "./base/livestream.controller.base";

@swagger.ApiTags("livestreams")
@common.Controller("livestreams")
export class LivestreamController extends LivestreamControllerBase {
  constructor(protected readonly service: LivestreamService) {
    super(service);
  }
}
