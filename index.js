function  getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var lis = document.querySelector('#grand-node')
  var child = lis.children[0]
  while (child) {
    node = child
    child = node.children[0]
  }

  return node 
}

