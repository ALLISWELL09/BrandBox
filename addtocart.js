// const product=[
//     {
//         id:0,
//         image:"images/sale.jpg",
//         title:'Lorem Ipsum dizgi',
//         price:120,
//     },
//     {
//         id:1,
//         image:"images/sale3.jpg",
//         title:'Lorem Ipsum dizgi',
//         price:120,
//     },
//     {
//         id:2,
//         image:"images/sale4.jpg",
//         title:'Lorem Ipsum dizgi',
//         price:120,
//     },
//     {
//         id:3,
//         image:"images/sale5.jpg",
//         title:'Lorem Ipsum dizgi',
//         price:120,
//     },

// ];

// const categories =[...new Set(product.map((item)=>
    
//     {return  item}))]
//     let i=0;
// document.querySelector('.new-content').innerHTML = categories.map((item)=>
// {
//     var {image,title,price}=item;
//     return(
//         ` 
//         <div class="new-content">
//         <div class="box">
//         <img src="${image}" />
//         <h5>${title}</h5>
//         <h6>₹${price}</h6>
//         <div class="sale">
//             <h4>Sale</h4>
//         </div><br>`+

//             "<button class='btn' style='border-color:white ;' onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
//     `</div>
//     </div>
  
    
    
//     `

//     )
// }).join('');


// var cart =[];

// function addtocart(a){
//     cart.push({...categories[a]})
//     displaycart();
// }


// function displaycart(a){
//     let j =0;
//     if(cart.length==0){
//         document.getElementsByClassName('.row border-top border-bottom').innerHTML="Your cart is empty";
//     }
//     else{
//         document.getElementsByClassName('.row border-top border-bottom').innerHTML = cart.map((items)=>
//         {
//             var{image,title,price} = items;
//             return(
//                 `<div class="row border-top border-bottom">
//                 <div class="row main align-items-center">
//                     <div class="col-2"><img class="img-fluid" src="${image}"></div>
//                     <div class="col">
//                         <div class="row text-muted">${title}</div>
                        
//                     </div>
//                     <div class="col">
//                         <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
//                     </div>
//                     <div class="col">&euro; ${price}<span class="close">&#10005;</span></div>
//                 </div>
//             </div>`
//             );
//         }).join('');
//     }
// }