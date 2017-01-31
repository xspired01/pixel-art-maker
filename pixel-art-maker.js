//create the 'sketch pad area' for pixels
var body = document.getElementsByTagName('body')[0];
let sketchPadArea = document.createElement('div')
sketchPadArea.style.width = '40%';
sketchPadArea.style.padding = '10%';
sketchPadArea.className = 'container';

//loop to create pixels
for (var j = 0; j < 1008; j++) {
  let block = document.createElement('div');
    block.style.border = "thin solid black";
    block.style.backgroundColor = '#FFEFD8';
    block.style.float = 'left';
    block.style.paddingBottom = '3.0%';
    block.style.width = '3.0%';
    block.addEventListener('click', function() {
    this.style.backgroundColor = document.getElementById('picker').value;
  });
    sketchPadArea.appendChild(block)
  }
  body.appendChild(sketchPadArea);

  //color picker
  let input = document.createElement('input');
  input.type = "color";
  input.id = 'picker';
  sketchPadArea.appendChild(input);

  //clear area or container with button click
  let button = document.createElement('button');
  button.innerHTML = 'Clear Colors';
  sketchPadArea.appendChild(button);
  button.addEventListener('click', function() {
    var clearArea = document.getElementsByTagName('div')
    for (var i = 0; i < clearArea.length; i++) {
      clearArea[i].style.backgroundColor = '#FFEFD8';
      }
    });
