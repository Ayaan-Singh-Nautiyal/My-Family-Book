var images = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var about = ["Family Book" , "My Grandfather" , "My Father" , "My Brother" , "My Sister" , "My Mother"]

var i = 0;
function update() { 
  if(i == 5 ) { i=0; }
   document.getElementById("family_member_image").src  = images[i]; i++ 
   document.getElementById("family_member_name").innerHTML = names[i]; 
   document.getElementById("about_family_member").innerHTML = about[i];
}