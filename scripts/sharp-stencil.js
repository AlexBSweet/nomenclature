
const ssTextSampleEdit = ()=>{

}


const ssBodySamples = ()=>{

}


const ssGlyphsSection = ()=>{

}


const setSharpStencil = ()=>{
  headerRight.style.display = 'block'
  pageTitle.innerHTML = "Sharp Stencil"
}




const sharpStencilFunctions = ()=>{
  if(document.querySelector('article').classList.contains('sharp-stencil-page')){
    headerScroll()
    textScrollEffect()
    cursorAnimationTwo()
    cursorAnimation()
    animateAlphabet()
    colorChanger()
    ssTextSampleEdit()
    ssBodySamples()
    ssGlyphsSection()
  }
}
sharpStencilFunctions()