import { Injectable } from '@angular/core';
import { ResourceService } from '../resource/resource.service';
import { User } from '@core/models/db';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ResourceService<User> {
  override apiURL: string;

  constructor() {
    super();
    this.apiURL = '/users';
  }
}
