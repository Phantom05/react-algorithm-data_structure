class toggleDim {
  constructor(config) {
    this.config = config;
    this.setting(config)
  }
  /**
   * 
   * @param {*} config 
   * setting을 해주는 메서드인데, attr 걸린 모든 태그를 가져와서 클릭 이벤트를 주고 버블링을 막은 다음에 클릭했을때 토글로 줄 타겟의 클래스를 이벤트로 저장해둔다.
   */
  setting(config) {
    const configElmList = Array.from(document.querySelectorAll(`[${config.attr}]`));
    if (configElmList.length) {
      configElmList.map(list => {
        list.addEventListener('click', (e) => {
          e.stopPropagation();
          // 바디 클릭에 이벤트 바인딩
          this.bodySetting(list, config);
          document.querySelector(list.getAttribute(`${config.attr}`)).classList.add(config.control.class);
        })
      })
      // this.bodySetting(configElmList,config);
    }
  }
  /**
   * 
   * @param {*} list 
   * @param {*} config 
   * 바디를 클릭했을때 리스트들을 포문돌면서, toggleDimControl 함수를 실행하는데, id값을 넣어주고 콜백으로는 지정한 클래스를 제거해준다.
   */
  bodySetting(list, config) {
    const main = this;
    document.body.addEventListener('click', tmpEventFn);

    function tmpEventFn(e) {
      const targetId = list.getAttribute(config.attr).substr(1);
      main.toggleDimControl({
        id: targetId
      }, function () {
        document.getElementById(`${targetId}`).classList.remove(config.control.class);
        // 바인딩 이벤트 제거
        document.body.removeEventListener('click', tmpEventFn)
      })(e)

      // list.map(in_list=>{
      //   const targetId = in_list.getAttribute(config.attr).substr(1);
      //   main.toggleDimControl({id: targetId}, function () {
      //     document.getElementById(`${targetId}`).classList.remove(config.control.class);
      //     // 바인딩 이벤트 제거
      //   })(e)
      // })
    }

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

  /**
   * 
   * @param {*} attr 
   * @param {*} fn 
   * 토글딤 하뭇에서는 부모를 찾는 함수를 실행하는데 클릭했을때 e.target의 재귀로 부모를 찾을떄 해당 attr에 해당하는 부모가 없으면 콜백함수를 실행하고 있으면 아무것도 실행하지 않는다. 때문에 bodySetting에서 만들 콜백 함수가 동작하게 된다.
   */
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


// 구버전
/**
 * class toggleDim {
  constructor(config) {
    this.config = config;
    this.setting(config)
  }
  setting(config) {
    const configElmList = Array.from(document.querySelectorAll(`[${config.attr}]`));
    if (configElmList.length) {
      configElmList.map(list => {
        list.addEventListener('click', function (e) {
          e.stopPropagation();
          document.querySelector(list.getAttribute(`${config.attr}`)).classList.add(config.control.class);
        })
      })

      this.bodySetting(configElmList, config);
    }
  }
  bodySetting(list, config) {
    const main = this;
    document.body.addEventListener('click', function (e) {
      list.map(in_list => {
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
    return function (e) {
      const menu = findParent(e.target, attr);
      if (!menu) fn(e);
      else {
        console.log('o');
      }
    }
  }


}

new toggleDim({
  attr: "data-toggle-target",
  control: {
    class: "on"
  }
})
 */