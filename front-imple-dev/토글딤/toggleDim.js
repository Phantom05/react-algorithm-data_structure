
class toggleDim {
  constructor(config) {
    this.config = config;
    this.setting(config)
  }
  setting(config){
    const configElmList = Array.from(document.querySelectorAll(`[${config.attr}]`));
    configElmList.map(list => {
      list.addEventListener('click', function (e) {
        e.stopPropagation();
        document.querySelector(list.getAttribute(`${config.attr}`)).classList.add(config.control.class);
      })
    })
    this.bodySetting(configElmList,config);
  }
  bodySetting(list,config){
    const main = this;
    document.body.addEventListener('click', function (e) {
      list.map(in_list=>{
        const targetId = in_list.getAttribute(config.attr).substr(1);
        main.toggleDimControl({
          id: targetId
        }, function () {
          document.getElementById(`${targetId}`).classList.remove(config.control.class);
        })(e)
        
      })
    })
  }
  findParent(elm, attributes) {
    const resArr = [],
      tmp = elm;
    if (attributes && typeof attributes !== "string") {
      for (var attr in attributes) {
        elm = tmp;
        if (attributes.hasOwnProperty(attr)) {
          if (elm.getAttribute(attr) === attributes[attr]) {
            resArr.push(elm);
          } else {
            while (elm = elm.parentElement) {
              if (elm.getAttribute(attr) == attributes[attr]) {
                resArr.push(elm);
                break;
              }
            };
          }
        }
      }
    }
    return (resArr.every(x => x === resArr[0]) && resArr.length === Object.keys(attributes).length) ? resArr[0] : null;
  }

  toggleDimControl(attr, fn) {
    const main = this;
    return function (e) {
      const menu = main.findParent(e.target, attr);
      if (!menu) fn(e);
      else {
        // console.log('o');
      }
    }
  }
}

