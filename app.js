const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resultArea =  document.getElementById('result-div');

const resetInputs = () => {
    var resultCard = document.getElementById("result");
    var errorCard = document.getElementById("error");
    if (resultCard != null){
        resultCard.remove();
    }
    if(errorCard != null){
        errorCard.remove();
    }
    heightInput.value = '';
    weightInput.value = '';
};

const verifyInputResult = () => {
    const removeResult = document.getElementById("result");
    return removeResult;
}

function checkInputField() {
    if(heightInput.value == ''){
        const alertHeight = document.createElement('ion-alert');
        alertHeight.cssClass = 'ops';
        alertHeight.header = 'Ops';
        alertHeight.message = 'The Height field cannot be empty!';
        alertHeight.buttons = [
            {
            text: 'Ok',
            role: 'ok',
            cssClass: 'secondary',
          }
        ];
        document.body.appendChild(alertHeight);
        return alertHeight.present() || true;
    }

    if(weightInput.value == ''){
        const alertWeight = document.createElement('ion-alert');
        alertWeight.cssClass = 'error';
        alertWeight.header = 'Ops';
        alertWeight.message = 'The Weight field cannot be empty!';
        alertWeight.buttons = [
            {
            text: 'Ok',
            role: 'ok',
            cssClass: 'secondary',
          }
        ];
        document.body.appendChild(alertWeight);
        return alertWeight.present() || true;
    }

    if(heightInput.value == '0'){
        alertZero('Height');
        return true;
    } if(weightInput.value == '0') {
        alertZero('Weight');
        return true;
    }

    function alertZero(input){
        const alertZero = document.createElement('ion-alert');
        alertZero.cssClass = 'ops';
        alertZero.header = 'Ops';
        alertZero.message = 'The ' + input + ' field cannot be zero!';
        alertZero.buttons = [
            {
            text: 'Ok',
            role: 'Ok',
            cssClass: 'secondary',
          }
        ];
        document.body.appendChild(alertZero);
        return alertZero.present();
    }
    
}

const calculateBmi = () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;
    var bmi = enteredWeight / (enteredHeight * enteredHeight);

    bmi = bmi.toFixed(2);
    if (checkInputField()){
        return;
    }
    

    if (isNaN(bmi)) {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'error';
        alert.header = 'Error';
        alert.message = 'Not a number, please check inputs!';
        alert.buttons = [
            {
            text: 'Ok',
            role: 'ok',
            cssClass: 'secondary',
          }

        ];
        document.body.appendChild(alert);
        return alert.present();
    }

    const resultElement = document.createElement('div');
    resultElement .setAttribute("id", "result");
    resultElement.innerHTML = `
      <ion-card>
        <ion-card-content>
            <h2 class="strong">${bmi}</h2>
        </ion-card-content>
    </ion-card>
    `;

    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);

};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInputs);