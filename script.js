// import {DrawSVGPlugin} from 'DrawSVGPlugin'

function drawSVGPathOG() {
    $('#og').css('opacity', 1)
    var $svg = $('#og').drawsvg({
        duration: 600
    });

    $svg.drawsvg('animate');
}

function drawSVGPathAbout() {
    $('#about').css('display', 'block')
    $('#about').css('opacity', 1)
    var $svg = $('#about').drawsvg({
        duration: 600
    });

    $svg.drawsvg('animate');
}

function drawSVGPathOG2() {
    $('#og').css('display', 'block')
    $('#og').css('opacity', 1)
    var $svg = $('#og').drawsvg({
        duration: 600
    });

    $svg.drawsvg('animate');
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
    const d = new Date()
    if(d.getDay() == 0 || d.getDay() == 6) document.querySelector("#weekend span").innerHTML = 'Yes'
    else document.querySelector("#weekend span").innerHTML = 'No'

    window.addEventListener('load', ()=>{
        let animation = gsap.timeline({delay: .6});

        document.querySelector('.logo').style.display = 'flex'
        let b = baffle(document.querySelectorAll('.loading-section h1 span'), {
            characters: '▓░█ >▓░█/ ░█▒▒< ▓>▓ ░/▓▓▓ █<▓> ░░█ ▓▒▒█ <>██',
            speed: 80
        })
        b.start()
        window.setTimeout(()=>{
            b.reveal(1000)
        }, 6000)

        window.setTimeout(()=>{
            window.scrollTo(0, 0);
        }, 2000)

        animation
        .fromTo(".logo h1", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})
        .fromTo(".loading-section h1", {x:'-150%'}, {x:'0%', duration: 1, ease:"back.out(1.5)"}, "-=1")
        .fromTo(".loading-section h1 span", {opacity: 0, display: 'none'}, {opacity: 1, display: 'inline'}, "+=1")
        .fromTo(".logo h3", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})
        .call(drawSVGPathOG,null,"-=4")
        // .fromTo("#C-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"})
        // .call(drawSVGPath, ['O'])
        // .fromTo("#O-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.5")
        // .call(drawSVGPath, ['M'])
        // .fromTo("#M-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['M'])
        // .fromTo("#M-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['U'])
        // .fromTo("#U-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['N'])
        // .fromTo("#N-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['I'])
        // .fromTo("#I-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['T'])
        // .fromTo("#T-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['Y'])
        // .fromTo("#Y-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['C'])
        // .fromTo("#C-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['O'])
        // .fromTo("#O-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.4")
        // .call(drawSVGPath, ['L'])
        // .fromTo("#L-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['L'])
        // .fromTo("#L-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['A'])
        // .fromTo("#A-path-1", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['A'])
        // .fromTo("#A-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .call(drawSVGPath, ['B'])
        // .fromTo("#B-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        .fromTo(".logo", {paddingTop: '30vh'}, {paddingTop: '5vh', duration: 1, ease:"back.out(1.5)"}, "+=3.5")
        .fromTo("footer", {opacity: 0}, {opacity: 1, duration: 0.5, ease: "back.out(1.5)"})
        .fromTo(".preloader-cover", {opacity: 1}, {opacity: 0, duration: 1, ease:"power4.out"}, "-=1.2")
        .fromTo(".background", {scale: 4}, {scale: 1.2, duration: 1, ease: "back.out(1.5)"}, "-=1.5")

        .fromTo(".list-1", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=1")
        .fromTo(CSSRulePlugin.getRule(".list-1:before"), {cssRule: {width: '0%'}}, {cssRule: {width: '130%', duration: 1, ease:"back.out(1.5)"}})
        // .fromTo(".list-1", {opacity: '100%'}, {opacity: '90%', duration: 0.5, ease:"back.out(1.5)"}, "-=0.5")
        .fromTo(".list-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})

        .fromTo(".list-data", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})
        .fromTo(".list-data-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".music-list", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".button", {y: '120%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".list-data-3", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")

        document.addEventListener('mousemove', parallax)

        function parallax(e) {
            const elem = document.querySelector('.background')
            // console.log(elem)
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.1}px, ${50 - (_mouseY - _h) * 0.1}px`;
            // console.log(`translate(${_depth1})`);
            elem.style.transform = `translate(${_depth1}) scale(1.2)`;
        }

    })

document.querySelector('nav').addEventListener('click', ()=>{
    window.scrollTo(0, 0);
    console.log(document.querySelector('nav h1').innerText)
    if(document.querySelector('nav h1').innerHTML == 'About' || document.querySelector('nav h1').innerHTML == 'ABOUT') {
        let b = baffle('nav h1', {
            characters: '▓░█ >▓░█/ ░█▒▒< ▓>▓ ░/▓▓▓ █<▓> ░░█ ▓▒▒█ <>██',
            speed: 80
        })
        b.start()
        b.reveal(1000)
            window.setTimeout(()=>{
                document.querySelector('nav h1').innerText = 'BACK'
                let c = baffle('nav h1', {
                    characters: '▓░█ >▓░█/ ░█▒▒< ▓>▓ ░/▓▓▓ █<▓> ░░█ ▓▒▒█ <>██',
                    speed: 80
                }).start()
                c.reveal(1000)
        }, 1000)

        let about_animation = gsap.timeline({delay: .6})

        about_animation
        .fromTo("#og", {display: 'block', opacity: 1}, {display: 'none', opacity: 0, duration: 0.5, ease:"power1.out"})
        .call(drawSVGPathAbout)
        // .fromTo("#about, #A-about-path-1, #A-about-path-2, #B-about-path, #O-about-path, #U-about-path, #T-about-path", {display:'none', opacity: 0}, {display: 'block', opacity: 1})
        // .fromTo("#A-about-path-2", {display: 'none', drawSVG: 0}, {display:'block', drawSVG: "100%", duration: 0.2, ease:"power1.out"})
        // .fromTo("#A-about-path-1", {display: 'none', drawSVG: 0}, {display:'block', drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#B-about-path", {display:'none', drawSVG: 0}, {display:'block',drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .fromTo("#O-about-path", {display:'none', drawSVG: 0}, {display:'block',drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#U-about-path", {display:'none', drawSVG: 0}, {display:'block',drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#T-about-path", {display:'none', drawSVG: 0}, {display:'block',drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")

        .fromTo(".list-1", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1")
            .fromTo(".list-2", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1")

            .fromTo(".list-data", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1.8")
            .fromTo(".list-data-2", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1.6")
            .fromTo(".music-list", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1.6")
            .fromTo(".button", {y: '0%'}, {y: '120%', duration: 1, ease:"back.out(1.5)"}, "-=1.6")
            .fromTo(".list-data-3", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1.6")
            .set(".list-1, .list-data, .list-data-2, .list-2, .music-list, .button, .list-data-3", {display: 'none'})
            
        .set(".list-about-1, .list-about-data-1, .list-about-2, .list-about-data-2", {display: 'flex'})
        .fromTo(".list-about-1", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})
        .fromTo(".list-about-data-1", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.5")
        .fromTo(".list-about-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".list-about-data-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.5")

    }
    else {
        let b = baffle('nav h1', {
            characters: '▓░█ >▓░█/ ░█▒▒< ▓>▓ ░/▓▓▓ █<▓> ░░█ ▓▒▒█ <>██',
            speed: 80
        })
        b.start()
        b.reveal(1000)
            window.setTimeout(()=>{
                document.querySelector('nav h1').innerText = 'ABOUT'
                let c = baffle('nav h1', {
                    characters: '▓░█ >▓░█/ ░█▒▒< ▓>▓ ░/▓▓▓ █<▓> ░░█ ▓▒▒█ <>██',
                    speed: 80
                }).start()
                c.reveal(1000)
        }, 1000)

        let about_animation = gsap.timeline({delay: .6})

        about_animation
        .fromTo("#about", {display: 'block', opacity: 1}, {display: 'none', opacity: 0, duration: 0.5, ease:"power1.out"})
        // .set("#og", {display: 'block'})
        .fromTo(".list-about-1", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=0.5")
        .fromTo(".list-about-data-1", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=1")
        .fromTo(".list-about-2", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".list-about-data-2", {y: '0%'}, {y: '100%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .set(".list-about-1, .list-about-data-1, .list-about-2, .list-about-data-2", {display: 'none'})
        .set(".list-1, .list-2, .list-data, .list-data-2, .music-list, .button, .list-data-3", {display: 'flex'})
        .call(drawSVGPathOG2,null,"-=1")
        // .fromTo("#C-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"})
        // .fromTo("#O-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.5")
        // .fromTo("#M-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .fromTo("#M-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .fromTo("#U-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .fromTo("#N-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .fromTo("#I-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#T-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#Y-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .fromTo("#C-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")
        // .fromTo("#O-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.4")
        // .fromTo("#L-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .fromTo("#L-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.3, ease:"power1.out"}, "-=0.1")
        // .fromTo("#A-path-1", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#A-path-2", {drawSVG: 0}, {drawSVG: "100%", duration: 0.2, ease:"power1.out"}, "-=0.1")
        // .fromTo("#B-path", {drawSVG: 0}, {drawSVG: "100%", duration: 0.5, ease:"power1.out"}, "-=0.1")

        .fromTo(".list-1", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "+=1")
        .fromTo(CSSRulePlugin.getRule(".list-1:before"), {cssRule: {width: '0%'}}, {cssRule: {width: '130%', duration: 1, ease:"back.out(1.5)"}})
        // .fromTo(".list-1", {opacity: '100%'}, {opacity: '90%', duration: 0.5, ease:"back.out(1.5)"}, "-=0.5")
        .fromTo(".list-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})

        .fromTo(".list-data", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"})
        .fromTo(".list-data-2", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".music-list", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".button", {y: '120%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
        .fromTo(".list-data-3", {y: '100%'}, {y: '0%', duration: 1, ease:"back.out(1.5)"}, "-=0.8")
    }


})