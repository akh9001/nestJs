import { Injectable } from '@nestjs/common';
//* Separating our business logic from our controller
//* To create a service using /////nestCLI : nest generate service
//! in nestjs, each a service is a provider.
//? A Provider can inject dependencies.
//? To inject a provider we can simply use constructors
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Elona!';
  }
}
