import { Component, input, OnInit, output } from '@angular/core';
import { task } from '../interface/interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    CommonModule
    ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<task>();
  onTaskCompleted = output<number>();

  markAsCompleted(id: number) {
    this.onTaskCompleted.emit(id);
  }
}
