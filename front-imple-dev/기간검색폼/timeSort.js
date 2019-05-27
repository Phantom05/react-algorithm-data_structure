document.querySelector(`[data-form="searchDateForm"]`).addEventListener('submit', function (e) {
  e.preventDefault();
  let data = {
    startYears: this.startYears.value,
    startMonth: this.startMonth.value,
    startDate: this.startDate.value,
    endYears: this.endYears.value,
    endMonth: this.endMonth.value,
    endDate: this.endDate.value
  }
  console.log(data);
})


document.querySelector('[data-box="searchDateBtnBox"]').addEventListener('click', function (e) {
  console.log(e.target.dataset);
  if (e.target.dataset.btn == "date-box") {
    console.log('f');
  }
})


