export class RandomGenerator {

  static randomInterger() {
    return Math.floor(Math.random() * 100) + 1;
  }

  static randomRange(min,max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }
  
}
