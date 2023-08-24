const ITEMS = [
    {
        id: 1,
        name:'KTM-Duke-RC-200-India',
        price:600,
        image: 'images/ktm.jpg',
        qty:1
    },
    {
        id: 2,
        name:'2017-yamaha-tmax-scooter-presented-for-europe_9',
        price:1000,
        image: 'images/T-max.jpg',
        qty:1
    },
    {
        id: 3,
        name:'2019-Yamaha-MT-09d',
        price:1500,
        image: 'images/yamaha Mt09.webp',
        qty:1
    },
    {
        id: 4,
        name:'kawasaki z1000',
        price:800,
        image: 'images/z1000.jpeg',
        qty:1
    },
]





const openbtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closebtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')
const itemsEl = document.querySelector( '.items')
const cartitems = document.querySelector( '.cart_items')

let cart_data = []


openbtn.addEventListener('click', opencart)
closebtn.addEventListener('click', closecart)
backdrop.addEventListener('click', closecart)

renderItems()
rendercartitems()


// open cart
function opencart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    } , 0)
    
}
// close cart
function closecart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')
    setTimeout(() => {
        backdrop.style.display = 'none'
    } , 500)
}

// add items to cart 
function additem(idx, itemId){
    // find same items
    const foundeditem = cart_data.find(
    (item) => item.id.tostring() === itemId.tostring()
    )

    if(foundeditem){
        // increase item qty

    }else{
        cart_data.push(ITEMS[idx])
    }
    updatecart()
    opencart()
}

// remove cart item
function removecartitem(itemId){
    cart_data = cart_data.filter((item) => item.id != itemId)
}




//Render Items
function renderItems() {
    ITEMS.forEach((item, idx) => {
        const itemEl = document.createElement('div')
        itemEl.classList.add('item')
        itemEl.onclick = () => additem(idx, item.id)
        itemEl.innerHTML = `
            <img src="${item.image}" alt="" />
            <button>add to cart</button>
            `
           
        itemsEl.appendChild(itemEl)
        
    })
}

//display / render cart items
function rendercartitems(){
    // remove everything from cart
    cartitems.innerHTML = ''
    // add new data
    cart_data.forEach(item =>{
        const cartitem = document.createElement('div')
        cartitem.classList.add('cart_item')
        cartitem.innerHTML=`  <div class="remove_item" onclick="removecartitem(${item.id})" >
        <span>&times;</span>
    </div>
    <div class="item_img">
      <img src=" ${item.image}" alt="" />  
    </div>
    <div class="item_details">
        <p> ${item.name}</p>
        <strong>$${item.price}</strong>
        <div class="qty">
            <span>-</span>
            <strong>${item.qty}</strong>

            <span>+</span>
        </div>
    </div>
        `
        cartitems.appendChild(cartitem)
    })

}

function updatecart(){
    //rerender cart items with update data
    rendercartitems()

}
