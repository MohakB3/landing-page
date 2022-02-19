console.log('Hello World');

function stringLength() 
{
    let user = prompt('Hey, please enter your name!', 'Name');
    if(user != '' && user != null){
        alert(`String Length is: ${user.length}`);   
    }
}

function numberChecker() 
{
    let numberValue = document.getElementById('number_input').value;
    if(numberChecker != '') 
    {
        if(numberValue <= 10 && numberValue > 0) 
        {
            alert("That's really small.");
        }
        else if(numberValue > 10 && numberValue <= 50)
        {
            alert("not too big.");
        }
        else if(numberValue > 50 && numberValue <= 100)
        {
            alert("That's a big one!");
        }
        else 
        {
            alert("HEY, ENTER A VALID NUMBER");
        }


    }
}

function pizzaCalculator() 
{
    let pepperoniPizzaCost = 12.95;
    let hawaiianPizzaCost = 14.95;
    let tax = 0.05;

    let pepperoniPizzaAmount = document.getElementById('pepperoni_input').value;
    let hawaiianPizzaAmount = document.getElementById('hawaiian_input').value;

    if(pepperoniPizzaAmount != '' && hawaiianPizzaAmount != '') 
    {
        let subtotal = pepperoniPizzaCost * pepperoniPizzaAmount + hawaiianPizzaCost * hawaiianPizzaAmount;
        let total = subtotal + subtotal * tax;
        alert(`Subtotal: $${Math.round(subtotal *100 )/100}\nTotal: $${Math.round(total * 100 )/100}`);
    }
}   

function split() 
{
    let twoDigit = document.getElementById('two_digit_input').value;
    let digitOne = twoDigit/10;
    let num = Number(twoDigit);

    if(twoDigit.length == 2 && Number.isInteger(num)) 
    {
        document.getElementById("output").innerHTML = Math.floor(digitOne);
        document.getElementById("output2").innerHTML = twoDigit % 10;
    }
    else 
    {
        alert('HEY, ENTER A 2 DIGIT NUMBER');
    }
}

function mail() 
{
    let packageWeight = document.getElementById('package_weight').value;
    let packageLength = document.getElementById('package_length').value;
    let packageHeight = document.getElementById('package_height').value;
    let packageWidth = document.getElementById('package_width').value;

    let volume = packageHeight * packageLength * packageWidth;

    if (packageWeight <= 0.5 && volume <= 0.2) 
    {
        alert("Package Shipped!");
    }
    else if(packageWeight <= 0.5 && volume > 0.2) 
    {
        alert(`Shipping failed, package volume was too big by ${volume - 0.2}m².`);
    }
    else if(packageWeight > 0.5 && volume <= 0.2) 
    {
        alert(`Shipping failed, package weight was too heavy by ${packageWeight - 0.5}kg.`);
    }
    else if(packageWeight > 0.5 && volume > 0.2)
    {
        alert(`Shipping failed, package weight was too heavy by ${packageWeight - 0.5}kg and package volume was too big by ${volume - 0.2}m².`);
    }
}

function doMath(operator) 
{
    let number1 = calculation1.value;
    let number2 = calculation2.value;
    
    switch(operator)
        {
            case '+':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) / parseFloat(number2);
                break;
        }
}

function doMathModified() 
{
    let number1 = calculation1.value;
    let number2 = calculation2.value;
    let operator = calculation_operator.value;

    if(operator === '+' || operator === '-' || operator === '*' || operator === '/') 
    {
        switch(operator)
        {
            case '+':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                document.getElementById('calculator_display_text').innerHTML = parseFloat(number1) / parseFloat(number2);
                break;
        }
    }
}
