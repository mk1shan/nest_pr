import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 

getRootMessage(){
  return{
    message:'nest api is running',
  };
}


getHealth(){
  return{
    message:'server is healthy'
  };
}
}
