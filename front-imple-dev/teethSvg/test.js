function getNum(str) {
  return +str.replace(/[^0-9]/g, '')
}

function insertTeethId(elm, idName) {
  Array.prototype.slice.call(document.querySelectorAll(elm)).map((list, idx) => {
    list.setAttribute('id', idName + (idx + 1))
  })
}

function setTeethState(name) {
  function insetTeeth(name) {
    const FDI_TEETH_NUM = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48];
    const UNIVERSAL_TEETH_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    const PALMER_TEETH_NUM = [8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8];
    const condition = {
      palmer: PALMER_TEETH_NUM,
      fdi: FDI_TEETH_NUM,
      universal: UNIVERSAL_TEETH_NUM
    }
    $('text.st2').each(function (idx, item) {
      item.innerHTML = condition[name][idx]
    });
  }
  insetTeeth(name);
  return insetTeeth
}
const setTeeth = setTeethState('fdi');
const data = [];
const res = $('#res');
const teeth_bridge = document.querySelector('#teeth_bridge');
const teeth_outer = document.querySelector('#teeth_outer');

insertTeethId('#teeth_bridge > circle', 'b');
insertTeethId('#teeth_outer > circle', 't');

$('circle').on('click', function (e) {
  const $this = $(this);
  const id = $this.attr('id');

  if (data.includes(id)) {
    _.pull(data, id);
    $this.removeAttr('class')
  } else {
    let className = (id[0] === 'b') ? 'on bridge' : 'on';
    $this.addClass(className);
    data.push(id);
  }

  res.html(JSON.stringify(data))
  // var new_data = _.groupBy(data.sort(),  (x) =>x[0]);
})


const teeth__label_box= document.getElementById('teeth__label_box');
teeth__label_box.addEventListener('click',function(e){
  const stateName = e.target.getAttribute('data-teeth-state');
  setTeeth(stateName);

})