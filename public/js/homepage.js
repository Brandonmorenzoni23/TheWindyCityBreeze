document.getElementById('first-btn').addEventListener('click', firstImg)
document.getElementById('second-btn').addEventListener('click', secondImg)
document.getElementById('third-btn').addEventListener('click', thirdImg)




function firstImg(){
    console.log("showing first img!")
    document.getElementById('second-img').style.display = 'none'
    document.getElementById('third-img').style.display = 'none'
    document.getElementById('first-img').style.display = 'flex'
}

function secondImg(){
    console.log('second img shown!')
    document.getElementById('first-img').style.display = 'none'
    document.getElementById('third-img').style.display = 'none'
    document.getElementById('second-img').style.display = 'flex'
}

function thirdImg(){
    document.getElementById('second-img').style.display = 'none'
    document.getElementById('first-img').style.display = 'none'
    document.getElementById('third-img').style.display = 'flex'
}

function dropdown() {
    console.log("I Changed!!!")
    document.getElementsByClassName('below999px-dropdown-items')[0].style.display = 'none' ? 'flex':'none'
}


function dropdownforcontent() {
    console.log("I Changed!!!")
}

//carousel

//const firstImg= document.getElementById("scroll-container")

//firstImg.for


