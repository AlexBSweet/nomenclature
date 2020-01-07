
const qaTextSampleEdit = ()=>{

  const samples = document.querySelectorAll('div.sample')

  samples.forEach(sample=>{
    const sampleSelect = sample.querySelector('select')
    const weightTag = sample.querySelector('input[name="weight"]')
    const weightOutput = sample.querySelector('span.weight-output')
    const opszTag = sample.querySelector('input[name="optical-size"]')
    const opszOutput = sample.querySelector('span.optical-size-output')
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
if(opszTag){
  opszTag.addEventListener('input', ()=>{
    let weight = weightTag.value
    let opsz = opszTag.value
    text.style['font-variation-settings'] = `"wght" ${weight}, "opsz" ${opsz}`
    opszOutput.innerHTML = opsz
  })
}
if(weightTag){
  weightTag.addEventListener('input', function(){
    let weight = weightTag.value
    let opsz = opszTag.value
    text.style['font-variation-settings'] = `"wght" ${weight}, "opsz" ${opsz}`
    weightOutput.innerHTML = weight
  })
 
}

sampleSelect.addEventListener('change', ()=>{
  const typeValue = sampleSelect.value
  if(typeValue=="Text Light"){
    text.style['font-variation-settings'] = `"wght" 200, "opsz" 12`
    weightTag.value = 200
    weightOutput.innerHTML = '200'
    opszTag.value = 12
    opszOutput.innerHTML = "12"
  }else if(typeValue=="Text Regular"){
    text.style['font-variation-settings'] = `"wght" 400, "opsz" 12`
    weightTag.value = 400
    weightOutput.innerHTML = '400'
    opszTag.value = 12
    opszOutput.innerHTML = "12"
  }else if(typeValue=="Text Medium"){
    text.style['font-variation-settings'] = `"wght" 600, "opsz" 12`
    weightTag.value = 600
    weightOutput.innerHTML = '600'
    opszTag.value = 12
    opszOutput.innerHTML = "12"
  }else if(typeValue=="Text Bold"){
    text.style['font-variation-settings'] = `"wght" 800, "opsz" 12`
    weightTag.value = 800
    weightOutput.innerHTML = '800'
    opszTag.value = 12
    opszOutput.innerHTML = "12"
  }else if(typeValue=="Display Light"){
    text.style['font-variation-settings'] = `"wght" 200, "opsz" 72`
    weightTag.value = 200
    weightOutput.innerHTML = '200'
    opszTag.value = 72
    opszOutput.innerHTML = "72"
  }else if(typeValue=="Display Regular"){
    text.style['font-variation-settings'] = `"wght" 400, "opsz" 72`
    weightTag.value = 400
    weightOutput.innerHTML = '400'
    opszTag.value = 72
    opszOutput.innerHTML = "72"
  }else if(typeValue=="Display Medium"){
    text.style['font-variation-settings'] = `"wght" 600, "opsz" 72`
    weightTag.value = 600
    weightOutput.innerHTML = '600'
    opszTag.value = 72
    opszOutput.innerHTML = "72"
  }else if(typeValue=="Display Bold"){
    text.style['font-variation-settings'] = `"wght" 800, "opsz" 72`
    weightTag.value = 800
    weightOutput.innerHTML = '800'
    opszTag.value = 72
    opszOutput.innerHTML = "72"
  }

})
  })
}










const qaGlyphsSection = () =>{

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
  
        if(typeValue=="Text Light"){
          container.style['font-variation-settings'] = `"wght" 200, "opsz" 12`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "opsz" 12`
        }else if(typeValue=="Text Regular"){
          container.style['font-variation-settings'] = `"wght" 400, "opsz" 12`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "opsz" 12`
        }else if(typeValue=="Text Medium"){
          container.style['font-variation-settings'] = `"wght" 600, "opsz" 12`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "opsz" 12`
        }else if(typeValue=="Text Bold"){
          container.style['font-variation-settings'] = `"wght" 800, "opsz" 12`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "opsz" 12`
        }else if(typeValue=="Display Light"){
          container.style['font-variation-settings'] = `"wght" 200, "opsz" 72`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 200, "opsz" 72`
        }else if(typeValue=="Display Regular"){
          container.style['font-variation-settings'] = `"wght" 400, "opsz" 72`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 400, "opsz" 72`
        }else if(typeValue=="Display Medium"){
          container.style['font-variation-settings'] = `"wght" 600, "opsz" 72`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 600, "opsz" 72`
        }else if(typeValue=="Display Bold"){
          container.style['font-variation-settings'] = `"wght" 800, "opsz" 72`
          activeGlyphContainer.style['font-variation-settings'] = `"wght" 800, "opsz" 72`
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




const qaBodySamples = ()=>{
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
      const opszTag = sample.querySelector('input[name="optical-size"]')
      const opszOutput = sample.querySelector('span.optical-size-output')
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
      if(opszTag){
        opszTag.addEventListener('input', ()=>{
          let weight = weightTag.value
          let opsz = opszTag.value
          text.style['font-variation-settings'] = `"wght" ${weight}, "opsz" ${opsz}`
          opszOutput.innerHTML = opsz
        })
      }
      if(weightTag){
        weightTag.addEventListener('input', function(){
          let weight = weightTag.value
          let opsz = opszTag.value
          text.style['font-variation-settings'] = `"wght" ${weight}, "opsz" ${opsz}`
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
        
        if(typeValue=="Text Light"){
          text.style['font-variation-settings'] = `"wght" 200, "opsz" 12`
          weightTag.value = 200
          weightOutput.innerHTML = '200'
          opszTag.value = 12
          opszOutput.innerHTML = "12"
        }else if(typeValue=="Text Regular"){
          text.style['font-variation-settings'] = `"wght" 400, "opsz" 12`
          weightTag.value = 400
          weightOutput.innerHTML = '400'
          opszTag.value = 12
          opszOutput.innerHTML = "12"
        }else if(typeValue=="Text Medium"){
          text.style['font-variation-settings'] = `"wght" 600, "opsz" 12`
          weightTag.value = 600
          weightOutput.innerHTML = '600'
          opszTag.value = 12
          opszOutput.innerHTML = "12"
        }else if(typeValue=="Text Bold"){
          text.style['font-variation-settings'] = `"wght" 800, "opsz" 12`
          weightTag.value = 800
          weightOutput.innerHTML = '800'
          opszTag.value = 12
          opszOutput.innerHTML = "12"
        }else if(typeValue=="Display Light"){
          text.style['font-variation-settings'] = `"wght" 200, "opsz" 72`
          weightTag.value = 200
          weightOutput.innerHTML = '200'
          opszTag.value = 72
          opszOutput.innerHTML = "72"
        }else if(typeValue=="Display Regular"){
          text.style['font-variation-settings'] = `"wght" 400, "opsz" 72`
          weightTag.value = 400
          weightOutput.innerHTML = '400'
          opszTag.value = 72
          opszOutput.innerHTML = "72"
        }else if(typeValue=="Display Medium"){
          text.style['font-variation-settings'] = `"wght" 600, "opsz" 72`
          weightTag.value = 600
          weightOutput.innerHTML = '600'
          opszTag.value = 72
          opszOutput.innerHTML = "72"
        }else if(typeValue=="Display Bold"){
          text.style['font-variation-settings'] = `"wght" 800, "opsz" 72`
          weightTag.value = 800
          weightOutput.innerHTML = '800'
          opszTag.value = 72
          opszOutput.innerHTML = "72"
        }
        
      })
    })
  }
}









const queenAnneFunctions = ()=>{
  if(document.querySelector('article').classList.contains('queen-anne-page')){
    headerScroll()
    textScrollEffect()
    cursorAnimationTwo()
    cursorAnimation()
    animateAlphabet()
    colorChanger()
    qaTextSampleEdit()
    qaBodySamples()
    qaGlyphsSection()
    bodySampleOptions()
  }
}
queenAnneFunctions()