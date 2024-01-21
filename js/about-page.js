let ninjasDiv = document.querySelector('.chef-ninjas');
let buttons = ninjasDiv.getElementsByTagName('button');

for (const button of buttons) {
    button.addEventListener('click', function(ev) {
        ev.preventDefault();

        let fullDiv = ev.currentTarget.parentNode.parentNode;
        let description = fullDiv.querySelector('.ninja-description');
        console.log(fullDiv);
        console.log(description);

        if (button.classList.contains('clicked')) {
            button.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
            description.style.display = 'none';
        } else {
            button.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
            description.style.display = 'flex';
        }

        button.classList.toggle('clicked');
    });
}
