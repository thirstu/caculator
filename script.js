"strict mode"
// display
const display =document.querySelector('.display')
// numbers
const numbers=document.querySelectorAll('.numbers');


// signs

const signs=document.querySelectorAll('.signs');
// const period=document.querySelector('.period');
//array
let inputs=[];
// functions of num
[...numbers].map(el=>{
    el.addEventListener('click',function(e){
        inputs.push(e.target.innerHTML)
        display.value=`${inputs.join('')}`

        console.log(inputs.join(''));
    })
});

// functions of signs
[...signs].map(el=>{
    el.addEventListener('click',function(e){
        // AC
        if(el.classList.contains('ac')){
            inputs=[];
        display.value=`${inputs.join('')}`
        return ;

        }
         // cut
         if(el.classList.contains('cut')){
            inputs.splice(-1);
        display.value=`${inputs.join('')}`
        return ;

        }
           // equal
           if(el.classList.contains('equal')){
            if(inputs.length===0){
        display.value=`${''}`
                return;
            };
            const sol= function(str){
                return (new Function(`return ${str}`)());
            }
            const solu=sol(inputs.join(''));

        display.value=`${solu}`
        inputs=[];
        // inputs=[solu];
        return ;

        }
        // if(el.classList.contains('period')){
        //     console.log(inputs.join('').match('.'));

        // }


        inputs.push(e.target.innerHTML)
        display.value=`${inputs.join('')}`

        console.log(inputs.join(''));
    })
});
            // const sol= function(a,b,c){
            //     return (new Function(`return ${a}`)());
            // }

// console.log(sol(1,6,5));
let arr=[];
// let obj={};

const test =function(str){
    if(![...str].includes('.')){
        console.log('hello');
    } if(![...str].includes('.')){
        console.log('hello');
    }
    console.log([...str].filter((cur,a,b)=>{
        if(cur==='.'){
           
            arr.push( {
                dot:cur,
                index:a
            });
        // console.log(cur,a,arr);
console.log(arr);



        }
        if(cur==='+'){
            console.log(cur,a);
    
    
            }
        
    }));

}
test('1255+25.6.9')
// obj={
//     dot:'.',
//     index:'1'
// }
// console.log(arr);
