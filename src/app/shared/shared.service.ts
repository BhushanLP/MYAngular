import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnnualInvestmentData, InvestmentData } from '../user-input/interface/common.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

$myData = new BehaviorSubject<any | undefined>(undefined);
resultsData?: AnnualInvestmentData[];


  constructor() { }

  CalculateInvestmentResult(data: InvestmentData) {
    // Handle the calculated investment result
    const { initialInvestment, annualInvestment, expectedInvestment, durationInvestment } = data;
    const annualData:any = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i <= durationInvestment; i++) {
      const year = i+1;
      const interestEarnedInYear = investmentValue * (expectedInvestment / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterestEarned = investmentValue - initialInvestment - (annualInvestment * i);
      annualData.push({
        year:year,
        investmentValue: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        totalInterestEarned: totalInterestEarned,
        totalAmountInvested: initialInvestment + (annualInvestment * year)

      });
    }
    console.log('Annual Data:', annualData);
    return this.resultsData = annualData;
  }

addMethod(a:number,b:number){
 return a + b;
}

}
