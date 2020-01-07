const introMonoTextSampleEdit = ()=>{

  const samples = document.querySelectorAll('div.sample')

  samples.forEach(sample=>{
    const sampleSelect = sample.querySelector('select')
    const weightTag = sample.querySelector('input[name="weight"]')
    const weightOutput = sample.querySelector('span.weight-output')
    // const slantTag = sample.querySelector('input[name="slant"]')
    // const slantOutput = sample.querySelector('span.slant-output')
    const sizeTag = sample.querySelector('input[name="typesize"]')
    const sizeOutput = sample.querySelector('span.size-output')
    const text = sample.querySelector('p')


    const loadedSize = Math.floor(parseFloat(window.getComputedStyle(text).getPropertyValue('font-size')))
    


    sizeOutput.innerHTML = loadedSize + 'px'
    sizeTag.value = loadedSize

    

if(sizeTag){
  sizeTag.addEventListener('input', function(){
    text.style.fontSize = this.value + 'px'
    sizeOutput.innerHTML = this.value + 'px'
  })
}
  


if(weightTag){
  weightTag.addEventListener('input', function(){
    let weight = weightTag.value
    text.style['font-variation-settings'] = `"wght" ${weight}`
    weightOutput.innerHTML = weight
  })
 
}

sampleSelect.addEventListener('change', ()=>{
  const typeValue = sampleSelect.value
  if(typeValue=="Extra-Light"){
    text.style['font-variation-settings'] = `"wght" 100`
    weightTag.value = 100
    weightOutput.innerHTML = '100'
  }else if(typeValue=="Light"){
    text.style['font-variation-settings'] = `"wght" 200`
    weightTag.value = 200
    weightOutput.innerHTML = '200'
  }else if(typeValue=="Regular"){
    text.style['font-variation-settings'] = `"wght" 400`
    weightTag.value = 400
    weightOutput.innerHTML = '400'
  }else if(typeValue=="Medium"){
    text.style['font-variation-settings'] = `"wght" 500`
    weightTag.value = 500
    weightOutput.innerHTML = '500'
  }else if(typeValue=="Semi-Bold"){
    text.style['font-variation-settings'] = `"wght" 600`
    weightTag.value = 600
    weightOutput.innerHTML = '600'
  }else if(typeValue=="Bold"){
    text.style['font-variation-settings'] = `"wght" 700`
    weightTag.value = 700
    weightOutput.innerHTML = '700'
  }else if(typeValue=="Black"){
    text.style['font-variation-settings'] = `"wght" 800`
    weightTag.value = 800
    weightOutput.innerHTML = '800'
  }

})
  })
}








const introMonoBodySamples = ()=>{
  const bodySection = document.querySelector('section.body-copy')
  const bodySamples = bodySection.querySelectorAll('div.body-sample')
  

  if(bodySamples){
    bodySamples.forEach(sample=>{

      const text = sample.querySelector('p')
      const bodySelect = sample.querySelector('select')
      const sizeTag = sample.querySelector('input[name="typesize"]')
      const sizeOutput = sample.querySelector('span.size-output')
      const weightTag = sample.querySelector('input[name="weight"]')
      const weightOutput = sample.querySelector('span.weight-output')
      const lineHeightTag = sample.querySelector('input[name="line-height"]')
      const lineHeightOuput = sample.querySelector('span.line-height-output')
      const letterSpacingTag = sample.querySelector('input[name="letter-spacing"]')
      const letterSpacingOutput = sample.querySelector('span.letter-spacing-output')
      const oneColumn = sample.querySelector('img.one-column')
      const twoColumn = sample.querySelector('img.two-column')
  
   
  
      if(sizeTag){
        sizeTag.addEventListener('input', function(){
          text.style.fontSize = this.value + 'px'
          sizeOutput.innerHTML = this.value + 'px'
  
        })
      }
      if(lineHeightTag){
        lineHeightTag.addEventListener('input', ()=>{
          text.style.lineHeight = lineHeightTag.value
          lineHeightOuput.innerHTML = lineHeightTag.value
        })
      }
      if(letterSpacingTag){
        letterSpacingTag.addEventListener('input', ()=>{
          text.style.letterSpacing = letterSpacingTag.value
          letterSpacingOutput.innerHTML = letterSpacingTag.value
        })
      }
      if(weightTag){
        weightTag.addEventListener('input', function(){
          let weight = weightTag.value
          text.style['font-variation-settings'] = `"wght" ${weight}`
          weightOutput.innerHTML = weight
        })
       
      }
  
      oneColumn.addEventListener('click', ()=>{
        text.style.columnCount = 1
      })
      twoColumn.addEventListener('click', ()=>{
        text.style.columnCount = 2
      })
  
      bodySelect.addEventListener('change', ()=>{
        const typeValue = bodySelect.value
        if(typeValue=="Extra-Light"){
          text.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
        }else if(typeValue=="Light"){
          text.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
        }else if(typeValue=="Regular"){
          text.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
        }else if(typeValue=="Medium"){
          text.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
        }else if(typeValue=="Semi-Bold"){
          text.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
        }else if(typeValue=="Bold"){
          text.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
        }else if(typeValue=="Black"){
          text.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
        }
        
      })
    })
  }


}




const introMonoGlyphsSection = () =>{

  const glyphsSection = document.querySelector('section.glyphs')
  const glyphsContainerTop = document.querySelector('div.glyphs-container')
  const glyphsContainer = document.querySelectorAll('section.glyphs-category')
  const glyphs = glyphsContainerTop.querySelectorAll('div')
  const activeGlyphContainer = document.querySelector('div.active-glyph-container')
  const detailsOne = document.querySelector('div.glyph-details-one')
  const detailsTwo = document.querySelector('div.glyph-details-two')
  const glyphsSelect = document.querySelector('select.glyphs-select')


  glyphsSelect.addEventListener('change', ()=>{
      const typeValue = glyphsSelect.value

      glyphsContainer.forEach(container=>{
  
        if(typeValue=="Extra-Light"){
          container.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 0`
        }else if(typeValue=="Extra-Light Italic"){
          container.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 100, "slnt" 1`
        }else if(typeValue=="Light"){
          container.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 0`
        }else if(typeValue=="Light Italic"){
          container.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "slnt" 1`
        }else if(typeValue=="Regular"){
          container.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 0`
        }else if(typeValue=="Regular Italic"){
          container.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "slnt" 1`
        }else if(typeValue=="Medium"){
          container.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 0`
        }else if(typeValue=="Medium Italic"){
          container.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 500, "slnt" 1`
        }else if(typeValue=="Semi-Bold"){
          container.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 0`
        }else if(typeValue=="Semi-Bold Italic"){
          container.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "slnt" 1`
        }else if(typeValue=="Bold"){
          container.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 0`
        }else if(typeValue=="Bold Italic"){
          container.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 700, "slnt" 1`
        }else if(typeValue=="Black"){
          container.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 0`
        }else if(typeValue=="Black Italic"){
          container.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "slnt" 1`
        }
      })
  })
   
    glyphs.forEach(glyph=>{

      glyph.addEventListener('mouseenter', ()=>{
        const hoveredGlyph = glyph.innerHTML
        activeGlyphContainer.innerHTML = hoveredGlyph


        const glyphName = glyph.getAttribute('data-name')
        detailsOne.innerHTML = glyphName
        

        var hex = hoveredGlyph.codePointAt(0).toString(16);
        var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        var unicode = result.substr(1);
        var formattedUnicode = 'U+' + unicode.slice(1, 5)

        detailsTwo.innerHTML = formattedUnicode
     
      })
    })
}



const setIntroMono = ()=>{
  headerRight.style.display = 'block'
  pageTitle.innerHTML = "Intro Mono"
  const typeFacePageContainer = document.querySelector('section.tf-content-container')
  const selects = document.querySelectorAll('select')
  const bodyDividers = document.querySelectorAll('div.body-divider')
  const ltLines = document.querySelectorAll('div.lt-line')

  bodyTag.style.backgroundColor = '#74968a'
  typeFacePageContainer.style.backgroundColor='#74968a'
  // headerTag.style.backgroundColor = '#f2f2f2'
  headerWrapper.style.backgroundColor = '#74968a'
  siteTitle.style.color = "#000"
  typeFacePageContainer.style.color = '#f5f6ef'
}





// this ensures that these functions only run if the page is intro, this way we don't get errors on the other pages that also contain this script file
const introMonoFunctions = ()=>{
  if(document.querySelector('article').classList.contains('intro-mono-page')){
    headerScroll()
    textScrollEffect()
    cursorAnimationTwo()
    cursorAnimation()
    animateAlphabet()
    bodySampleOptions()
    colorChanger()
    introMonoTextSampleEdit()
    introMonoGlyphsSection()
    introMonoBodySamples()
  }
}
introMonoFunctions()