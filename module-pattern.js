let counter = (function(){
    let count = 0;
    function print(message){
        console.log(message + '---' + count);
    }
        return{
            get : function(){ return count;},

            set : function(value){ count = value;},
            value : count, 
            increment : function(){
                count += 1;
                print ('after increment: ')
            },

            reset: function(){
                print ('before reset: ')
                count = 0;
                print ('after reset: ')

            }
        }   
})();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

//console.log(counter.count);
//console.log(counter.value)
counter.set(7);
console.log(counter.get());
counter.reset();

