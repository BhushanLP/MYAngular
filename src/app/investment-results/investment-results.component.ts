import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

private service  = inject(SharedService);

get results(){
  return this.service.resultsData;
};

}
