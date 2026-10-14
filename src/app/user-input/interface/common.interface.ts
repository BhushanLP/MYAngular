export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedInvestment: number;
  durationInvestment: number;
}

export interface AnnualInvestmentData {
        year:number,
        investmentValue: number,
        valueEndOfYear: number,
        totalInterestEarned: number,
        totalAmountInvested: number
}