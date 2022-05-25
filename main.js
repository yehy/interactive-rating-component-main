const main = document.querySelector('main');
const submit = document.getElementById('submit-rating');
const template = document.querySelector('template');
const rateNumber = document.querySelector('#numberOfRating');


let rate = 0;


selectRate()

submit.addEventListener('click', function moveToRatingSide() {
   if(rate != 0) {
       main.innerHTML = '';
       let temp = template.content.cloneNode(true);
       main.appendChild(temp);
       const rateResult = document.getElementById('rate');
       rateResult.innerHTML = rate;
       
   }
})

function selectRate (){
    rateNumber.childNodes.forEach(function(set){
        set.addEventListener('click', function(){
            rate = parseInt(set.innerHTML)

        })
    })
}