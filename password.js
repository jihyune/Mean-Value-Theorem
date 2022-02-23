function password(){
    var count = 0;    
    while(count < 3){
        var pass = prompt("비밀번호를 입력하세요.(1002)")
    if (pass === "1002"){
        alert("환영합니다^0^");
        break;
    } else {
        count++;
        alert("비밀번호가 일치하지 않습니다!!!("+count+"/3)")
    }
    if (count === 3){
        alert("접속이 불가합니다. 안녕히 가세요!");
        self.close();
        
    }
  }
  }
