var imageMimes = ['image/png', 'image/bmp', 'image/gif', 'image/jpeg', 'image/webp', 'image/tiff', 'image/x-tiff', 'image/x-icon', 'image/x-tga', 'image/x-targa']; //Extend as necessary 
var acceptedMimes = new Array();
var canvas = document.createElement('canvas');

for (var i = 0; i < imageMimes.length; i++)
{
    if (canvas.toDataURL(imageMimes[i]).search(imageMimes[i]) >= 0)
	{
        acceptedMimes[acceptedMimes.length] = imageMimes[i];
    }
}

for (var i = 0; i < acceptedMimes.length; ++i)
{
	document.getElementById(acceptedMimes[i]).style.backgroundColor = "lime";
}
