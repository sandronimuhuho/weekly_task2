
let str = "Saya belajar javascript";
//pemisahan array
     let s = str.split(" ");
//array kosong untuk menampung string  
      let reverseWord=[];
// looping mundur    
     for(let i=(s.length)-1;i>=0;i--)
     {
//push reverse word ke dalam array kosong
          reverseWord.push(s[i]); 
     }
//join reverse word
      console.log(reverseWord.join(" "));