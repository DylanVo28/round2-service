import { CallHandler, ExecutionContext, HttpException, HttpStatus, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { UsersService } from "../services/users.service";
import { response } from "express";

export class UserInterceptor implements NestInterceptor{
  constructor(private readonly service:UsersService) {
  }
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    //  Data processing before submitting a request

    try {
      const request=context.switchToHttp().getRequest()
      const {userName,password}=request
      const token=this.service.login({userName,password})
      return next.handle().pipe(
        map(response=>{
          response.set('Authorization',`Bearer ${token}`)
        })
      )
    }catch (e){
      throw new HttpException(e.message,HttpStatus.UNAUTHORIZED)
    }
  }
}