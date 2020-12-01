let para = document.getElementsByClassName("paragraphe");
console.log(para)


for(let i in para){
    let variable = parseInt(i)+1;
    if(variable%3 ===0){
        continue
    }
    para[i].innerHTML = variable;
    if(variable === para.length - 1){
        break;
    }
}