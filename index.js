module.exports = dialog

function dialog (opts, cb) {
  var input = document.createElement('input')

  if (opts.multiple)  input.setAttribute('multiple', '')
  if (opts.accept) input.setAttribute('accept', opts.accept)
  input.setAttribute('type', 'file')
  input.style.display = 'none'

  input.addEventListener('change', function (e) {
    cb(input.files)
    input.remove()
  })

  document.body.appendChild(input)

  var event = document.createEvent('MouseEvent')
  event.initMouseEvent('click', false, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  input.dispatchEvent(event)
}
