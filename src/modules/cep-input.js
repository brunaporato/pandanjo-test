export function handleCepInput() {
  const cepInput = document.getElementById('cep-input');
  const calculateButton = document.querySelector('.outline-button');

  cepInput.addEventListener('input', function() {
    if (this.value.length > 9) {
      this.value = this.value.slice(0, 9);
    }
  })

  calculateButton.addEventListener('click', function(event) {
    event.preventDefault()
    alert(`O pedido para o CEP ${cepInput.value} chegará em breve.`)
  })
}