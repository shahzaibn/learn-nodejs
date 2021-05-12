let a = 'one hundred';
function scopeTest(){
    console.log(a);
    a = 'changed value ';
    console.log (a);
}
scopeTest ();
console.log(a);
