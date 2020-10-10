let links = document.querySelectorAll('.tabs-links li');
let content = document.querySelectorAll('.tabs-content li');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function () {
        for(let i=0;i<links.length;i++){
            let color = links[i].classList.contains('active');
            if(color){
                links[i].classList.remove('active')
            }
        }
        links[i].classList.add("active");
    })

}
for (let i = 0; i < links.length; i++) {
    (function (i) {
        let link = links[i];
        link.onclick = function () {
            for (let j = 0; j < content.length; j++) {
                let opacity = window.getComputedStyle(content[j]).display;
                if (opacity == "block") {
                    content[j].style.display = "none";
                }

            }
            content[i].style.display = "block";
        }
    })(i);
}
let second = document.querySelectorAll('.circle_item h4');
let first = document.querySelectorAll('.slider');
first[0].style.display ='block';
for (let i = 0; i < second.length; i++) {
    (function (i) {
        let link = second[i];
        link.onclick = function () {
            for (let j = 0; j < first.length; j++) {
                let opacity = window.getComputedStyle(first[j]).display;
                if (opacity == "block") {
                    first[j].style.display = "none";

                }
                second[j].style.opacity = '0.5'
            }
            first[i].style.display = "block";
            second[i].style.opacity = '1'

        }
    })(i);
}
let big = document.querySelector('#big'),
    subImg = document.querySelector('.grid');
subImg.addEventListener('click', e=>big.src = e.target.src);






