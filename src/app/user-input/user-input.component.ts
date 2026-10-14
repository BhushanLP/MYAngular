import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentData>();

enteredInitialInvestment: number = 0;
enteredAnnualInvestment: number = 0;
enteredExpectedInvestment: number = 5;
enteredDurationInvestment: number = 10;
constructor(private service: SharedService) {}

  onSubmit(){
    console.log("Form submitted");
    this.service.CalculateInvestmentResult({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedInvestment: this.enteredExpectedInvestment,
      durationInvestment: this.enteredDurationInvestment
    });
  }

}
