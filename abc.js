// const carMake = 'Lamborghini';
// const carModel = 'Venero Roadster';
// const carYear = 2021;
// const getCarPrice = () => 5000;
// const printCarDescription = () => console.log(carMake + ' ' + carModel);

// printCarDescription();

car = {
    make: 'Lamborghini',
    model: 'Veneno Roadster',
    year: 2021,

    getPrice: function() {
        return 5000;
    },

    printDescription: function (){
        console.log(car.make + ' ' + car.model);
    }
};

car.printDescription();