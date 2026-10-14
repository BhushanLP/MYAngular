import { Component } from '@angular/core';
import { DUMMY_USERS } from './02-essential/dummy.user';
import { HeaderComponent } from './02-essential/header/header.component';
import { TasksComponent } from './02-essential/tasks/tasks.component';
import { UserComponent } from './02-essential/user/user.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { SharedService } from './shared/shared.service';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, UserComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MYAngApp';
  selectedUser = DUMMY_USERS[0];
  parentCount:any;

  constructor(service: SharedService) {
    service.$myData.subscribe((data) => {
      const user = DUMMY_USERS.find((candidate) => candidate.id === data?.id);
      if (user) {
        this.selectedUser = user;
      }
    });
  }



}
