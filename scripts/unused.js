
// Typeface Navigation section ==========================================================
const tfNav = ()=>{

  // note that if both things being observed are in the viewport at the same time you're going to get intermittent behavior, this is the reason for placing the observed objects higher up in the sections

  const introStart = document.querySelector('.intro-start')
  const samplesStart = document.querySelectorAll('.samples-start')
  const tfNav = document.querySelector('div.tf-nav')
  const sectionLinks = tfNav.querySelectorAll('a')
  const sectionStart = document.querySelectorAll('.section-start')

  const firstLink = document.querySelector('a.first-link')
  const samplesLink = document.querySelector('a.samples-link')
  const introLink = document.querySelector('a.intro-link')
  const glyphsLink = document.querySelector('a.glyphs-link')

  const sectionObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.target.classList.contains('intro-start') && entry.intersectionRatio >= 1){
            firstLink.innerHTML = "Introduction"
        } else if(entry.target.classList.contains('samples-start') && entry.intersectionRatio>=0.7){
          firstLink.innerHTML = "Samples"
        } else if(entry.target.classList.contains('glyphs-start') && entry.intersectionRatio>=1){
         firstLink.innerHTML = "Glyphs"
        }
        })
      }, {
        threshold: [0, 0.1, 1]
      })

      sectionStart.forEach(start=>{
        sectionObserver.observe(start)
      })

}



const navScroll = ()=>{

  const tfNav = document.querySelector('div.tf-nav')
  const navLinks = tfNav.querySelectorAll('a')
  const firstLink = document.querySelector('a.first-link')
  const introLink = document.querySelector('a.intro-link')
  const samplesLink = document.querySelector('a.samples-link')
  const glyphsLink = document.querySelector('a.glyphs-link')
  const testerLink = document.querySelector('a.tester-link')
  const inUseLink = document.querySelector('a.in-use-link')
  const detailsLink = document.querySelector('a.details-link')

  

  document.addEventListener('scroll', ()=>{
        const pxScrolled = window.pageYOffset

        const samplesVal = -(pxScrolled /10)
        const glyphsVal = -(pxScrolled/7)
        const testerVal = -(pxScrolled/5)
        const inUseVal = -(pxScrolled/3.5)
        const detailsVal = -(pxScrolled/2.75)

        introLink.style.display = 'none'
        tfNav.style.backgroundColor = 'transparent'
        samplesLink.style.top = samplesVal
        glyphsLink.style.top = glyphsVal
        testerLink.style.top = testerVal
        inUseLink.style.top = inUseVal
        detailsLink.style.top = detailsVal
        
        if(samplesVal<=-40){
          samplesLink.style.top = -40
        }
        if(glyphsVal<=-77){
          glyphsLink.style.top = -77
        }
        if(testerVal<=-117){
          testerLink.style.top = -117
        }
        if(inUseVal<=-157){
          inUseLink.style.top = -157
        }
        if(detailsVal<=-195){
          detailsLink.style.top = -195
        }

        const opacity = 1 - (pxScrolled / 500)

        samplesLink.style.opacity = opacity
        glyphsLink.style.opacity = opacity
        testerLink.style.opacity = opacity
        inUseLink.style.opacity = opacity
        detailsLink.style.opacity = opacity
    })


    firstLink.addEventListener('click', ()=>{
      tfNav.style.backgroundColor = 'white'
      introLink.style.top = 0
      introLink.style.opacity = 1
      introLink.style.display = 'block'
      samplesLink.style.top = 0 
      samplesLink.style.opacity = 1
      glyphsLink.style.top = 0
      glyphsLink.style.opacity = 1
      testerLink.style.top = 0
      testerLink.style.opacity = 1
      inUseLink.style.top = 0
      inUseLink.style.opacity = 1
      detailsLink.style.top = 0
      detailsLink.style.opacity = 1

      console.log('he')

      if(samplesLink.style.top = 0){
        samplesLink.style.top = -40
      }
    })

}






const addPadding = ()=>{

  const contentContainer = document.querySelector('section.tf-content-container')
  if(contentContainer){
    bodyTag.style.padding = '0 0 100vh 0'
  }else{
    bodyTag.style.padding = '0'
  }

}

const footerOpacity = ()=>{
  
  const contentContainer = document.querySelector('section.tf-content-container')
  let pixels = window.pageYOffset
  const footer = document.querySelector('footer')
  if(contentContainer && pixels<300){
    footer.style.display = 'none'
  }else if(contentContainer===null){
    footer.style.display = 'none'
  }else if(contentContainer && pixels>300){
    footer.style.display = 'block'
  }

  document.addEventListener('scroll', ()=>{
    pixels = window.pageYOffset
    
    if(contentContainer && pixels<300){
      footer.style.display = 'none'
    }else if(contentContainer===null){
      footer.style.display = 'none'
    }else if(contentContainer && pixels>300){
      footer.style.display = 'block'
    }
  })

}







const downloadSection = ()=>{
  const downloadSection = document.querySelector('section.download')
const downloadCircleMain = downloadSection.querySelector('div.download-circle-main')
const hoverCirclesDown = document.querySelectorAll('div.hover-circle-down')
const hoverCirclesUp = document.querySelectorAll('div.hover-circle-up')

downloadCircleMain.addEventListener('mouseover', ()=>{

    hoverCirclesDown.forEach(circle=>{
      const x = (Math.random() *80)
      const y = (Math.random() *80)

      circle.style.transform = `translate(${x}px, ${y}px)`
      circle.style.opacity = 1
    })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
    hoverCirclesDown.forEach(circle=>{
      circle.style.transform = 'translate(0, 0)'
      circle.style.opacity = 0
    })
})

downloadCircleMain.addEventListener('mouseover', ()=>{

  hoverCirclesUp.forEach(circle=>{
    const x = -(Math.random() *80)
    const y = -(Math.random() *80)

    circle.style.transform = `translate(${x}px, ${y}px)`
    circle.style.opacity = 1
  })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
  hoverCirclesUp.forEach(circle=>{
    circle.style.transform = 'translate(0, 0)'
    circle.style.opacity = 0
  })
})
}