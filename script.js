const form = document.getElementById('form')

/* e.preventDefault - evita da pagina ser carregar ao clicar em submit(enviar) */
form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let data = {
    nome,
    email
  }

  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Carrengando...</p>`

  let pronto = `<p>Pronto</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 2000)
})
