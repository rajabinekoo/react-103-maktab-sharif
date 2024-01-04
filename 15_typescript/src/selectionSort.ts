class SelectionSort<T> {
  constructor(
    public list: Array<T>,
    private compare: (a: T, b: T) => boolean
  ) {}

  private swap(indexA: number, indexB: number): void {
    if (indexA === indexB) return;
    const element = this.list[indexA];
    this.list[indexA] = this.list[indexB];
    this.list[indexB] = element;
  }

  private findMinOrMax(startIndex: number): number {
    let minIndex = startIndex;
    for (let index = startIndex; index < this.list.length; index++) {
      if (this.compare(this.list[index], this.list[minIndex])) {
        minIndex = index;
      }
    }
    return minIndex;
  }

  public sort(): void {
    for (let index = 0; index < this.list.length; index++) {
      const minIndex = this.findMinOrMax(index);
      this.swap(minIndex, index);
    }
  }
}

const numbersList: number[] = [14, 33, 27, 10, 35, 19, 42, 44];
const selectionSort = new SelectionSort<number>(numbersList, (a, b) => {
  return a < b;
});
// console.log(selectionSort.list);
// selectionSort.sort();
// console.log(selectionSort.list);

// ================ object sort ================

class BankWallet {
  public balance: number = 0;

  public deposit(price: number) {
    this.balance += price;
  }

  public withdraw(price: number) {
    if (this.balance < price) {
      throw new Error("Invalid withdrawal price");
    }
    this.balance -= price;
  }
}

const wallets: BankWallet[] = numbersList.map((el) => {
  const wallet = new BankWallet();
  wallet.deposit(el);
  return wallet;
});

const selectionSortForBankWallets = new SelectionSort<BankWallet>(
  wallets,
  (a, b) => {
    return a.balance > b.balance;
  }
);

console.log(selectionSortForBankWallets.list);
selectionSortForBankWallets.sort();
console.log(selectionSortForBankWallets.list);
