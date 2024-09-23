function changeDiv() {
    const score = document.querySelector('input[name="score"]:checked');
    const hideDiv = document.getElementById('main-div');
    const showDiv = document.getElementById('hidden-div')
    const message = document.querySelector('#score-result')

    hideDiv.style.display = 'none'
    showDiv.style.display = 'block'

    message.innerHTML += `You selected ${score.value} out of 5`
}