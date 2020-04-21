document.getElementById('play').addEventListener('click', () => {
  document.getElementById('play').remove()
  document.getElementById('video').play()
  document.getElementById('timer-container').style.display = 'initial'

  let mainTimer = 0
  let record = 0
  let days = 0
  let hours = 0
  let minutes = 0
  let seconds = 0

  mainTimer = `&nbsp;&nbsp;${days} day${days > 1 ? 's' : ''} ${hours} hour${
    hours > 1 ? 's' : ''
  } ${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${
    seconds > 1 ? 's' : ''
  }`

  if (localStorage.getItem('record') === null) localStorage.setItem('record', 0)
  if (localStorage.getItem('Record In Text') === null)
    localStorage.setItem('Record In Text', mainTimer)

  setInterval(() => {
    seconds++

    if (seconds > 0 && seconds % 60 === 0) {
      minutes++
      seconds = 0
    }
    if (minutes > 0 && minutes % 60 === 0) {
      hours++
      minutes = 0
      seconds = 0
    }
    if (hours > 0 && hours % 60 === 0) {
      days++
      hours = 0
      minutes = 0
      seconds = 0
    }

    mainTimer = `${days} day${days > 1 ? 's' : ''} ${hours} hour${
      hours > 1 ? 's' : ''
    } ${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${
      seconds > 1 ? 's' : ''
    }`
    document.getElementById('timer').innerHTML = mainTimer

    record = days * 86400 + hours * 3600 + minutes * 60 + seconds

    if (record > localStorage.getItem('record')) {
      document.getElementById('record').innerHTML = mainTimer
      localStorage.setItem('Record In Text', mainTimer)
      localStorage.setItem('record', record)
    }
  }, 1000)

  document.getElementById('record').innerHTML = localStorage.getItem(
    'Record In Text'
  )
})
