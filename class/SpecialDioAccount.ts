import { DioAccount } from "./DioAccount"


export class SpecialDioAccount extends DioAccount {
  // Novo tipo de conta com método de depósito especial
  specialDeposit = (amount: number): void => {
    if (super.validateStatus()) {
      this.balance += amount + 10 // Acrescenta 10 ao valor do depósito
      console.log('Depósito especial realizado com sucesso!')
    }
  }
}