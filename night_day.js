var body = {
    backgroundcolor : function(color){
      document.querySelector('body').style.backgroundColor = color;
    },
    textcolor : function(color){
      document.querySelector('body').style.color = color;
    }
}
var link = {
    linkColor : function(color){
      var a = document.querySelectorAll('a');
      for(i = 0 ; i < a.length ; i++){
          a[i].style.color = color;
      }
    }
}
var highlight = {
    highlightColor : function(color){
      var h = document.getElementsByClassName('highlight');
      for(i = 0 ; i < h.length ; i++){
        h[i].style.color = color;
      }
    }
}
function NightDayHandler(self){
  if(self.value === 'night ver'){         
      body.backgroundcolor('black');
      body.textcolor('white');
      link.linkColor('white');
      highlight.highlightColor('yellow');          
      self.value = 'day ver';
  } else{
      body.backgroundcolor('white');
      body.textcolor('black');
      link.linkColor('black');
      highlight.highlightColor('blue');
      self.value = 'night ver';        
}
}