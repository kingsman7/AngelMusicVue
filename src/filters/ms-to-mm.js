const msToMm = {}

function convertMsToMm (ms) {
  const min = Math.floor(ms / 6000)
  const sec = ((ms % 6000 / 1000).toFixed(0))

  return `${sec}:${min}`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msToMm
