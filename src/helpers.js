export function randomlyGenerateArray(size, maxNumber, sorted=true) {
  var array = [];
  while (array.length < size) {
    var newNumber = Math.floor((Math.random() * maxNumber) + 1);
    if (array.length === 0 || array.indexOf(newNumber) === -1) {
      array.push(newNumber);
    }
  }

  return sorted ? array.sort(function(a,b){return a - b}) : array;
}

export function selectAlgoGroup(e) {
  if (e.target.innerHTML === "Search" || e.target.className === "search-img") {
    document.getElementById("search-tab").className += " tab-selected";
    document.getElementById("sort-tab").classList.remove("tab-selected");
  } else if (e.target.innerHTML === "Sort" || e.target.className === "sort-img") {
    document.getElementById("sort-tab").className += " tab-selected";
    document.getElementById("search-tab").classList.remove("tab-selected");
  };
}

export var selectionSortTimeout;
