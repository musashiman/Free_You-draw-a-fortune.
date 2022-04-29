// 正しいコーディングを精査するためにuse strictで厳格化しておく。
'use strict';

{
    const btn = document.querySelector('#btn');

    btn.addEventListener('click',()=>{
        const results = ['大吉','中吉','凶','末吉']
        btn.textContent = results[Math.floor(Math.random()*results.length)]


        // Matn.random()のみを使ったおみくじ出目の確立操作

        // const n = Math.random();
        // if (n <0.05){
        //     btn.textContent = '大吉'
            
        // }else if(n < 0.2){
        //     btn.textContent = '中吉';
            
        // }else{
        //     btn.textContent = '凶'
        // }

        
        // switchを使ったおみくじの出目操作

        // // const n = Math.floor(Math.random()*results.length);
        // btn.textContent =n;
        // switch(n){
        //     case 0:
        //         btn.textContent ='大吉';
        //         break;
        //     case 1:
        //         btn.textContent ='中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '凶';
        //         break;
        //     case 3:
        //         btn.textContent = '末吉';
        //         break;
        // }
    })

}