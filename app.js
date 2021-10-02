const item = document.querySelector('.item')

item.addEventListener('dragstart')
item.addEventListener('dragend')

const dragstart = () => {
    console.log('dragstart')
}

const dragend = () => {
    console.log('dragend')
}