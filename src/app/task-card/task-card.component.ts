import { Component, input, OnInit } from '@angular/core';
import { task } from '../interface/interface';
@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input.required<task>();
}

