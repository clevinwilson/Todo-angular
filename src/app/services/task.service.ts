import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  users = [
    {
      id: 1,
      name: 'Clevin',
      photo: './avatar-icon.png',
    },
    {
      id: 2,
      name: 'Arun',
      photo: './avatar-icon.png',
    }
  ]
}
