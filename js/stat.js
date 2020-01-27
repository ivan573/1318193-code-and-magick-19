'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP = 10;
var COLUMN_GAP = 50;
var PADDING = 30;

var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var textField = PADDING + GAP + TEXT_HEIGHT * 2; // the variable is used to calculate the vertical space used by the 2 first lines of the text

var columnWidth = BAR_WIDTH + COLUMN_GAP; // the variable is used to divide the cloud into vertical columns

var startingPositions = { // the object is used to identify starting positions for objects inside of the cloud
  horizontal: CLOUD_X + PADDING,
  vertical: CLOUD_Y + PADDING
};

var idents = {
  secondTextLine: startingPositions.vertical + TEXT_HEIGHT + GAP,
  result: this.secondTextLine + GAP,
  bar: this.result + TEXT_HEIGHT + GAP,
  name: this.bar + BAR_HEIGHT + GAP
};
// debugger;
console.log(idents.secondTextLine);
console.log(idents.result);
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBarPosition = function (times, index, maxTime) { // the variable is used to the position of baseline of the bar
  BAR_HEIGHT - BAR_HEIGHT * times[index] / maxTime;
 }

var getColor = function (players, index) {
  if (players[index] === 'Вы') { // for the 'Вы' player the color is predefined
    return 'rgba(255, 0, 0, 1)';
  } else { // for other players the blue color with random saturation is used
    return 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
  }
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = TEXT_HEIGHT + 'px "PT Mono"';
  ctx.fillText('Ура вы победили!', startingPositions.horizontal, startingPositions.vertical);
  ctx.fillText('Вот список результатов:', startingPositions.horizontal, idents.secondTextLine);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), startingPositions.horizontal + columnWidth * i, idents.result);

    ctx.fillStyle = getColor(players, i);
    ctx.fillRect(startingPositions.horizontal + columnWidth * i, idents.bar + getBarPosition(times, i, maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = 'black';
    ctx.fillText(players[i], startingPositions.horizontal + columnWidth * i, idents.name);
  }
};
