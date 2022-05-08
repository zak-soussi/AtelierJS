let button=document.getElementById("Button")
button.addEventListener("click",function(){
    let name=document.getElementById("Name").value;
    let content=document.getElementById("Content").value;
    let i=0;
    if((name!="")&&(content!="")){
        let text=name+" "+content+"  ";
        let aaa=document.createElement("div");
        aaa.innerHTML=text;
        aaa.id=i+"";
        document.getElementById("add").appendChild(aaa);
        i++;
        let bbb=document.createElement("button");
        bbb.id=i;
        bbb.className="btn";
        bbb.style.outline = "transparent";
        bbb.style.borderRadius="20%";
        aaa.appendChild(bbb);
        let ccc=document.createElement("img");
        ccc.src=("pic.jpg");
        ccc.width="15";
        ccc.height="15";
        bbb.appendChild(ccc);
        bbb.addEventListener("click",function(){
            aaa.remove();
        })

    }
})