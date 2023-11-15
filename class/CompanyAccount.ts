import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (super.validateStatus()) {
      this.balance += amount
      console.log('Empréstimo concedido com sucesso!')
    }
  }
}
