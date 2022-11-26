/* ハンバーガーメニュー*/
const ham = document.querySelector('#js-hamburger');
    const nav = document.querySelector('#js-nav');
    
    ham.addEventListener ('click',function(){
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    });

/*nav背景色の変化*/
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("scroll-nav",window.scrollY > 100);
});    


//スクロールで浮かび上がる
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll',()=>{
    for (let i = 0;i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset ||document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
            if(scroll > offset - windowHeight + 150){
                fadeInTarget[i].classList.add('scroll-in');
            }
    }
});


//ローディング
const loader = document.getElementById('js-loader');
window.addEventListener('load',()=>{
    const ms = 400;
    const loaderOpacity = function(){
        loader.style.opacity = 0;
    }
    const loaderDisplay = function(){
        loader.style.display = "none"
    }
    setTimeout(loaderOpacity,3000);
    //opacityが0になるのを3秒待つ
    setTimeout(loaderDisplay,3000 + ms);
});


//トップへ戻る
window.onload=function(){
    let animation=function(){
        let pageTop = document.getElementById('page_top');

        let rect = pageTop.getBoundingClientRect();
        let scrollTop = rect.top + window.pageYOffset;

        if(scrollTop > 420){
            pageTop.classList.add('show');
        } else{
            pageTop.classList.remove('shoow');
        }
        window.addEventListener('scroll',animation);
    }
}

 


//タブ
document.addEventListener('DOMContentLoaded',function(){
        //クリックにイベント適用
        const tabs = document.getElementsByClassName('tab');
         for(let i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click',tabSwitch,false);
            }
            //クリックで実行する関数
            function tabSwitch(){
                document.getElementsByClassName('is-active')[0].classList.remove('is-active');
                 this.classList.add('is-active');
                document.getElementsByClassName('is-show')[0].classList.remove('is-show');
                  const arrayTabs = Array.prototype.slice.call(tabs);
                  const index = arrayTabs.indexOf(this);
                document.getElementsByClassName('panel')[index].classList.add('is-show');
            };
    }, false);
