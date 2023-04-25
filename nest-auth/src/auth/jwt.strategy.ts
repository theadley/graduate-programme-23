import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserAuthDetails } from "src/users/users.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: "I SHOULD BE IN AN ENV VAR",
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  }

  validate(payload: { name: string, sub: number }): UserAuthDetails {
    return {
      id: payload.sub,
      name: payload.name
    };
  }
}