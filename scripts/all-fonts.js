




const scrollTextEffect = ()=>{

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
      
      headerText.style.fontSize = fontSize - fontChange + 'px'


      // scroll point section
      const allFontsList = document.querySelector('section.all-fonts-list')
      const navLinks = document.querySelector('header div p')
      const navLine = document.querySelector('div.header-line')
      const bodyTag = document.querySelector('body')
      if(pixelsScrolled>710){
        bodyTag.style.backgroundColor = "#000"
        headerText.style.color = "#fff"
        navLinks.style.color = '#fff'
        navLine.style.backgroundColor = '#fff'
      } else{
        headerText.style.color = "#000"
        bodyTag.style.backgroundColor = '#fff'
        navLinks.style.color = '#000'
        navLine.style.backgroundColor = '#000'
      }
     
    })
  
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


const fontPageChangeColors = ()=>{
  
  const introLink = document.querySelector('a.intro-link')
  const fontsPageContainer = document.querySelector('section.tf-content-container')
  const introMonoLink = document.querySelector('a.intro-mono-link')
  const kedzieLink = document.querySelector('a.kedzie-link')
  const sharpStencilLink = document.querySelector('a.sharp-stencil-link')
  const qaLink = document.querySelector('a.queen-anne-link')
  const dimLink = document.querySelector('a.dim-link')


  

  introLink.addEventListener('click', ()=>{
    bodyTag.style.backgroundColor = '#669999'
    fontsPageContainer.style.backgroundColor = '#669999'
    headerLine.style.backgroundColor = '#ffffe6'
    bodyTag.style.color = '#ffffe6'
    fontsPageContainer.style.color = '#ffffe6'
    largeTextSpans.forEach(span=>{
      span.style.color = '#ffffe6'
    })
    headerLinks.forEach(link=>{
      link.style.color = '#ffffe6'
    })
    tfNavLinks.forEach(link=>{
      link.style.color = '#ffffe6'
    })
  })

}



// only run these functions if the body has the class of all-fonts
if(document.querySelector('article').classList.contains('all-fonts')){
    scrollWindow()
    // setColors()
    scrollTextEffect()
    observerAnimation()
    cursorAnimation()
    cursorAnimationTwo()
    characterGIF()
    headerScroll()
    // fontPageChangeColors()
}

