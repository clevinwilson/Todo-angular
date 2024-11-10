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
  ];

  task = [
    {
      id: 1,
      userId: 1,
      title: 'Special title treatment',
      description: 'With supporting text below as a natural lead-in to additional content.',
      createDate: Date.now(),
      status: 'PENDING'
    }
  ]
}
