




const scrollTextEffect = ()=>{

  if(document.querySelector('article').classList.contains('all-fonts')){
    document.addEventListener('scroll', ()=>{

      // letterspacing section
      const headerText = document.querySelector('div.header h1')
      const pixelsScrolled = window.pageYOffset
      const letterSpacing = pixelsScrolled / 10000
      // headerText.style.letterSpacing = letterSpacing + 'em'

     
      // font size change section
      const fontSize = 208
      const fontChange =  pixelsScrolled / 10
      const newFontSize = fontSize - fontChange
      if(headerText){
        headerText.style.fontSize = fontSize - fontChange + 'px'
      }
      


      // scroll point section
      const allFontsList = document.querySelector('section.all-fonts-list')
      const navLinks = document.querySelector('header div p')
      const navLine = document.querySelector('div.header-line')
      const bodyTag = document.querySelector('body')
      if(pixelsScrolled>710){
        bodyTag.style.backgroundColor = "#000"
        if(headerText){
          headerText.style.color = "#fff"
        }
        if(document.querySelector('article').classList.contains('all-fonts')){
          navLinks.style.color = '#fff'
          navLine.style.backgroundColor = '#fff'
        }
      }else{
        if(headerText){
          headerText.style.color = "#000"
        }
        bodyTag.style.backgroundColor = '#fff'
        navLinks.style.color = '#000'
        navLine.style.backgroundColor = '#000'
      }
     
    })
  }
  
  
}

const scrollWindow = ()=>{
  setTimeout(function(){ 
    
    window.scroll(0, 710)
  
  }, 3000);

}





const observerAnimation = ()=>{

    const afListAnchor = document.querySelectorAll('div.af-list-item a')
    const afListText = document.querySelectorAll('p.af-list-title')
 
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.intersectionRatio>0.1){
          afListText.forEach(text=>{
            text.classList.add('af-list-animate')
          })
        } else{
          afListText.forEach(text=>{
            text.classList.remove('af-list-animate')
          })
        }
      })
    }, {
      threshold: [0, 0.1, 1]
    })

    afListAnchor.forEach(anchor=>{
      observer.observe(anchor)
    })

}






const characterGIF = ()=>{
  const char = document.querySelector('span.af-variable')
  let counter = -1
  let characters = [
    '&#169;',
    '&#182;',
    '&#163;',
    '&#42;',
    '&#64;',
    '&#38;',
    '&#164;',
    '&#8225;',
    '&#8240;',
    '&#8721;',
    '&#8734;',
    '&#8747;',
    '&#8595;'
  ]

  setInterval(()=>{
      counter++
      if(counter>characters.length-1){
        counter=0
      }
      char.innerHTML = characters[counter]
  }, 1300)
}



const afSet = ()=>{
  pageTitle.innerHTML = "All Fonts"
  headerRight.style.display = "none"
  headerWrapper.style.backgroundColor = 'transparent'
  headerTag.style.backgroundColor = 'transparent'
  const navLinks = document.querySelector('header div p')
  navLinks.style.color = '#fff'
}





const allFontsFunctions = ()=>{
  // only run these functions if the body has the class of all-fonts
if(document.querySelector('article').classList.contains('all-fonts')){
  scrollWindow()
  scrollTextEffect()
  observerAnimation()
  cursorAnimation()
  cursorAnimationTwo()
  characterGIF()
  headerScroll()
  afSet()
}
}
allFontsFunctions()

