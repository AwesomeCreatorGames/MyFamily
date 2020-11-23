var images = [
  "https://i2.wp.com/thesavvyreader.ca/wp-content/uploads/2017/06/newspaper.gif?fit=600%2C600&ssl=1",
  "https://www.engiel.com/wp-content/uploads/2019/05/GIF-Super-mom-1.gif",
  "https://i.pinimg.com/originals/37/79/c8/3779c8364c72407dd23b3e00dcebe4ed.gif",
  "https://thumbs.gfycat.com/IckyGrotesqueLacewing-size_restricted.gif",
];
var labels = [
  "My  Dazzling Father!",
  "My Supermom!",
  "Me, the Awesome!",
  "My Annoying Sister!",
];
var i = 0;
function nextslide() { 
 
   if(i == 4)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
    document.getElementById("").innerhtml = labels[i]
  i++;
 
}
 
}
