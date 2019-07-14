function subject(){
var one= new timetable();
const key=one.update(document.getElementById('sub').value);
one.buildTable(key);

} 

const save = () =>{
    tname=document.getElementById('tname').value;
    tskill=document.getElementById('tskill').value;
    
    localStorage.setItem("POP",JSON.stringify({tname:tname,tskill:tskill}));
       
        
};
const trainerdetails=()=>
{   
    clas=document.getElementById('class').value;
    session=document.getElementById('session').value;
    sub=document.getElementById('sub').value;
    trainer=document.getElementById('trainer').value;
    localStorage.setItem(tname,JSON.stringify({class:clas,session:session,subject:sub,trainer:trainer}));
       
};
const search=()=>
{const a=[];
    
    if(document.getElementById('search').value=="classA")
    {
        var two= new timetable();
        const key=two.classupdate(document.getElementById('search').value);
        two.buildrow(key);
   
    }
    else{
        var two= new timetable();
        const key=two.classupdate(document.getElementById('search').value);
        two.buildrow(key);
    }
}
class timetable{
    classupdate(s)
    {
    const a=[];
    if(s=='classA'){
        Object.keys(localStorage).forEach((e)=>{
            const emp = JSON.parse(localStorage.getItem(e));
            if(emp.class=='class A')
                a.push(emp);

            
    });}
    if(s=='classB'){
        Object.keys(localStorage).forEach((e)=>{
            const emp = JSON.parse(localStorage.getItem(e));
            if(emp.class=='class B')
                a.push(emp);

            
    });}
        return a;
    }
    update(sub)
    {
    const a=[];
        if(sub=='maths'){
        Object.keys(localStorage).forEach((e)=>{
            const emp = JSON.parse(localStorage.getItem(e));
            if(emp.tskill=='maths')
            {
                a.push(emp);

            }

        });}
        if(sub=='science'){
        Object.keys(localStorage).forEach((e)=>{
            const emp = JSON.parse(localStorage.getItem(e));
            if(emp.tskill=='science')
            {
                a.push(emp);

            }

        });}
        if(sub=='social'){
        Object.keys(localStorage).forEach((e)=>{
            const emp = JSON.parse(localStorage.getItem(e));
            if(emp.tskill=='social')
            {
                a.push(emp);

            }

        });}
        if(sub=='english'){
            Object.keys(localStorage).forEach((e)=>{
                const emp = JSON.parse(localStorage.getItem(e));
                if(emp.tskill=='english')
                {
                    a.push(emp);
        
                }
        
            });
        }
    return a;
    }
    buildTable = (key) =>{
        const table=document.getElementById('trainer');
        let rows = '';
        key.forEach((table)=>{
            rows += `<option value=${table.tname}> ${table.tname} </option> `
        });
        table.innerHTML=rows;
        
    }
    buildrow= (key) =>{
        const table=document.getElementById('row');
    let rows = '';
    key.forEach((table)=>{
        rows += `<td>${table.trainer},${table.tskill},${table.session}</td> `
    });
    table.innerHTML=rows;
    }
        
}

