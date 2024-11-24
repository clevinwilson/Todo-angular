import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  user = input.required<{ id: number, name: string, photo:string }>();
}
