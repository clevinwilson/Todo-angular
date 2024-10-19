import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, FormsModule, MatDialogClose],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) {}

  taskName: string = '';
  taskDescription: string = '';

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    const taskData = {
      name: this.taskName,
      description: this.taskDescription
    };
    this.dialogRef.close(taskData); // Send data back to the parent component
  }
}
