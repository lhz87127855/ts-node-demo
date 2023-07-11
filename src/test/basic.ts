class TestA {
  show() {
    console.log('called TestA');
  }
}

class TestB {
  constructor(private readonly testA: TestA) {}
  show() {
    this.testA.show();
  }
}

new TestB(new TestA()).show();