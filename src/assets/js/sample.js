
var size = [
  { "name" : "Sサイズ", "price" : 1980},
  { "name" : "Mサイズ", "price" : 2980},
  { "name" : "Lサイズ", "price" : 3980},
];

var option = [
  { "name" : "裾上げ", "price" : 500},
  { "name" : "今後のオプション追加用", "price" : 1},
];

var size_click = document.getElementsByName('size');
//sizeをチェックした際にイベント発生させる
for(i=0;i<size_click.length;i++){
  size_click[i].addEventListener('click', function(e){
      price_sum(size, option);
  });
}

var option_click = document.getElementsByName('option');
//optionをチェックした際にイベント発生させる
for(i=0;i<option_click.length;i++){
  option_click[i].addEventListener('click', function(e){
      price_sum(size, option);
  });
}

function price_sum(size, option){
  var sum = 0;
  var select = "";

  //size(ラジオボタン)合計計算
  for (var i = 0; i < size_click.length; i++){
      if(size_click[i].checked){

          //連想配列を分解させて、その配列の中身を「select,sum」に代入
          var sizes = size[i];
          select +=　" ■ " + sizes["name"] +":"+ sizes["price"] + "円";
          sum += parseInt(sizes["price"]);
      }
  }

  //option（チェックボックス）合計計算
  for (var i = 0; i < option_click.length; i++){
      if(option_click[i].checked){

          //連想配列を分解させて、その配列の中身を変数に代入
          var options = option[i];
          select += " ■ " + options["name"] +":"+ options["price"] + "円";
          sum += parseInt(options["price"]);
      }
  }

  //id="total_view"にsumを表示
  var totalView = document.getElementById('total_view');
  totalView.innerText = sum;

  //id="total_select"にselectを表示
  var total_select = document.getElementById('total_select');
  total_select.innerText = select;
}