var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var COLUMN_GAP = 50;

var textField = GAP * 2 + TEXT_HEIGHT * 2;
console.log(textField);

var columnWidth = BAR_WIDTH + COLUMN_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


ctx.fillStyle = '#000';
ctx.font = '16px "PT Mono"';
ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
ctx.fillText('Вот список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + GAP * 2);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + columnWidth * i, CLOUD_Y + textField + BAR_HEIGHT + TEXT_HEIGHT + GAP);
   ctx.fillRect(CLOUD_X + GAP + columnWidth * i, CLOUD_Y + textField + GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
}
