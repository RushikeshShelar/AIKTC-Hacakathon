// add event listener to payment form
document.querySelector('.payment-box form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form from submitting

    // get form inputs
    var name = document.querySelector('#name').value;
    var cardNumber = document.querySelector('#card-number').value;
    var expirationDate = document.querySelector('#expiration-date').value;
    var cvv = document.querySelector('#cvv').value;
    var amount = document.querySelector('#amount').value;

    // validate inputs
    if (!name || !cardNumber || !expirationDate || !cvv || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    // submit payment
    alert('Payment submitted successfully!');
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

fetch('/api/my-view/')

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // Load Font Awesome icons
window.onload = function() {
    var fa = document.createElement('link');
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    fa.rel = 'stylesheet';
    document.head.appendChild(fa);
  };