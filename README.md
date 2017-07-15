# open-file-dialog [![stability][0]][1]
[![npm version][2]][3] [![downloads][4]][5] [![js-standard-style][6]][7]
Opens the browsers file dialog

## Usage
```js
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
```

## API
### `dialog(opts, cb)`
- `opts.multiple` Allows selection of multiple files
- `opts.accept` Specifies allowed file extensions or MIME types. [more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/open-file-dialog.svg?style=flat-square
[3]: https://npmjs.org/package/open-file-dialog
[4]: http://img.shields.io/npm/dm/open-file-dialog.svg?style=flat-square
[5]: https://npmjs.org/package/open-file-dialog
[6]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[7]: https://github.com/feross/standard
