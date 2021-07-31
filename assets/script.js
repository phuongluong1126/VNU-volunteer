//mobile btn
var header = document.getElementById("header");
var mobileButton = document.getElementById("mobile-btn");
var headerHeight = header.clientHeight;
mobileButton.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-nav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// cate-item active
const tabs = document.querySelectorAll(".cate-item");

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    document
      .querySelector(".cate-item.cate-active")
      .classList.remove("cate-active");
    this.classList.add("cate-active");
  };
});

// tart-item active

const targetTabs = document.querySelectorAll(".target-icon");
const targetItems = document.querySelectorAll(".target-item");
console.log(targetTabs);
console.log(targetItems);
targetTabs.forEach((target, index) => {
  target.onclick = function () {
    var activeIcon = document.querySelector(".target-icon.target-icon-active");
    activeItem = document.querySelector(".icon-up");
    activeIcon.classList.remove("target-icon-active");
    activeItem.remove();

    this.classList.add("target-icon-active");
    newChild = document.createElement('div');
    newChild.classList.add("icon-up");
    newChild.innerHTML='<i class="fas fa-caret-up"></i>';
    console.log(newChild);
    targetItems[index].appendChild(newChild);
    console.log(targetItems[index]);
  };
});
