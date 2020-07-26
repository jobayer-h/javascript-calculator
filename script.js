var display = '';
    function btnHandelar(num){
        const btnText = document.getElementById(num).innerText;
        display = display + btnText;
        document.getElementById('display-1').value = display;
        
    }
    function calculate() {
        displayResult = eval(document.getElementById('display-1').value);
        document.getElementById('display-2').value = displayResult;
        clearDisplay(true);
    }
    function clearDisplay(id) {
        display = '';
        if (id == true) {
            document.getElementById('display-1').value = 0;
        }else{
            document.getElementById('display-1').value = 0;
            document.getElementById('display-2').value = 0;
        }
    }