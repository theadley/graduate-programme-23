import { Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserAuthDetails } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  login(@Req() req: Request & { user: UserAuthDetails }): { access_token: string; } {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req: Request & { user: UserAuthDetails }): string {
    return this.appService.getHello() + JSON.stringify(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected2')
  getHello2(@Req() req: Request & { user: UserAuthDetails }): string {
    return this.appService.getHello() + JSON.stringify(req.user);
  }
}
