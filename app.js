
const ul = document.querySelector('#totalwith_section');
const total =document.createElement('li');
const btntotal = document.querySelector('#btntotal');
btntotal.textContent ='Total$:'
btntotal.style.fontSize='30px';
btntotal.style.width='200px';
total.textContent = 0;

const btnwith = document.querySelector('#btnwith');
btnwith.textContent ='Withdraw$:'
btnwith.style.fontSize='25px';
btnwith.style.width='250px';

const withdraw = document.createElement('li');
withdraw.textContent =0;
total.style.color = 'white';
withdraw.style.color ='white';


btntotal.appendChild(total);
btnwith.appendChild(withdraw);
ul.appendChild(btntotal);
ul.appendChild(btnwith)


const select = document.querySelector('#select_section');
const options = ['Deposit', 'Withdraw'];
options.forEach((option) => {
    const opt = document.createElement('option');
    opt.textContent = option;
    select.appendChild(opt);
});

const input = document.querySelector('#input_section');
const button = document.querySelector('#submit_btn');

const myform =document.querySelector('#myform');
let totalbalance =0;
let withBalance =0;
let deposit=0;
myform.addEventListener('submit', (event) => {
    event.preventDefault();
  
    
    const value = Number(input.value);
    const selectedOption = select.value;
    
    if(isNaN(value) || value <=0){
        alert('Invalid input. Please enter a positive number.');
        return;
    }
    else{
        
        if(select.value ==='Deposit'){
            deposit=value;
            totalbalance = deposit;
            total.textContent = totalbalance

        }
        else if(select.value ==='Withdraw'){
            if(totalbalance < value){
                alert('Insufficient balance');
                return;
            }
            else{
                withBalance = value;
                totalbalance -= withBalance;
                total.textContent = totalbalance;
                withdraw.textContent = withBalance;
            }
            
        }
    }

    tablefunc(total.textContent,withdraw.textContent,deposit)
    
})
let number = 0;
function tablefunc(total,withdraw,deposit) {
    const table = document.querySelector('#mytable');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    const tr2 = document.createElement('tr');
    const time = new Date();
    const DateTime = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;

    tr2.appendChild(document.createElement('td')).textContent = ++number;
    tr2.appendChild(document.createElement('td')).textContent = deposit;
    tr2.appendChild(document.createElement('td')).textContent = withdraw;
    tr2.appendChild(document.createElement('td')).textContent = DateTime;
    tbody.appendChild(tr2);
    console.log(total,withdraw,deposit);


    

}

