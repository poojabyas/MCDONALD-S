function RandomId(RandomNo) {
    this.RandomNo = RandomNo;
}

RandomId.prototype.getOrderId = function()
{
    const displayElement = document.getElementById("imagecontainerID2");
    displayElement.textContent = "OrderId: " +this.RandomNo;
}



    order = function(){
    const OrderId = new RandomId(Math.floor((Math.random() * 1000) + 1));
    OrderId.getOrderId();
    const imagecontainerID = "imagecontainerID";
    const img =document.getElementById(imagecontainerID)
    img.style.display = "block";
    
    
    
    
}


function toggleImage(checkbox) {
    const imageName = checkbox.value + "Image";
    const image = document.getElementById(imageName);

    if (checkbox.checked) {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

}

