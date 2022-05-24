let genres = ['classic','rock','pop','pop','classic'],
    plays = [1200, 100, 750, 800, 750];
let genreByPlay = genres.reduce((acc,cur,idx)=>{
        acc[cur]=(acc[cur]||0)+plays[idx]
        return acc;
    },{});
let genres2 = genres.map((val,i) =>{
    var obj={
        genre:val,
        genrePlay:genreByPlay[val],
        play:plays[i]
    }
    return obj;

}).sort((a,b)=>(b.genrePlay-a.genrePlay || b.play-a.play ));


let arr = [1, 2, 3, 4, 5];
var map = arr.map(function(x) {
    return x * 2;
}); // [2, 4, 6, 8, 10]



function add(a,b){
    return a + b;
}

var c = 10;
function add2(a,b){
    return a + b + c;
}


var c = 20;
function add3(a,b){
    c = b; 
    return a + b;
}

let filter = ((array, condition) => array.filter(cond));
filter(arr,(x=>x%2==0)); // [2,4]

arr.reduce((prev, cur) => prev + cur); // 15