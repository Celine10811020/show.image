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
  img[i] = createImg("https://raw.githubusercontent.com/Celine10811020/show.image/main/"+ i +".png");

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
