class UberPriceCalculator {
  static baseFare: number = 5;
  static costPerKilometer: number = 1.5;
  static costPerMinute: number = 0.2;

  static calculatePrice(distanceInKm: number, timeInMinutes: number): number {
    const distanceCost = distanceInKm * this.costPerKilometer;
    const timeCost = timeInMinutes * this.costPerMinute;
    const totalFare = this.baseFare + distanceCost + timeCost;
    return totalFare;
  }
}

const distance = 10;
const time = 15;
const totalPrice = UberPriceCalculator.calculatePrice(distance, time);

console.log(
  `The total Uber price for ${distance} km and ${time} minutes is $${totalPrice}`
);
