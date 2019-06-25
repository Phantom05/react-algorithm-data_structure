function setPageNation(config) {
  let pageForm = document.getElementById(config.formId);
  pageForm.setAttribute('method', config.method);
  

  let tempElm = elt("div", {id: 'tempElm'});
  pageForm.after(tempElm);
  for (let i = config.startPage; i < config.startPage + config.pageLimit; i++) {
    let postBtnElm = elt("button", {
      type: "button",
      'data-page-btn': "postBtn"
    }, i + '');

    if (equal(i, config.curPage)) { // 초기화  value setting
      postBtnElm.setAttribute('value', 'click')
    }

    postBtnElm.addEventListener('click', function (e) {
      Array.from(tempElm.getElementsByTagName('button')).forEach(tagList => { // 초기화
        tagList.removeAttribute('value')
      });
      this.setAttribute('value', 'click'); // 클릭 세팅
      let selectBtnElm = Array.from(document.querySelectorAll(`#${tempElm.id} button`)).filter(btnList => {
        return btnList.getAttribute('value')
      })[0];

      let hiddenInput = Array.from(pageForm.getElementsByTagName('input')).filter(inputList => {
        return inputList.hasAttribute('hidden')
      })[0];
      hiddenInput.setAttribute('value', selectBtnElm.textContent);
      pageForm.setAttribute('action', `${config.action}/${selectBtnElm.textContent}`);
      console.log(pageForm);


      let includeForm = config.includesForm;
      let properties = (nullCheck(includeForm)) ? includeForm : 0;
      if (properties.length) { //includeForm이 있으면.
        properties.map(formList => {
          getExistElmInForm(formList).forEach(elmList=>{
            // checkExtiseElm(pageForm,elmList)
            elmList.setAttribute('hidden',true);
            pageForm.appendChild(elmList);
            // console.log(Array.from(pageForm.elements).includes(elmList));
            // !pageForm.contains(elmList)
            // if(!Array.from(pageForm.elements).includes(elmList)){
            //   pageForm.appendChild(elmList);
            // }
            // if(!pageForm.hasOwnProperty(elmList)){ // 중복방지
            //   pageForm.appendChild(elmList);
            // }
          })
        })

      }
      
      // pageForm.submitBtn.click();

    })
    tempElm.appendChild(postBtnElm);
  }



  // if (equal(config.method, "get")) {
  //   // get
  //   if(config.curPage > config.pageLimit){
  //    let prevBtn =  elt("a",{
  //      href:`${config.action}/${config.startPage-1}`,
  //      class: "pageNum"},'<');
  //     pageForm.insertBefore(prevBtn,pageForm.firstElementChild)
  //    }

  //   // let startPageMultiplyPageLimit= (config.startPage * config.pageLimit);
  //   // let startPagePlusPageLimit = (config.startPage + config.pageLimit);
  //   // let viewPageLimit = (startPageMultiplyPageLimit <= config.totalPage)?startPagePlusPageLimit:Math.floor(config.totalPage / config.pageLimit);

  //   for (let i = config.startPage; i <= config.endPage; i++) {
  //     let pageNum = elt("a", {
  //       href: `${config.action}/${i}`,
  //       class: `pageNum ${ equal(config.curPage ,i)?"on":""}`
  //     }, i + '');
  //     pageForm.appendChild(pageNum);
  //   }


  //   // curPageSet != totalPageSet && totalPageSet > 2
  //   // if(config.curPage > config.pageLimit){
  //   //  let prevBtn =  elt("a",{
  //   //    href:`${config.action}/${config.endPage+1}`,
  //   //    class: "pageNum"},'>');
  //   //   pageForm.appendChild(prevBtn,pageForm.firstElementChild)
  //   //  }

  // } else {
  //   // post 
  // let tempElm = elt("div", {id: 'tempElm'});
  // pageForm.after(tempElm);
  // for (let i = config.startPage; i < config.startPage + config.pageLimit; i++) {
  //   let postBtnElm = elt("button", {
  //     type: "button",
  //     'data-page-btn': "postBtn"
  //   }, i + '');

  //   if (equal(i, config.curPage)) { // 초기화  value setting
  //     postBtnElm.setAttribute('value', 'click')
  //   }

  //   postBtnElm.addEventListener('click', function (e) {
  //     Array.from(tempElm.getElementsByTagName('button')).forEach(tagList => { // 초기화
  //       tagList.removeAttribute('value')
  //     });
  //     this.setAttribute('value', 'click'); // 클릭 세팅
  //     let selectBtnElm = Array.from(document.querySelectorAll(`#${tempElm.id} button`)).filter(btnList => {
  //       return btnList.getAttribute('value')
  //     })[0];

  //     let hiddenInput = Array.from(pageForm.getElementsByTagName('input')).filter(inputList => {
  //       return inputList.hasAttribute('hidden')
  //     })[0];
  //     hiddenInput.setAttribute('value', selectBtnElm.textContent);
  //     console.log(pageForm);
  //     // pageForm.submitBtn.click();

  //   })
  //   tempElm.appendChild(postBtnElm);
  // }
  // }
  pageForm.addEventListener('submit', function (e) {
    // e.preventDefault();
  })

}