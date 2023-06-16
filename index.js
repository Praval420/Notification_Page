const unRead=document.querySelectorAll('.unread')
const count= document.getElementById('count')

count.innerText=unRead.length
function unreadOne(item){
    this.classList.remove('unread')
    var newCount=document.querySelectorAll('.unread')
    count.innerText=newCount.length
}


for (j=0;j<unRead.length;j++){
    unRead[j].addEventListener('click',unreadOne)
}

const markAll = document.getElementById('mark')

function unreadAll(){
    const allUnread=document.querySelectorAll('.unread')
    for(i=0;i<allUnread.length;i++){
        allUnread[i].classList.remove('unread')
    }    
    var newCount=document.querySelectorAll('.unread')
        count.innerText=newCount.length
}

markAll.addEventListener('click',unreadAll)