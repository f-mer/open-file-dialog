var dialog = require('./')

var btn = document.createElement('button')
btn.innerText = 'Upload images'
btn.addEventListener('click', function () {
  dialog({
    multiple: true,
    accept: 'image/*'
  }, function (images) {
    console.log(images)
  })
})

document.body.appendChild(btn)
