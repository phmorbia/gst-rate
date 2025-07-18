const num1= document.getElementById('price');
const gstRate= document.getElementById('gstRate');
const result= document.getElementById('result');

function calculate() {
    const val1 = parseFloat(num1.value);
    const op = gstRate.value;

    if(!isNaN(val1))
    {
        let res;
        switch(op)
        {
            case '5' :
                res = val1/1.05;
                break;

            case '12' :
                res = val1/1.12;
                break;

            case '18' :
                res = val1/1.18;
                break;

            case '28' :
                res = val1/1.28;
                break;
        }
        result.textContent = '=' + res;
    }
    else{
        result.textContent= '=0';
    }
}
[num1,gstRate].forEach(el => el.addEventListener('input',calculate));