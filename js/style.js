

let miHamBtn = document.querySelector('.miHamBtm')
let dHamBtn = document.querySelector('.d-hamBtn')
let dHamMenu= document.querySelector('.header_hamburger_menu')
// 햄버거 버튼 누르면 나오기
console.log(dHamMenu)
dHamBtn.addEventListener('click',function(){
  dHamMenu.style.display="block"
  miHamBtn.style.display="block"
  dHamBtn.style.display="none"
  

})
miHamBtn.addEventListener('click',function(){
  dHamMenu.style.display="none"
  miHamBtn.style.display="none"
  dHamBtn.style.display="block"
  

})














// NAV 첫번째 슬라이드

let bannerBox = document.querySelector(".imgbox");
let bannerBoxContent = document.querySelectorAll(".imgbox>li");
let bannerBoxWrap = document.querySelector("nav");
let bannerPrevBtn = document.querySelector(".nav_leftbox");
let bannerNextBtn = document.querySelector(".nav_rightbox");
let bannerText = document.querySelector(".banner-text-slide-wrap");
let bannerTextContent = document.querySelectorAll(".text-banner-slide");

let cur = 1;

//네비 배너 li
const firstLi = bannerBox.firstElementChild; //첫번째 LI를 firstElementChild 로 구함
const LastLi = bannerBox.lastElementChild; //마지막 LI를 lastElementChild 로 구함
let firstCloneLi = firstLi.cloneNode(true); //cloneNode 를 통해 firstLi를 복사 한 후 변수 firstCloneLi에 넣음
let LastCloneLi = LastLi.cloneNode(true); //cloneNode 를 통해 LastLi 복사 한 후 변수 LastCloneLi에 넣음
bannerBox.appendChild(firstCloneLi);
bannerBox.insertBefore(LastCloneLi, bannerBox.firstElementChild);

const firstTextLi = bannerText.firstElementChild; //첫번째 LI를 firstElementChild 로 구함
const LastTextLi = bannerText.lastElementChild; //마지막 LI를 lastElementChild 로 구함
let firstCloneTextLi = firstTextLi.cloneNode(true); //cloneNode 를 통해 firstLi를 복사 한 후 변수 firstCloneLi에 넣음
let lastCloneTextLi = LastTextLi.cloneNode(true); //cloneNode 를 통해 LastLi 복사 한 후 변수 LastCloneLi에 넣음
bannerText.appendChild(firstCloneTextLi);
bannerText.insertBefore(lastCloneTextLi, bannerText.firstElementChild);

function transitionSlides() {
  bannerBox.style.transition = ".5s";
  bannerBox.style.transform = `translateX(${-1400 * cur}px)`;
  bannerText.style.transform = `translateX(${-330 * cur}px)`;
  bannerText.style.transition = ".5s";

  setTimeout(function () {
    if (cur === bannerBoxContent.length) {
      // 마지막 슬라이드에서 첫 번째 슬라이드로 이동하는 경우
      bannerBox.style.transition = "0s";
      bannerBox.style.transform = "translateX(0)";
      bannerText.style.transition = "0s";
      bannerText.style.transform = "translateX(0)";
      cur = 0;
    } else if (cur === -1) {
      // 첫 번째 슬라이드에서 마지막 슬라이드로 이동하는 경우
      bannerBox.style.transition = "0s";
      bannerBox.style.transform = `translateX(${
        -1400 * (bannerBoxContent.length - 1)
      }px)`;
      bannerText.style.transition = "0s";
      bannerText.style.transform = `translateX(${
        -330 * (bannerBoxContent.length - 1)
      }px)`;
      cur = bannerBoxContent.length - 1;
    }
  }, 500);
 
}

function nextMove() {
  if (cur < bannerBoxContent.length) {
    cur++;
    transitionSlides();
  }
}

function prevMove() {
  if (cur > 0) {
    cur--;
    transitionSlides();
  } else {
    cur = bannerBoxContent.length;
    bannerBox.style.transition = "0s";
    bannerBox.style.transform = `translateX(${-1400 * cur}px)`;
    bannerText.style.transition = "0s";
    bannerText.style.transform = `translateX(${-330 * cur}px)`;
    cur--;
    setTimeout(function () {
      bannerBox.style.transition = ".5s";
      bannerBox.style.transform = `translateX(${-1400 * cur}px)`;
      bannerText.style.transition = ".5s";
      bannerText.style.transform = `translateX(${-330 * cur}px)`;
    }, 10);
  }
}

// 슬라이드 컨테이너의 너비 설정
bannerBox.style.width = `${1400 * (bannerBoxContent.length + 2)}px`;
bannerText.style.width = `${330 * (bannerBoxContent.length + 2)}px`;
bannerBox.style.transform = `translateX(${-1400 * cur}px)`; // 초기 위치 설정
bannerText.style.transform = `translateX(${-330 * cur}px)`; // 초기 위치 설정

bannerNextBtn.addEventListener("click", nextMove);
bannerPrevBtn.addEventListener("click", prevMove);
let isPaused = false; // 초기에는 일시정지 상태가 아님

let loopInterval = setInterval(() => {
  if (!isPaused) {
    // 일시정지 상태가 아닐 때만 슬라이드 전환 수행
    nextMove();
  }
}, 3000);

bannerBoxWrap.addEventListener("mouseover", () => {
  isPaused = true; // 마우스가 위에 올라갈 경우 일시정지 상태로 변경
});

bannerBoxWrap.addEventListener("mouseout", () => {
  isPaused = false; //마우스가 벗어날 경우 일시정지 상태 해제
});

//MAIN 첫번째 슬라이드 KCDF 소식
let mainSlideWrap =document.querySelector(".poster_slide")
let mainSlide = document.querySelector(".main-slide");
let mainSlideContent = document.querySelectorAll(".main-slide> li");
let mainSlidePreBtn = document.querySelector(".pre_btn");
let mainSlideNextBtn = document.querySelector(".next_btn");
mainCurr = 1;

let mainSContentWidth = mainSlideContent.scrollWidth;
console.log(mainSContentWidth);

let fullLI = [];
mainSlideContent.forEach(function (li) {
  fullLI.push(li.cloneNode(true));
});

fullLI.forEach(function (li) {
  mainSlide.appendChild(li);
});

//무브 함수 만들기

function mainMove() {
  mainSlide.style.transform = `translateX(${-412 * mainCurr}px)`;
  mainSlide.style.transition = ".5s";

  setTimeout(function () {
    if (mainCurr === mainSlideContent.length ) {
      mainSlide.style.transform = "translateX(0)";
      mainSlide.style.transition = "0s";
      mainCurr = 0;
    } else if (mainCurr === 0) {
      mainSlide.style.transform = `translateX(${
        -412 * (mainSlideContent.length )
      }px)`;
      mainSlide.style.transition = ".5s";
      mainCurr = mainSlideContent.length ;
    }
  }, 0);
}
function pmainMove() {
  mainSlide.style.transform = `translateX(${-412 * mainCurr}px)`;
  mainSlide.style.transition = ".5s";

  setTimeout(function () {
    if (mainCurr === mainSlideContent.length - 1) {
      mainSlide.style.transform = "translateX(0)";
      mainSlide.style.transition = ".0s";
      mainCurr = 0;
    } else if (mainCurr === -1) {
      mainSlide.style.transform = `translateX(${
        -412 * (mainSlideContent.length -1)
      }px)`;
      mainSlide.style.transition = ".5s";
      mainCurr = mainSlideContent.length - 1;
    }
  }, 500);
}

function nextnav() {
  if (mainCurr < mainSlideContent.length+1 ) {
    mainCurr++;
  } else {
    mainCurr = 0;
    
  }
  mainMove();
}

 mainSlide.style.transform = `translateX(${-412 * (mainCurr)}px)`; // 초기 위치 설정
mainSlide.style.width = `${412 * mainSlideContent.length}px`;

function mainPrev() {
  if (mainCurr > 0) {
    mainCurr--;
    pmainMove();
  } else {
    mainCurr = mainSlideContent.length;
    mainSlide.style.transition = "0s";
    mainSlide.style.transform = `translateX(${-412 * mainCurr}px)`;

    mainCurr--;
    setTimeout(function () {
      mainSlide.style.transition = ".5s";
      mainSlide.style.transform = `translateX(${-412 * mainCurr}px)`;
    }, 0);
  }
}

mainSlidePreBtn.addEventListener("click", mainPrev);
//넥스트 버튼
mainSlideNextBtn.addEventListener("click", nextnav);

let setIntervalId = setInterval(function () {
  nextnav();
}, 4000);

mainSlideWrap.addEventListener("mouseover", function () {
  clearInterval(setIntervalId);
});

mainSlideWrap.addEventListener("mouseleave", function () {
  setIntervalId = setInterval(function () {
    nextnav();
  }, 4000);
});
//kcdf 알림

$(".article_chart").each(function () {
  let topDiv = $(this);
  let anchors = topDiv.find(".article_menu>ul a");
  let panelDivs = topDiv.find(".abtm>table");

  let lastAnchor;
  let lastPanel;
  lastAnchor = anchors.filter(".on");
  lastPanel = $(lastAnchor.attr("href"));

  panelDivs.hide();
  lastPanel.show();

  anchors.click(function (e) {
    e.preventDefault();
    let currentAnchor = $(this);
    let currentPanel = $(currentAnchor.attr("href"));
    lastAnchor.removeClass("on");
    currentAnchor.addClass("on");

    lastPanel.hide();
    currentPanel.show();

    lastAnchor = currentAnchor;
    lastPanel = currentPanel;
  });
});


/* 
 const tourWrap = document.querySelector(".tourwrap")
 const tourcont = document.querySelectorAll(".tour")
 const tourPreBtn = document.querySelector(".fa-chevron-left")
 const tourNextBtn = document.querySelector(".fa-chevron-right")
 const tourPageNum = document.querySelector(".c-pnv")
 */


 const tourWrap =$(".tourwrap")
 const tourcont =$(".tour")
 const tourPreBtn =$(".fa-chevron-left")
 const tourNextBtn = $(".fa-chevron-right")
 const tourPageNum = $(".c-pnv")
console.log(tourcont)

 fade()
 function fade(){
  let tcur=1

  tourNextBtn.click(function(){
    if(tcur >=tourcont.length){
      tcur=0
    }
    tourcont.removeClass("show")
    tourcont.eq(tcur).addClass("show")
    tcur++
    updatePageNum();
  })
  
  tourPreBtn.click(function() {
    tcur--;
    if (tcur == 0) {
      tcur = 4;
    }
    console.log(tcur)
    tourcont.removeClass("show");
    tourcont.eq(tcur-1).addClass("show");
    updatePageNum();
  });

  function updatePageNum() {
    let num = tcur ;
    tourPageNum.html(num);
  }

  updatePageNum();
 }
