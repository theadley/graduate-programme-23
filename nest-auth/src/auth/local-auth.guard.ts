import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// ('local') tells passport which strategy to use
// We registered the strategy earlier in the providers (local.strategy.ts)
// To change providers, you need to use the passport.authenticate string
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { }