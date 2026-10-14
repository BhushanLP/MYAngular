import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { DUMMY_USERS } from '../dummy.user';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  selectedUser:any = DUMMY_USERS;
  datafromUser = 'This ia data from user component'
  selectedUserBySignal:any = signal(DUMMY_USERS[randomIndex]);
  MYselectedUserBySignal:any = signal(DUMMY_USERS);
  imgPath = computed(()=>'assets/users/' + this.selectedUserBySignal().avatar);
  isVerifiedUser = false;

  status = 'success';
  modernStatus = signal('loading');


constructor(private service:SharedService){

}

onClick(id:any,name:any){
  const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)  
  this.selectedUserBySignal.set(DUMMY_USERS[randomIndex]);
  this.service.$myData.next({id,name});
  this.isVerifiedUser = true;
}





}
