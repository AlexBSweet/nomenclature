const kedzieGlyphsSection = () =>{

  const glyphsSection = document.querySelector('section.glyphs')
  const glyphsContainerTop = document.querySelector('div.glyphs-container')
  const glyphsContainer = document.querySelectorAll('section.glyphs-category')
  const glyphs = glyphsContainerTop.querySelectorAll('div')
  const activeGlyphContainer = document.querySelector('div.active-glyph-container')
  const detailsOne = document.querySelector('div.glyph-details-one')
  const detailsTwo = document.querySelector('div.glyph-details-two')
  const glyphsSelect = document.querySelector('select.glyphs-select')


   
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

    glyphsSelect.addEventListener('change', ()=>{
      const value = glyphsSelect.value
      glyphsContainer.forEach(container=>{
        if(value=='Regular'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Regular'
          container.style.fontFamily = "Kedzie Regular"
        }else if(value=='Italic'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Italic'
          container.style.fontFamily = "Kedzie Italic"
        }else if(value=='Medium'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Medium'
          container.style.fontFamily = "Kedzie Medium"
        }else if(value=='Medium Italic'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Medium Italic'
          container.style.fontFamily = "Kedzie Medium Italic"
        }else if(value=='Bold'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Bold'
          container.style.fontFamily = "Kedzie Bold"
        }else if(value=='Bold Italic'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Bold Italic'
          container.style.fontFamily = "Kedzie Bold Italic"
        }else if(value=='Heavy'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Heavy'
          container.style.fontFamily = "Kedzie Heavy"
        }else if(value=='Heavy Italic'){
          activeGlyphContainer.style.fontFamily = 'Kedzie Heavy Italic'
          container.style.fontFamily = "Kedzie Heavy Italic"
        }
      })
      
    })
}








const kedzieTextSampleEdit = ()=>{

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
  if(typeValue=="Regular"){
    text.style.fontFamily = 'Kedzie Regular'
  }else if(typeValue=="Italic"){
    text.style.fontFamily = 'Kedzie Italic'
  }else if(typeValue=="Medium"){
    text.style.fontFamily = 'Kedzie Medium'
  }else if(typeValue=="Medium Italic"){
    text.style.fontFamily = 'Kedzie Medium Italic'
  }else if(typeValue=="Bold"){
    text.style.fontFamily = 'Kedzie Bold'
  }else if(typeValue=="Bold Italic"){
    text.style.fontFamily = 'Kedzie Bold Italic'
  }else if(typeValue=="Heavy"){
    text.style.fontFamily = 'Kedzie Heavy'
  }else if(typeValue=="Heavy Italic"){
    text.style.fontFamily = 'Kedzie Heavy Italic'
  }

})
  })
}










const kedzieBodySamples = ()=>{
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
  
        if(typeValue=="Regular"){
          text.style.fontFamily = 'Kedzie Regular'
        }else if(typeValue=="Italic"){
          text.style.fontFamily = 'Kedzie Italic'
        }else if(typeValue=="Medium"){
          text.style.fontFamily = 'Kedzie Medium'
        }else if(typeValue=="Medium Italic"){
          text.style.fontFamily = 'Kedzie Medium Italic'
        }else if(typeValue=="Bold"){
          text.style.fontFamily = 'Kedzie Bold'
        }else if(typeValue=="Bold Italic"){
          text.style.fontFamily = 'Kedzie Bold Italic'
        }else if(typeValue=="Heavy"){
          text.style.fontFamily = 'Kedzie Heavy'
        }else if(typeValue=="Heavy Italic"){
          text.style.fontFamily = 'Kedzie Heavy Italic'
        }
        
      })
    })
  }


}


const setKedzie = ()=>{
  headerRight.style.display = 'block'
  pageTitle.innerHTML = "Kedzie"
}




const kedzieFunctions = ()=>{
  if(document.querySelector('article').classList.contains('dim-page')){
    headerScroll()
    textScrollEffect()
    cursorAnimationTwo()
    cursorAnimation()
    animateAlphabet()
    colorChanger()
    kedzieTextSampleEdit()
    kedzieGlyphsSection()
    kedzieBodySamples()
    bodySampleOptions()
  }
}
kedzieFunctions()