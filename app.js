

function getNumber(num)
{
        var result = document.getElementById('result');
        result.value +=num;  
       
}
function getHistory()
{
        var history = document.getElementById('history');
        history.value = result.value;
       
}

function clearResult()
{
        var result = document.getElementById('result');
         result.value = "";
}
function getResult()
{
        var result = document.getElementById('result');
        if (result.value==='')
        {
                result.value = "No values to calculate";
        }
        else{
                result.value = eval(result.value);
        }   
}
function deleteCharacter()
{     
        var result = document.getElementById("result").value;
        document.getElementById("result").value = result.substring(0,result.length-1);
}
        
function getSquare()
{       
                var result = document.getElementById('result');
                result.value= Math.pow(result.value,2);
       
}
function getCube()
{       
                var result = document.getElementById('result');
              result.value = Math.pow(result.value,3);
       
}
function getHalf()
{
                var result= document.getElementById('result');
                result.value = result.value/2;
}
function getSqrt(){
                        var result = document.getElementById("result");
                        result.value = Math.sqrt(result.value);
}

