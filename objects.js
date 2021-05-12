let car = {
    make : 'Lamborghini',
    model : 'Veneno Roadster',
    year : 2021,
    getPrice : function(){
        return 5000;
        },
     printDescription : function (){
        console.log(this.make + ' ' + this.model);
        }
    }
    car.printDescription();
        console.log(car.year);
       // console.log(car['year']);

       //another way to do this is below

       let anotherCar = {}
       anotherCar.model = '786lal';
       console.log(anotherCar.model);

       // another way to do it is

       var a = {
           myProperty : {b : 'hi'}
         };
         console.log(a.myProperty.b)

         //another way to do is

         var c = {
        myJaidaad : [
            {d : 'this'},
            {e : 'must'},
            {f : 'be a'},
            {g : 'joke'}
        ]
         }
         console.log (c.myProperty.d);
