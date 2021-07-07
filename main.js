var img = [];
var i=0;
var closeButton = [];

function setup()
{
  noCanvas();
  inputValue = createInput();

  showImageButton = createButton("顯示圖片");
  showImageButton.mouseClicked(showImage);

  createP("");
}



function showImage()
{
  i = inputValue.value();
  img[i] = createImg(i +".png");

  closeButton[i] = createButton("X", i);
  closeButton[i].mouseClicked(closeImage);

  inputValue.value("");
};

function closeImage()
{
  this.hide();
  i = this.value();
  img[i].hide();
}
