import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) myindidualTask!: any;

constructor() { 
console.log("TaskComponent constructor called",this.myindidualTask);
}

}
