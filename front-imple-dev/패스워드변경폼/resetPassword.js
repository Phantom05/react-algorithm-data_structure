document.querySelector('.reset__form').addEventListener('click', function (e) {
  if (e.target.classList.contains('reset__password_input_show_icon')) {
    Array.from(document.querySelectorAll('.reset__form input[data-name="reset-input"]'))
      .forEach(x => (x.type == 'text') ? x.type = 'password' : x.type = 'text')
  }
})
//filter로 수정

function arrValueCheck(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) return false
  }
  return true;
}

// 숫자 문자 8자리.

let rPassword = /^(?=.*[a-zA-Z])(?=.*)(?=.*[0-9])(?!.*\s).{8,}$/;
document.querySelector('.reset__form').addEventListener('submit', function (e) {
  e.preventDefault();

  let inputArr = document.querySelectorAll('.reset__input');

  if (!getValue(inputArr, function (val) {
      return val.value.replace(/\s/gi, "").length < 1
    })) {
    alert('칸을 모두 입력해주세요');

  } else {
    let configJson = {
      method: 'POST',
      url: '/profile/reset/password',
      data: {
        pastPassword: this.pastPassword.value,
        newPassword: this.newPassword.value
      }
    }
    let resetForm = document.querySelector('[data-name="password-reset-form"')
    doAxios(configJson, function (response) {
      if (response.isResult) { // 유저는 있음
        Array.from(document.querySelector('[data-id="resetPastPassword"').children).forEach(
          x => {
            if (response.register) {
              if (x.classList.contains('reset__password_input_tx')) {
                x.classList.remove('active');
                alert('비밀번호가 변경되었습니다.')
              }
            } else {
              if (x.classList.contains('reset__password_input_tx')) {
                x.classList.add('active');
                alert('비밀번호가 틀립니다.')
              }
            }
          })
      } else {
        console.log('유저도 없어')
      }
    })

    let newPassword = document.getElementById('resetNewPassword');
    let rePassword = document.getElementById('resetReNewPassword');
    doKeyupTxFunc(newPassword, rePassword, rPassword);
    doValueEqualFunc(newPassword, rePassword);
  }

})


document.querySelector('form[data-name="password-reset-form"]').addEventListener('keyup', function (e) {

  let curElement = document.activeElement;
  let newPassword = document.getElementById('resetNewPassword');
  let rePassword = document.getElementById('resetReNewPassword');
  if (curElement.name == "newPassword") {

    doKeyupTxFunc(newPassword, rePassword, rPassword);

  } else if (curElement.name == "rePassword") {

    doValueEqualFunc(newPassword, rePassword);
  }
})

function doKeyupTxFunc(newPassword, rePassword, reg) {
  Array.from(newPassword.parentNode.parentNode.children).forEach(x => {
    if (x.dataset.name == "reset-status-view") {
      if (reg.test(newPassword.value)) {
        x.classList.remove('active')
      } else {
        x.classList.add('active')
      }
    }
  })
  if (rePassword.value.length != 0) {
    doValueEqualFunc(newPassword, rePassword)
  }
}

function doValueEqualFunc(newPassword, rePassword) {
  Array.from(rePassword.parentNode.parentNode.children).forEach(x => {
    if (x.dataset.name == "reset-status-view") {
      if (newPassword.value == rePassword.value) {
        x.classList.remove('active')
      } else {
        x.classList.add('active')
      }
    }
  })
}



// if (response.register) {
//   if (x.classList.contains('reset__password_input_tx')) {
//     x.classList.remove('active');
//     alert('비밀번호가 변경되었습니다.')
//   }
// } else {
//   if (x.classList.contains('reset__password_input_tx')) {
//     x.classList.add('active');
//     alert('비밀번호가 틀립니다.')
//   }
// }




// if (response.register) { // 비밀번호 변경
//   Array.from(document.querySelector('[data-id="resetPastPassword"').children).forEach(
//     x => {
//       if (x.classList.contains('reset__password_input_tx')) x.classList.remove('active')
//     })
//   alert('변경되었습니다.')
// } else { // 비밀번호 틀림
//   Array.from(document.querySelector('[data-id="resetPastPassword"').children).forEach(
//     x => {
//       if (x.classList.contains('reset__password_input_tx')) x.classList.add('active')
//     })
// }




// function doNewToRePasswordReg(newPassword,rePassword,reg ){
//   Array.from(newPassword.parentNode.parentNode.children).forEach(x => {
//     if(x.dataset.name=="reset-status-view"){
//       if (reg.test(newPassword.value)){
//         x.classList.remove('active')
//       }else{
//         x.classList.add('active')
//       }
//     }
//   })

//   Array.from(rePassword.parentNode.parentNode.children).forEach(x => {
//     if(x.dataset.name=="reset-status-view"){
//       if (newPassword.value == rePassword.value){
//         x.classList.remove('active')
//       }else{
//         x.classList.add('active')
//       }
//     }
//   })
// }




// document.getElementById('resetNewPassword').addEventListener('keyup', function (e) {
//   doKeyupTxFunc(this, rPassword)
// })
// document.getElementById('resetReNewPassword').addEventListener('keyup', function (e) {
//   doValueEqualFunc(document.getElementById('resetNewPassword'), this, rPassword)
// })



// if (reg.test(tg.value)) {
//   Array.from(tg.parentNode.parentNode.children).forEach(x => {
//     if (x.classList.contains('reset__password_input_tx')) {
//       x.classList.remove('active')
//     }
//   })
// } else {
//   Array.from(tg.parentNode.parentNode.children).forEach(x => {
//     if (x.classList.contains('reset__password_input_tx')) {
//       x.classList.add('active')
//     }
//   })
// }




// if (tg1.value == tg2.value) {
//   Array.from(tg2.parentNode.parentNode.children).forEach(x => {
//     if(x.dataset.name=="reset-status-view"){
//       x.classList.remove('active')
//     }
//   })
// } else {
//   Array.from(tg2.parentNode.parentNode.children).forEach(x => {
//     if(x.dataset.name=="reset-status-view"){
//       x.classList.add('active')
//     }
//   })
// }