var Module = Module || {};
Module.hello = (function (_Module, global) {

  // var Controller = {};
  // (Controller.users = function ($) {
  //   var nameClick = function () {
  //     console.log("show")
  //   };
  //   $(function () {
  //     $("#view .name").click(nameClick);
  //   })
  // })

  // function Model() {}

  // Model.prototype.calculate = function (a, b) {
  //   this.sum = a + b;
  //   return this.sum;
  // };

  // function View() {
  //   this.myid = document.getElementById("myid");
  //   this.hello = document.getElementById('hello');
  // }

  // View.prototype.displayResults = function (a) {
  //   this.myid.innerHTML = a;
  // }

  // function controller() {
  //   this.myModel = new Model();
  //   this.myView = new View();
  //   this.myView.displayResults(this.myModel.calculate(30, 30));
  // }

  // return {
  //   controller: controller()
  // }

})(Module.hello, window)

console.log(this.myModel);
console.log(this.myView);


// 
// function Model() {
//   this.myModel = new Model();
//   this.myView = new View();
// }

// Model.prototype.calculate = function (a, b) {
//   this.sum = a + b;
//   this.myView.displayResults();
//   return this.sum;
// };

// function View() {
//   this.myid = document.getElementById("myid");
// }

// View.prototype.displayResults = function (a) {
//   this.myid.innerHTML = a;
// }

// function controller() {
//   this.myModel.calculate(30, 30)
// }
// controller()
// 



function Model() {}

function controller() {
  this.myModel = new Model();
}

Model.prototype.plus = function (a, b) {
  this.sum = a + b;
  ViewPlus.displayResults(this.sum);
};

Model.prototype.minus = function (a, b) {
  this.minus = a - b;
  ViewMinus.displayResults(this.sum);
};

controller.prototype.plus = function (a, b) {
  this.myModel.calculate(a, b);
}

controller.prototype.minus = function (a, b) {
  this.myModel.minus(a, b);
}

function ViewPlus() {
  this.myid = document.getElementById("myid");
  this.hello = document.getElementById('hello');
}

ViewPlus.prototype.displayResults = function (a) {
  this.myid.innerHTML = a;
}

function ViewMinus() {
  this.myid = document.getElementById("myid");
  this.hello = document.getElementById('hello');
}

ViewMinus.prototype.displayResults = function (a) {
  this.myid.innerHTML = a;
}

function View3() {
  this.myid = document.getElementById("myid");
  this.hello = document.getElementById('hello');
}

View3.prototype.displayResults = function (a) {
  this.myid.innerHTML = a;
}

function ViewE() {
  this.aaa = document.getElementById("event");
  this.bbb = document.getElementById("event");

  aaa.addEventListener("click", clickPlus(30, 30));
  bbb.addEventListener("click", clickMinus(30, 30));

}

function clickPlus(a, b) {
  /*
  if(a가 숫자인지 검증){
      return console.log("숫자아님");
  }

  if(b가 숫자인지 검증){
      아니면 리턴
      return console.log("숫자아님");
  }
  */
  controller.plus(a, b)
}

function clickMinus(a, b) {

}

/*
만약에 page를 이동해야하는 경우에는 모델에서 뷰를 리턴을 해주고 컨트롤러에서 뷰를 리다이렉트 시켜주면 됨~

*/





function ListModel(items) {
  this._items = items;
  this._selectedIndex = -1;
  this.itemAdded = new Event(this);
  this.itemRemoved = new Event(this);
  this.selectedIndexChange = Event(this);
}

ListModel.prototype = {
  getItems: function () {
    return [].concat(this._items);
  },

  addItem: function (item) {
    this._items.push(item);
    this._itemAdded.notify({
      item: item
    });
  },

  removeItemAt: function (index) {
    var item;
    item = this._items[index];
    this._items.splice(index, 1);
    this._itemRemoved.notify({
      item: item
    });
    if (index === this._selectedIndex) {
      this.setSelectedIndex(-1);
    }
  },

  getSelectedIndex: function () {
    var previousIndex;
    previousIndex = this._selectedIndex;
    this._selectedIndex = index;
    this._selectedIndexChanged.notify({
      previous: previousIndex
    });
  }
}

function Event(sender) {
  this._sender = sender;
  this._listeners = [];
}


Event.prototype = {
  attach: function (listener) {
    this._listeners.push(listener);
  },
  notify: function (args) {
    var index;
    for (index = 0; index < this._listeners.length; index += 1) {
      this._listeners[index](this._sender, args);
    }
  }
};


function ListView(model, elements) {
  this._model = model;
  this._elements = elements;
  this.listModified = new Event(this);
  this.addButtonClicked = new Event(this);
  this.delButtonClicked = new Event(this);
  var _this = this;
  this._model.itemAdded.attach(function () {
    _this.rebuildList();
  })
}
