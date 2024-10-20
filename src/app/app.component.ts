import {
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskService } from './services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { task } from './interface/interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    UserCardComponent,
    TaskCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  users: WritableSignal<{ id: number; name: string; photo: string }[]> = signal(
    []
  );
  tasks: WritableSignal<task[]> = signal([]);
  title = 'todo-list';

  ngOnInit(): void {
    this.users.set(this.taskService.users);
    this.tasks.set(this.taskService.task);
  }

  /**
   * Add new task.
   * @param task
   * @returns void.
   */
  addNewTask(task: task): void {
    this.tasks.update((currentTasks) => [...currentTasks, task]);
  }

  /**
   * Open add task dialog box
   * @returns void.
   */
  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addNewTask({
          ...result,
          id: Math.random(),
          userId: 1,
          createDate: Date.now(),
        });
      }
    });
  }
}
