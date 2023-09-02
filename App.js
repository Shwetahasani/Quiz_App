const query=[
    {
        'que':' which of the following is markup language?',
        'a': 'HTML',
        'b':'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
          'correct': 'a'
    },
    {
        que:'which of the following Keywords  is used  to define a variable   in javascript??',
        a: 'var',
        b:'let',
        c: 'Both a and b',
        d: 'None of the  above ',
          correct: 'c',

    },

    {
        que:' Javascipt is an_____ language??',
        a: 'Object-Oriented',
        b:'Object-Based',
        c: 'Procedural',
        d: 'None of the above',
          correct: 'a'
    }
]

let index=0;
let total=query.length;
let right=0,wrong=0;
const ques=document.getElementById("ques")
const option = document.querySelectorAll('.option');

const loadqustion=()=>{
    if (index==total){
       return end();
    }
    reset();
   let data= query[index];
   ques.innerText=`${index+1}> ${data.que}`;
  option[0].nextElementSibling.innerText =data.a;
  option[1].nextElementSibling.innerText =data.b;
  option[2].nextElementSibling.innerText =data.c;
  option[3].nextElementSibling.innerText =data.d;
}
const submitquiz = ()=>{

const ans = getanswer();
let data= query[index];
if(ans===data.correct){
    right++;
}
else{
    wrong++;
}
index++;
loadqustion();
return;
}

const getanswer= ()=>{
    let answer;
    option.forEach (
        (input)=>{
           if(input.checked) {
           answer =input.value;
           }
           
        }
    )
return answer;
    
}
 const reset =()=>{
option.forEach(
    (input)=>{
        input.checked = false;
    }
)
 }
  const  end = ()=>{
    document.getElementById("box").innerHTML=
    `
    
    Quiz completed!\nCorrect Answers: ${right}\nWrong Answers: ${wrong} 
    `
  }


loadqustion();