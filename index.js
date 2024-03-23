array=['https://icms-image.slatic.net/images/ims-web/0d216dd2-08fd-450a-bf84-0a60fbdf3459.jpg','https://icms-image.slatic.net/images/ims-web/583c6875-5b96-495a-a9eb-4f486cf56488.jpg','https://icms-image.slatic.net/images/ims-web/ea87b495-d575-4de6-b385-7c47349db14c.jpg','https://icms-image.slatic.net/images/ims-web/fc8a4900-1e5e-42ab-9cd4-468ae25fc583.png','https://icms-image.slatic.net/images/ims-web/d01caa71-9c68-4c12-a35e-f6c10c53e73d.jpg']
position=0;
document.getElementById('next').addEventListener('click',()=>{
    if(position==array.length-1){
        position=-1;
        document.getElementById('change').setAttribute('src',array[position+1]);

    }
    else{
        document.getElementById('change').setAttribute('src',array[position+1]);
    }
  
    position++;
}
)
document.getElementById('ahead').addEventListener('click',()=>{
    if(position<1){
        position=array.length;
        console.log(position);
        document.getElementById('change').setAttribute('src',array[position-1] );
    }
   
    else{
        document.getElementById('change').setAttribute('src',array[position-1] )
}
     position--;
})
  