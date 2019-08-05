console.log("rani");
class cal { 
add(a)
{
return "animal";
}
_sub(i,j){
    if(j>25)
    return "adult";
    else
    return "adolesant";
}
_mul(i,j){
    return i * j;
}

}
class CalculatorListener {
    _execute(request,sec){
        let _request = (request);
        let _sec=parseInt(sec);
        const _calObj = new cal();
        switch(_request){
            case 'ANIMAL':
                    console.log(` ANIMAL is : ${_calObj.add(_request.first)}`);
                    break;
            case 'HUMAN':
                    console.log(`human is : ${_calObj._sub(_request.first,_sec)}`);
                    break;
        }
    }
}
const obj= new CalculatorListener();
let first = (process.argv[2]);
let _sec = parseInt(process.argv[3]);
obj._execute(first,_sec);
// obj.animal(_first);
// let _next = parseInt(process.argv[2] || '7');
// let _t = parseInt(process.argv[3] || '7');
// console.log(obj.add(_first))
// console.log(obj._sub(_first))


