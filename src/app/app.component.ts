import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from "./header/header.component";
import { UserCardComponent } from './user-card/user-card.component';
import { TaskCardComponent } from "./task-card/task-card.component";
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, HeaderComponent, UserCardComponent, TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService){}

  users: WritableSignal<{ id: number, name: string, photo:string }[]> = signal([]);
  title = 'todo-list';
  
  ngOnInit(): void {
    this.users.set(this.taskService.users);
  }
  
}
