function index() {
    $(function() {
        $("#dowebok").fullpage({
            sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7"],
            menu: "#menu",
            "navigation": true
        })
    }); (function() {
        var progressChild = document.getElementById("progressChild");
        var loadingText = document.getElementById("loadingText");
        var loadingIco = document.getElementById("loadingIco");
        var loadingMask = document.getElementById("bannerMask");
        var bannerText = document.getElementsByClassName("banner-text")[0];
        var progressCont = 0;
        progressChild.style.width = progressCont + "%";
        var loadingInter = setInterval(function() {
            progressCont++;
            progressChild.style.width = progressCont + "%";
            loadingText.innerText = progressCont + "%";
            loadingMask.style.height = 100 - progressCont + "%";
            loadingMask.style.top = (progressCont) / 2 + "%";
            if (progressCont > 100 && progressCont < 105) {
                progressChild.style.width = "100%";
                loadingText.innerText = "正在进入..."
            } else {
                if (progressCont == 105) {
                    window.clearInterval(loadingInter);
                    loadingIco.classList.add("removeThis");
                    var fpTableCell = document.getElementsByClassName("toNext-ico")[0].classList.add("active");
                    loadingMask.style.display = "none";
                    bannerText.className = "banner-text active"
                }
            }
        },
        30);
        var animTextBox = document.getElementsByClassName("anim-text-box")[0];
        var orderTime1 = setTimeout(function() {
            animTextBox.getElementsByTagName("p")[0].classList.add("active")
        },
        100);
        var orderTime2 = setTimeout(function() {
            animTextBox.getElementsByTagName("p")[1].classList.add("active")
        },
        2000);
        var orderTime3 = setTimeout(function() {
            animTextBox.getElementsByTagName("p")[2].classList.add("active")
        },
        5000);
        var speed = 0;
        var scorllPN = document.getElementById("scorllPN");
        var scorllPNSon = document.getElementById("scorllPNSon");
        var scorllPNSonChild = scorllPNSon.getElementsByTagName("p");
        var Marquee = setInterval(function() {
            speed++;
            scorllPNSon.style.top = 0 - speed + "px";
            if (speed == scorllPNSonChild[0].offsetHeight) {
                speed = 0;
                scorllPNSon.appendChild(scorllPNSonChild[0])
            }
        },
        6);
        var tabTit = document.getElementById("tabTit").getElementsByTagName("li");
        var tabCon = document.getElementById("tabCon").getElementsByTagName("dd");
        for (var i = 0; i < tabTit.length; i++) {
            tabCon[i].style.display = "none";
            tabCon[0].style.display = "block";
            tabTit[i].index = i;
            tabTit[i].onclick = function() {
                for (var i = 0; i < tabTit.length; i++) {
                    tabTit[i].className = "";
                    tabCon[i].style.display = "none"
                }
                this.className = "active";
                tabCon[this.index].style.display = "block"
            }
        }
        var ryNewsYear = document.getElementsByClassName("ry-news-year")[0].getElementsByTagName("dl");
        var ryNewsBox = document.getElementsByClassName("ry-news-box");
        for (var i = 0; i < ryNewsYear.length; i++) {
            ryNewsYear[i].index = i;
            ryNewsYear[i].onmouseover = function() {
                for (var i = 0; i < ryNewsYear.length; i++) {
                    ryNewsYear[i].classList.remove("action");
                    ryNewsBox[i].classList.remove("active")
                }
                this.classList.add("action");
                ryNewsBox[this.index].classList.add("active")
            }
        }
        var serviceList = document.getElementById("serviceList").getElementsByTagName("li");
        for (var i = 0; i < serviceList.length; i++) {
            serviceList[i].index = i;
            serviceList[i].onclick = function() {
                localStorage.setItem("serviceIndex", this.index);
                location.href = "com_service.html"
            }
        }
    })()
}
function leftMenu(id, classN, storage) {
    var paneTwo = document.getElementById(id);
    var paneTwoTop = paneTwo.offsetTop + document.getElementsByClassName(classN)[0].offsetTop;
    var _thisHeight=document.getElementsByClassName(classN)[0].offsetHeight;
    var bodyHeight=document.getElementsByTagName('body')[0].offsetHeight;
    
    console.log(bodyHeight);
    window.onscroll = function() {
        var bodyTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        var _thisBottomScrollTop=bodyHeight - (bodyTop + _thisHeight);//当前容器底部距底部距离
        console.log(_thisBottomScrollTop);
        if (bodyTop > paneTwoTop) {
            
            if(_thisBottomScrollTop<-100){
        		paneTwo.style.position = "absolute";
            	paneTwo.style.top = "auto"
            	paneTwo.style.bottom = "50px"
        	}else{
        		paneTwo.style.position = "fixed";
            	paneTwo.style.top = "80px"
        	}
        } else {
        	
        		paneTwo.style.position = "";
            	paneTwo.style.top = "0"
            
        }
    };
    var signList = paneTwo.getElementsByTagName("li");
    var tabCon = document.getElementById("dllist").children;
    for (var i = 0; i < signList.length; i++) {
        signList[i].index = i;
        signList[i].onclick = function() {
            for (var i = 0; i < signList.length; i++) {
                signList[i].getElementsByTagName("a")[0].className = "";
                tabCon[i].classList.remove("active")
            }
            tabCon[this.index].classList.add("active");
            this.getElementsByTagName("a")[0].className = "selected";
            localStorage.setItem(storage, this.index)
        }
    }
}
function serviceTab() {
    var paneTwo = document.getElementById("pane2");
    var signList = paneTwo.getElementsByTagName("li");
    var tabCon = document.getElementById("dllist").children;
    for (var i = 0; i < signList.length; i++) {
        tabCon[i].classList.remove("active");
        signList[i].getElementsByTagName("a")[0].className = ""
    }
    var tabNum = localStorage.getItem("serviceIndex");
    tabCon[tabNum].classList.add("active");
    signList[tabNum].getElementsByTagName("a")[0].className = "selected"
}
function pageNav(id, blockBox) {
    var headNavBtn = document.getElementById(id);
    var headListNav = document.getElementsByClassName(blockBox)[0];
    var pageMask = document.getElementById("pageMask");
    headNavBtn.onclick = function() {
        this.classList.add("active");
        this.innerText = "关闭";
        headListNav.style.display = "block";
        pageMask.style.display = "block"
    };
    pageMask.onclick = function() {
        headNavBtn.classList.remove("active");
        headNavBtn.innerText = "导航";
        headListNav.style.display = "none";
        pageMask.style.display = "none"
    }
};