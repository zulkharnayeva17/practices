const data = new Date();
function  date() {
   document.getElementById('data').value = data;
}
function  names(){
   document.getElementById('names').value = "Dilnaz Zulkharnayeva";
    document.getElementById('Group').value = "CS-2121N";
}
function calculate(){
   document.getElementById('vis').style.display ="none";
   document.getElementById('time').style.display ="block";
   let Year = 2024 - data.getFullYear();
   let Month = 8 - data.getMonth();
   let day =20 - data.getDate();
   let hours = 18 - data.getHours();
   let  minutes = 0;
   if (data.getMinutes()>0) {
      let minutes = 60 - data.getMinutes();
      hours--;
   }
   document.getElementById('time').value="Time: Year: " + Year.toString( ) + " Months " +Month.toString() + " Days: " +day.toString() +" Hours: " +hours.toString() + " Minutes: " +minutes.toString();
}

function Divide(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first / second;
}
function Multiply(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first * second;
}
