let headerHeight = document.getElementsByClassName('header')[0].clientHeight;
let heroSection = document.getElementsByClassName('hero__section')[0];
let contactButton = document.getElementsByClassName('header__contact')[0]; 
let contactForm = document.createElement('div');
let wrapperDiv = document.getElementsByClassName('wrapper')[0];

heroSection.style.height = `calc(100dvh - ${headerHeight}px)`;

const createIframe = () => {
    console.log("hi");
    contactForm.className = 'contact__iframe';
    contactForm.innerHTML = '<div class = "contact__form"><i class = "fa fa-close contact__close" onclick = closeIframe()></i></div>';
    document.body.style.overflow = 'hidden'
    wrapperDiv.appendChild(contactForm);
}

const closeIframe = () => {
    document.body.style.overflow = 'auto'
    wrapperDiv.lastChild.remove();
}
contactButton.addEventListener('click', createIframe);