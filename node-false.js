var nameStr="赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜";
var nameStr2="北京河北天津上海";
var nameStr3="TKHS";
function ran(n,m){
    return Math.round(Math.random()*(m-n)+n);
}
var ary=[];
for(var i=0;i<86;i++){
    var obj={};
    obj["id"]=i<10?"00"+i:"0"+i;
    obj["address"]=nameStr[ran(0,31)]+nameStr2[ran(0,7)];
    obj["train"]=nameStr3[ran(0,3)]+ran(0,99);
    obj["time"]=ran(0,23)+':00';
    obj["lat"]=ran(0,120)+'.00';
    obj["lon"]=ran(0,120)+'.00';
    ary.push(obj);
}
console.log(JSON.stringify(ary));