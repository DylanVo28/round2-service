import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request=context.switchToHttp().getRequest();
    // check condition to accept or not accept request go to endpoint
    const decoded=jwt.decode(request.headers.authorization)
    return decoded?true:false
  }
}