export class Calculator {
  constructor(shouldRoundFloor) {
    this.shouldRoundFloor = shouldRoundFloor;
  }

  sum(a, b) {
    return this.shouldRoundFloor ? Math.floor(a + b) : Math.ceil(a + b)
  }

  showResult(res) {
    const result = res;
    return result;
  }

  sumAndShowResult(a, b) {
    const res = this.sum(a, b);
    return this.showResult(res);
  }
}
