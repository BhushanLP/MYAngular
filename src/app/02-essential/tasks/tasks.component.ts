import { CommonModule } from '@angular/common';
import { Component, Input, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule,CommonModule,TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
currentUser:any  ;
currentUserName:any  ;
  value = model<number>(0); 
btnClicked = false;
myTaskList =[
  { id: '1', userId:'u1', title: 'Task 1', summary: 'This is the first task' ,dueDate:'2024-11-19'},
  { id: '2', userId:'u2', title: 'Task 2', summary: 'This is the second task' ,dueDate:'2024-10-08'},
  { id: '3', userId:'u3', title: 'Task 3', summary: 'This is the third task' ,dueDate:'2024-10-05'} 
]  
@Input({required: true}) userId!: any; 

openModel:boolean=false;

constructor(private service:SharedService){
  this.btnClicked = false;
  this.currentUserName = "click to get user";
   this.currentUser = 'ABCD';
}

ngOnInit(){
    this.service.$myData.subscribe((data:any) => {
      this.currentUser = data.id;
      this.currentUserName = data.name;
    });
    this.btnClicked = true;
}

get selectedUserTasks(){
  return this.myTaskList.filter(task => task.userId === this.userId);
}

addTask(){
this.openModel = true;
}




}