

const headerScroll = ()=>{
  let pixels = window.pageYOffset

  if(pixels>200){
    headerWrapper.style.padding = '0px 40px'
    // headerWrapper.style.borderBottom = '1px solid'
  }else{
    // headerWrapper.style.borderBottom = '1px transparent'
  }

  document.addEventListener('scroll', ()=>{
    pixels = window.pageYOffset
    const pxDamp = pixels/10
    const pxDampTwo = pixels/20
    
    
    const title = document.querySelector('div.header-left p')
    let padding = 30 - pxDamp
    
    let fontSize = 32 - pxDampTwo

    if(fontSize<=26){fontSize=26}

    if(padding<=0){padding=0}
    // if(pixels>200){
    //   headerWrapper.style.borderBottom = '1px solid'
    // }else{
    //   headerWrapper.style.borderBottom = '1px transparent'
    // }

    headerWrapper.style.padding = `${padding} 40px`
    title.style.fontSize = fontSize + 'px'
    



  })

}








// LETTERSPACING SCROLL SECTION===================================================


const textScrollEffect = ()=>{
  document.addEventListener('scroll', ()=>{
    const largeText=document.querySelectorAll('div.large-text div span')
    const pxScrolled = window.pageYOffset
    const letterSpace = (pxScrolled/15000)

  
    largeText.forEach(text=>{
      text.style.letterSpacing = letterSpace + 'em'
      text.style.transition = 'letterSpacing ease'
    })
  
  })
}





// ALPHABET ANIMATION SECTION =========================================================

const animateAlphabet = ()=>{
  const alphabetContainer = document.querySelector('div.alphabet-animation')

  const alphabet = [
    'Aa',
    'Bb',
    'Cc',
    'Dd',
    'Ee',
    'Ff',
    'Gg',
    'Hh',
    'Ii',
    'Jj',
    'Kk',
    'Ll',
    'Mm',
    'Nn',
    "Oo",
    'Pp',
    'Qq',
    'Rr',
    'Ss',
    'Tt',
    'Uu',
    'Vv',
    'Ww',
    'Xx',
    'Yy',
    'Zz'
  ]
  let counter = -1
  setInterval(()=>{
      counter++
      if(counter>alphabet.length -1){
        counter=0
      }
      alphabetContainer.innerHTML = alphabet[counter]
  }, 1500)

}




// COLOR CHANGE SECTION =================================================================

// note that the ::after pseudo element can only be changed using css classes, so rather than cycling through colors like we do with the other elements we are cycling through a list of class names on click
const colorChanger = function(){
  const colorChangeIcon = document.querySelector('div.color-change')
  const blackWhiteIcon = document.querySelector('div.black-white')
  const typeFacePageContainer = document.querySelector('section.tf-content-container')
  const selects = document.querySelectorAll('select')
  const bodyDividers = document.querySelectorAll('div.body-divider')
  const ltLines = document.querySelectorAll('div.lt-line')
  const backgroundColors = [
    '#e6ffee',
    '#ff3333',
    '#FFDFB5',
    '#1F0605',
    '#669999',
    '#000'
  ]
  const foregroundColors = [
    '#ffbf00',
    '#fff',
    '#364C59',
    '#97FABC',
    '#ffffe6',
    '#364C59'
  ]
const blackWhiteFore = [
  '#fff',
  '#000'
]
const blackWhiteBack = [
  '#000',
  '#fff'
]
  let counter = -1
  colorChangeIcon.addEventListener('click', ()=>{
    
    counter++
  
    if(counter>= backgroundColors.length){
      counter = 0
    }
  
    let backgroundColor = backgroundColors[counter]
    let foregroundColor = foregroundColors[counter]
    
    bodyTag.style.backgroundColor = backgroundColor
    typeFacePageContainer.style.backgroundColor = backgroundColor
    headerWrapper.style.backgroundColor = backgroundColor

    // this sets the specific rules from the range-select stylesheet-rather than selecting the element through HTML it goes through CSS ** important to note that this only works as long as the range-select.css file is the first stylesheet being loaded on every page
    document.styleSheets[0].cssRules[3].style.background= foregroundColor
    document.styleSheets[0].cssRules[4].style.background= foregroundColor
    document.styleSheets[0].cssRules[5].style.background= foregroundColor
    document.styleSheets[0].cssRules[6].style.background= foregroundColor
    document.styleSheets[0].cssRules[7].style.background= foregroundColor
    document.styleSheets[0].cssRules[9].style.background= foregroundColor
    document.styleSheets[0].cssRules[11].style.background= foregroundColor
    document.styleSheets[0].cssRules[12].style.background= foregroundColor
    document.styleSheets[0].cssRules[13].style.background= foregroundColor
    document.styleSheets[0].cssRules[14].style.background= foregroundColor
    
    siteTitle.style.color = foregroundColor
    headerLine.style.backgroundColor = foregroundColor
    bodyTag.style.color = foregroundColor
    typeFacePageContainer.style.color = foregroundColor
    largeTextSpans.forEach(span=>{
      span.style.color = foregroundColor
    })
    headerLinks.forEach(link=>{
      link.style.color = foregroundColor
    })
    tfNavLinks.forEach(link=>{
      link.style.color = foregroundColor
    })
    selects.forEach(select=>{
      select.style.color = foregroundColor
      select.style.borderBottom = `1px solid ${foregroundColor}`
    })
    bodyDividers.forEach(divider=>{
      divider.style.backgroundColor = foregroundColor
    })
    ltLines.forEach(line=>{
      line.style.backgroundColor = foregroundColor
    })
    
  })



  blackWhiteIcon.addEventListener('click', ()=>{
    counter++
    if(counter>= blackWhiteFore.length){
      counter = 0
    }
    let background = blackWhiteBack[counter]
    let foreground = blackWhiteFore[counter]
    bodyTag.style.backgroundColor = background
    typeFacePageContainer.style.backgroundColor = background
    headerWrapper.style.backgroundColor = background
    
    document.styleSheets[0].cssRules[3].style.background= foreground
    document.styleSheets[0].cssRules[4].style.background= foreground
    document.styleSheets[0].cssRules[5].style.background= foreground
    document.styleSheets[0].cssRules[6].style.background= foreground
    document.styleSheets[0].cssRules[7].style.background= foreground
    document.styleSheets[0].cssRules[9].style.background= foreground
    document.styleSheets[0].cssRules[11].style.background= foreground
    document.styleSheets[0].cssRules[12].style.background= foreground
    document.styleSheets[0].cssRules[13].style.background= foreground
    document.styleSheets[0].cssRules[14].style.background= foreground

    siteTitle.style.color = foreground
    headerLine.style.backgroundColor = foreground
    blackWhiteIcon.style.backgroundColor = foreground
    bodyTag.style.color = foreground
    typeFacePageContainer.style.color = foreground
    largeTextSpans.forEach(span=>{
      span.style.color = foreground
    })
    headerLinks.forEach(link=>{
      link.style.color = foreground
    })
    tfNavLinks.forEach(link=>{
      link.style.color = foreground
    })
    selects.forEach(select=>{
      select.style.color = foreground
      select.style.borderBottom = `1px solid ${foreground}`
      select.classList.toggle('light')
    })
    bodyDividers.forEach(divider=>{
      divider.style.backgroundColor = foreground
    })
    ltLines.forEach(line=>{
      line.style.backgroundColor = foreground
    })
  })


}






const bodySampleOptions = ()=>{
  
  const bodyLeft = document.querySelectorAll('div.body-left')
  const bodyRight = document.querySelectorAll('div.body-right')

  bodyLeft.forEach(sample=>{
    const open = sample.querySelector('div.body-settings')
    const bodyOptions = sample.querySelector('div.body-options')
    const bodyCopy = sample.querySelector('div.body-copy')
    open.addEventListener('click', ()=>{
      bodyOptions.classList.toggle('open')
      bodyCopy.classList.toggle('open')
    })

  })

  bodyRight.forEach(sample=>{
    const open = sample.querySelector('div.body-settings')
    const bodyOptions = sample.querySelector('div.body-options')
    const bodyCopy = sample.querySelector('div.body-copy')
    open.addEventListener('click', ()=>{
      bodyOptions.classList.toggle('open')
      bodyCopy.classList.toggle('open')
    })
  })
}





    



























