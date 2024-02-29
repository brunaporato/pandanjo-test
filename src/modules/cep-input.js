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

    console.log(cepInput.value.length)

    if (cepInput.value.length < 8) {
      return alert('Insira um CEP válido.')
    }
    
    alert(`O pedido para o CEP ${cepInput.value} chegará em 4 dias.`)
  })
}