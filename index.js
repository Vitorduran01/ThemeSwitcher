const trocarCor = document.getElementById("trocar")
const sol = document.getElementById('sol')
const lua = document.getElementById('lua')

trocarCor.addEventListener('click', (event) =>{
  document.documentElement.classList.toggle('light')
  lua.classList.toggle('hide')
  sol.classList.toggle('hide')
})










