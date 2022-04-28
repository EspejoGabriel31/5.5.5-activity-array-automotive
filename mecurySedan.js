const { Vehicle } = require("./vehicle");

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

const mecurySedan = require("./vehicle").Vehicle

class mercurySedan extends Vehicle{
    constructor(model, year, color, mileage){
        super("Mercury", model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduledService = false;
    }
    start(){
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    loadPassenger(num){
        let availiableRoom = false;
        if(this.passenger + num < maxPassengers){
            availiableRoom = true
            this.passenger += num
        }
        else{
            console.log("not enough room")
        }
    }

    scheduleService(mileage){
       // let timeForMaintenance = false
        if(mileage > 30000){
            //timeForMaintenance = true
            this.scheduledService = true
        }
    }
}

