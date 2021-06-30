const ul = document.getElementById('ul');

ul.addEventListener('click', (e) => {
    for (let link of ul.children) {
        link.querySelector('a').classList.remove('active')
    }
    e.target.classList.add('active')
})

/* acvtive mobile nav */

const mobileNav = document.querySelector('.mobile-nav')

mobileNav.addEventListener('click', (e)=>{
    for(let i of mobileNav.children){
        i.classList.remove('active')
    }
    e.target.classList.add('active')
})

/*end acvtive mobile nav */