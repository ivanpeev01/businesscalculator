var monthcount = 1;

function addMoreOneMonth() {
    document.getElementById("add").innerHTML += (
		'<fieldset>' + 
		'<legend>' + "Месец " + (monthcount + 1) + '</legend>' + 
			
		'	<input type="date" name="month">' + 
			
		'	<input name="income" type="text" step="0.01" min="0.0" placeholder="Приход:">' + 
		'	<input name="expense" type="text" step="0.01" min="0.0" placeholder="Разход:">' + 
			
		'</fieldset>' + 
		'<br>'
	);
	
	monthcount += 1;
}

function calcTax() {
var incomeSum;
    var input = document.getElementsByName('income');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        incomeSum = a.value;
    }

    var tax = 0.8 * incomeSum;

    document.querySelector(".tax").innerHTML += new Intl.NumberFormat().format(tax) + " лв.";
}

function calcProfit() {
    var incomeSum;
    var expenseSum;
    var inputIncomes = document.getElementsByName('income');

    for (var i = 0; i < inputIncomes.length; i++) {
        var a = inputIncomes[i];
        incomeSum = a.value;
    }

    var inputExpense = document.getElementsByName('expense');

    for (var i = 0; i < inputExpense.length; i++) {
        var a = inputExpense[i];
        expenseSum = a.value;
    }
    var profit = incomeSum - expenseSum - (0.8 * incomeSum);

    document.querySelector(".profit").innerHTML += new Intl.NumberFormat().format(profit) + " лв.";
}
