function SavedButton(){
    let wet = document.querySelector(".inputBox1").innerHTML;
    let set = document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(wet,set);
    console.log(localStorage.getItem(set));
    set++;
}
let hcount =0;
function historyButton(){
    console.log("apple");
    let histroy=localStorage.getItem('history');
    console.log("history",histroy);
    hcount++;
    if(hcount%2==1){
        console.log( document.querySelectorAll(".historycon"))
        if( document.querySelectorAll(".historycon")){
         //   document.querySelector(".historycon")[0].Style.display = " block";
        }
       // document.querySelector(".historycon").Style.display = " block";
        let data = document.querySelector(".historycon");

        for(p in localStorage){
            let ans = localStorage.getItem(p);
            if(ans != null){
               
                let h3 = document.createElement("h3");
                h3.setAttribute('class','remove');
                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3);
                data.appendChild(h3);
            }
        }
    }
    else{
        console.log( document.querySelectorAll(".historycon"))
        if( document.querySelectorAll(".historycon")){
            document.querySelectorAll(".historycon");
           //
        }
       // document.querySelectorAll(".historycon").style.display = "none";
        let rem = document.querySelectorAll(".remove");
        for(var i=0; i<rem.clientHeight; i++){
            rem[i].remove();
        }
    }
}
function SearchButton(){
    event.preventDefault();
    //let data=localStorage.setItem('history')
    let problem = document.getElementById("problemBar").value;
    let category = document.getElementById("categoryBar").value
    problem = problem.toLowerCase()
    let apiURL = encodeURI(`https://newton.now.sh/api/v2/${category}/${problem}`)
    
    let pro = fetch(apiURL) 
    
    pro.then((respose)=>{
        console.log(respose.status);
        console.log(respose.ok);
        return respose.json()
    })
    .then((value)=>{
        console.log(value);
        let input2 = value.result;
        localStorage.setItem('history',input2);
        document.querySelector(".inputBox2").innerHTML = input2;
        document.querySelector(".inputBox1").innerHTML = category+" :"+input2;
    })

    
   // let set = document.querySelector(".inputBox1").value;
    //let wet = document.querySelector(".inputBox2").innerHTML;
    //localStorage.setItem(set.wet);
}

function delBtn(){
    
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector("inputBox2").innerHTML = "";

}