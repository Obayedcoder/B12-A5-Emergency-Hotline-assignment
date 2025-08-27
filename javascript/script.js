
 const historyData = [];





// Heart icon function
          let heartRate = parseInt(document.getElementById("heart-red").innerText);
          const heartIcons = document.getElementsByClassName("heart-icon");

        for(let heartIcon of heartIcons){
        heartIcon.addEventListener('click', function() {
    heartRate++;
    document.getElementById("heart-red").innerText = heartRate;
    
  })};


// CallBack perameter

callBack("call-button1", "service1", "call1");
callBack("call-button2", "service2", "call2");
callBack("call-button3", "service3", "call3");
callBack("call-button4", "service4", "call4");
callBack("call-button5", "service5", "call5");
callBack("call-button6", "service6", "call6");
callBack("call-button7", "service7", "call7");
callBack("call-button8", "service8", "call8");
callBack("call-button9", "service9", "call9");




//   call & coin deduction function

         function callBack(id1, id2, id3){
           const callButton = document.getElementById(id1);
            callButton.addEventListener('click', function(){
           const serviceName = document.getElementById(id2).innerText;
           const call1 = document.getElementById(id3).innerText;
          let coinCount = parseInt(document.getElementById("coin-count").innerText);
          if(coinCount>=20){
         alert("📞"+ "calling"+" "+serviceName+" "+ call1);  
         coinCount = coinCount - 20;
                  const data = {
                service: serviceName,
                number: call1,
                time: new Date().toLocaleTimeString()
                
            }
            historyData.push(data);
          if(coinCount<0) coinCount = 0;
          document.getElementById("coin-count").innerText = coinCount;
            callButton.style.backgroundColor = "gray";
   
         const historyDiv = document.getElementById("history");
         historyDiv.innerHTML = "";

for (const datas of historyData) {
    const div = document.createElement('div');
    div.className = "flex justify-between items-center font-semibold mt-2 p-2 bg-gray-100 rounded-lg shadow";
    div.innerHTML = `
        <div>
            <p>${datas.service}</p>
            <p class="text-gray-400">${datas.number}</p>
        </div>
        <div>
            <p>${datas.time}</p>
        </div>
    `;
    historyDiv.appendChild(div);
}
           

          }
        else{
            alert("❌ You don't have enough coins to make a call! ")
          }

          })
          
         
        }






// History Clear function


        document.getElementById("clear").addEventListener('click', function() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = ""; 
    historyData.length = 0;    
});



// Copy funtion

 
          let copyIcon = parseInt(document.getElementById("copy-icon").innerText);
          const copyButton = document.getElementsByClassName("copy-btn");

        for(let copyBtn of copyButton){
        copyBtn.addEventListener('click', function() {
    const parent = this.parentElement.parentElement;  
    const text = parent.querySelector(".copy-me").innerText;
    navigator.clipboard.writeText(text);

    alert("Copied: " + text);
  
    copyIcon++;
    document.getElementById("copy-icon").innerText = copyIcon;
    
  })}
   


