let score = 0

const updateCounterInHtml = () => {
  document.querySelector('.scoreChange').textContent = score
  console.log(score)
  if (score >= 21) {
    document.querySelector('.result1').textContent = 'Team One Wins!'
  }
}

const updateCounterInHtml2 = () => {
  document.querySelector('.scoreChange2').textContent = score
  console.log(score)
  if (score >= 21) {
    document.querySelector('.result2').textContent = 'Team Two Wins!'
  }
}

const updateTeamOneName = () => {
  const name = document.querySelector('.nameInput').value
  document.querySelector('.output').textContent = name
}
const updateTeamTwo = () => {
  const name = document.querySelector('.nameInputTwo').value
  document.querySelector('.outputTwo').textContent = name
}

const main = () => {
  console.log('hello there!')
  updateCounterInHtml()
}
const addOneToScore1 = () => {
  console.log('button was clicked')
  score += 1
  if (score > 21) {
    document.querySelector('team-1-add-1-button').disable = true
  }
  updateCounterInHtml()
}

const subtractOneFromScore1 = () => {
  console.log('button was clicked')
  score -= 1
  if (score < 0) {
    document.querySelector('team-1-subtract-1-button').disable = true
  }
  updateCounterInHtml()
}
const addOneToScore2 = () => {
  console.log('button was clicked')
  score += 1
  if (score > 21) {
    document.querySelector('team--add-1-button').disable = true
  }
  updateCounterInHtml2()
}
const subtractOneFromScore2 = () => {
  console.log('button was clicked')
  score -= 1
  if (score < 0) {
    document.querySelector('team-2-subtract-1-button').disable = true
  }
  updateCounterInHtml2()
}

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToScore1)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneFromScore1)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToScore2)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromScore2)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwo)
