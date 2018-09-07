require.config({
    paths:{
        'jquery' : './tool/jquery',
        'math' : './tool/math'
    }
})
require(['jquery','math'], function ($,math) {
    console.log($());
    console.log(math.add(1,2));
})