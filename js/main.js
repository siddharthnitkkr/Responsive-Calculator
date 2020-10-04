var on=0;
var screen_num='';

function reset(){
    document.getElementById('screen').innerHTML='0';  
    screen_num='';
    on=1;

    
}
function del()
{
    if(screen_num.length>0)
    {
        screen_num=screen_num.slice(0,screen_num.length-1)
        document.getElementById('screen').innerHTML=screen_num          
    }

}
function check_last()
{
    if(screen_num.length>0)
    {
        last_char=screen_num[screen_num.length -1];
        if(last_char=='-' || last_char=='/' || last_char=='*' ||last_char=='+')
        {
            screen_num=screen_num.slice(0,screen_num.length-1)
                   
        }
    }
}

function check(sym){
    if(screen_num.length>0)
    {
        last_char=screen_num[screen_num.length -1];
        if(last_char=='-' || last_char=='/' || last_char=='*' ||last_char=='+')
        {
            screen_num=screen_num.slice(0,screen_num.length-1)+ sym 
            document.getElementById('screen').innerHTML=screen_num          
            
        }
        else
        {   screen_num+=sym;
            document.getElementById('screen').innerHTML=screen_num
        }
        
    }

}
function getNumber(btn_num)
{
    console.log(btn_num);
    if(on==0)
        return;
    if(btn_num == '='){

        check_last();
        screen_num=eval(screen_num).toString();        
        document.getElementById('screen').innerHTML=screen_num;
       // alert(screen_num.length)

    }
    else if(btn_num == '+' || btn_num == '-' ||btn_num == '/'||btn_num == '*')
    {
         check(btn_num);       
    }
    else{
    screen_num+=(btn_num)
    document.getElementById('screen').innerHTML=screen_num;
    }
    


}
