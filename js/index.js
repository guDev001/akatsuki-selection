const members = [
    { name: 'Itachi Uchiha', id: 'itachi'},
    { name: 'Deidara', id: 'deidara'},
    { name: 'Hidan', id: 'hidan'},
    { name: 'Kisame', id: 'kisame'},
    { name: 'Pain', id: 'pain'},
    { name: 'Konan', id: 'konan'},
    { name: 'Zetsu', id: 'zetsu'},
    { name: 'Kakuzu', id: 'kakuzu'},
    { name: 'Obito', id: 'obito'},
    { name: 'Sasori', id: 'sasori'}
]

let activeMember = 0
const images = document.getElementById('images')
const menu =  document.getElementById('menu')
const navigation =  document.getElementById('navigation')
const memberName = document.getElementById('member__name')

function changeStatusButton(){
    const prev = document.getElementById('button__prev')
    const isFirst = activeMember == 0
    prev.disabled = isFirst

    const next = document.getElementById('button__next')
    const isLast = activeMember == members.length - 1
    next.disabled = isLast
}

function changeMember(memberId) {
    activeMember = memberId
    const member = members[activeMember]
    images.style.transform = `translateY(${-100 * activeMember }vh)`
    memberName.classList = member.id

    changeName(member.name)
    changeStatusButton()
}

function navigationMember(direction) {
    changeMember(activeMember + direction)
}

function changeMenu(){
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}

function setMember(memberId){
    changeMember(memberId)
    changeMenu()
}