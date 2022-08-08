const url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`

async function game(){
    let res=await fetch(url)
    let data=await res.json()
    console.log(data.data)
    display(data.data)


}
game()


let display=(data)=>{
    document.getElementById("container").innerHTML=null;
    data.forEach((ele)=>{

     var box=document.createElement("div")
     var image=document.createElement("img")
     image.setAttribute("src",ele.image)
     var h3=document.createElement("h3")
     h3.innerText=ele.title;
     var price=document.createElement("p")
     price.innerText=ele.price;

     var cate=document.createElement("p")
     cate.innerText=ele.category

     box.append(image,h3,price,cate)



     document.getElementById("container").append(box)









    })
}


async function lth(){
    let res=await fetch(url)
    let data=await res.json()
    // console.log(data.data)
    data.sort(function(ele){
        return ele.price;
    })
    display(data.data)

}