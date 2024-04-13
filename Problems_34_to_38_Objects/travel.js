// Problem 38 : Round Trip

const departTripTicket = {
  name: "Jake Brown",
  from: "New York",
  to: "Mumbai",
  businessClass: false,
  leaveTime: 10,
  arriveTime: 17,
  upgrade() {
    if (this.businessClass === false) {
      this.businessClass = true;
      console.log("Your ticket has been upgraded to business class!");
    } else {
      console.log("Your ticket is already business class!");
    }
  },
  flightTime() {
    let tripTime = 0;
    if (this.arriveTime < this.leaveTime) {
      tripTime = 24 - this.leaveTime + this.arriveTime;
    } else {
      tripTime = this.arriveTime - this.leaveTime;
    }
    console.log(`The departing flight duration is ${tripTime} hours`);
  },
};

const returnTripTicket = {
  name: "Jake Brown",
  from: "Mumbai",
  to: "New York",
  businessClass: false,
  leaveTime: 17,
  arriveTime: 5,
  upgrade() {
    if (this.businessClass === false) {
      this.businessClass = true;
      console.log("Your ticket has been upgraded to business class!");
    } else {
      console.log("Your ticket is already business class!");
    }
  },
  flightTime() {
    let tripTime = 0;
    if (this.arriveTime < this.leaveTime) {
      tripTime = 24 - this.leaveTime + this.arriveTime;
    } else {
      tripTime = this.arriveTime - this.leaveTime;
    }
    console.log(`The returning flight duration is ${tripTime} hours`);
  },
};

departTripTicket.upgrade();
console.log(departTripTicket);

returnTripTicket.flightTime();
console.log(returnTripTicket);
