class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute, costitem) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.costitem = costitem;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(7, 15, 60, 16, 2);
  console.log("costitem = " +myUber.totalPrice());
  