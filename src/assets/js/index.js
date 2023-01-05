'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // console.log('---------------------\nDOMContentLoaded\n---------------------');
  const proteinParam = [
    { name: '厚揚げ', amount: 2 },
    { name: 'ピーナツ', amount: 2 },
    { name: '煮大豆', amount: 3 },
    { name: '豆腐 木綿', amount: 3 },
    { name: '豆腐 絹', amount: 3 },
    { name: 'ヨーグルト', amount: 3 },
    { name: 'チーズ', amount: 4 },
    { name: '納豆', amount: 4 },
    { name: '牛乳', amount: 5 },
    { name: '豆乳', amount: 5 },
    { name: 'ししゃも', amount: 2 },
    { name: 'ツナ缶', amount: 4 },
    { name: 'さば', amount: 4 },
    { name: 'さけ', amount: 5 },
    { name: 'さけフレーク', amount: 6 },
    { name: '魚肉ソーセージ', amount: 7 },
    { name: '白米', amount: 3 },
    { name: 'クロワッサン', amount: 3 },
    { name: 'ドーナツ', amount: 3 },
    { name: 'コーンフレーク', amount: 3 },
    { name: '玄米ご飯', amount: 4 },
    { name: 'オートミール', amount: 4 },
    { name: '食パン', amount: 4 },
    { name: 'レーズンパン', amount: 5 },
    { name: 'うどん・そうめん', amount: 5 },
    { name: 'メロンパン', amount: 6 },
    { name: 'あんぱん', amount: 7 },
    { name: 'ソーセージ', amount: 2 },
    { name: 'ベーコン', amount: 2 },
    { name: 'ハム', amount: 3 },
    { name: 'ハンバーグ', amount: 3 },
    { name: '鶏むね肉', amount: 5 },
    { name: '卵焼き', amount: 2 },
    { name: 'プリン', amount: 5 },
    { name: '卵', amount: 6 },
  ];

  const proteinElm = document.getElementsByName('param');

  for (let i = 0; i < proteinElm.length; i++) {
    proteinElm[i].addEventListener('click', function (e) {
      this.parentNode.classList.toggle('is-clicked');
      protein_sum(proteinParam);
    });
  }

  // プロテインの量を計算
  function protein_sum(param) {
    let sum = 0;
    let select = '';

    for (let i = 0; i < proteinElm.length; i++) {
      if (proteinElm[i].checked) {
        //連想配列を分解させて、その配列の中身を変数に代入
        let proteinParams = proteinParam[i];
        select += ' ■ ' + proteinParams['name'];
        sum += parseInt(proteinParams['amount']);
      }
    }
    //プロテインの合計量を表示
    const totalView = document.getElementById('js-totalView');
    totalView.innerText = sum;

    //選択している食品を表示
    const totalSelect = document.getElementById('js-totalSelect');
    totalSelect.innerText = select;
  }
});
