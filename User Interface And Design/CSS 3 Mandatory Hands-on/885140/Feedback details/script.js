var arr = [];
function addFeedback(){
 //Fill the required logic   
 var feedback =  document.getElementById("feedback").value;
 arr[arr.length] = feedback;
 document.getElementById("feedback").value='';
 document.getElementById("result").innerHTML = '<table border><h2>Feedback details</h2><p>Succesfully Added Feedback Details!<p></table>';

}

function displayFeedback(){
    //Fill the required logic
    var result = "<h2>Feedback Details</h2>";
    for(var i = 0;i<arr.length;i++){
        result += "Feedback " + (i+1) + "<br>" + 
                    arr[i] + "<br>";
    }
     document.getElementById("result").innerHTML = result;
     arr = [];
    
}
