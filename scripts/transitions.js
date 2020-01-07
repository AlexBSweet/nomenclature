// current issue is that I cannot get gsap's on complete event to work

barba.init({
  debug:true,
  transitions: [
    {
      name: 'main',
      leave({current, next, trigger}){
          return new Promise (resolve=>{
            const timeline = gsap.timeline()
            current.container.remove()
            timeline.to('header', {opacity:0}, 0)
            timeline.to('.fader', {opacity:1}, 0)
            resolve()
          })
      },
      beforeEnter({current, next, trigger}){
        window.scroll(0, 0)
          return new Promise (resolve=>{
            const timeline = gsap.timeline()
            
            timeline.set('header', {opacity:0}, 0)
            timeline.set('.fader', { opacity:1}, 0)
            resolve()
          })
          
      },
      enter({current, next, trigger}){
          return new Promise (resolve=>{
            const timeline = gsap.timeline()

           
            timeline.to('header', {opacity:1}, 2)
            timeline.to('.fader', {opacity:0}, 2)
            resolve()
          })
      }
    }
  ],
  views: [
    {
      namespace: 'intro', 
      beforeEnter(){
        setIntro()
      },
      afterEnter(){
        introFunctions()
        animateAlphabet()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        introGlyphsSection()
        introBodySamples()
        introTextSampleEdit()
        headerScroll()
        bodySampleOptions()
      }
    }, 
    {
      namespace: 'intro-mono', 
      beforeEnter(){
        setIntroMono()
      },
      afterEnter(){
        introMonoFunctions()
        animateAlphabet()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        headerScroll()
        introMonoGlyphsSection()
        introMonoBodySamples()
        introMonoTextSampleEdit()
        bodySampleOptions()
      }
    }, 
    {
      namespace: 'dim', 
      beforeEnter(){
        setDim()
      },
      afterEnter(){
        dimFunctions()
        animateAlphabet()
        dimTextSampleEdit()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        dimGlyphsSection()
        dimBodySamples()
        headerScroll()
        bodySampleOptions()
      }
    }, 
    {
      namespace: 'kedzie', 
      beforeEnter(){
        setKedzie()
      },
      afterEnter(){
        kedzieFunctions()
        animateAlphabet()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        kedzieGlyphsSection()
        kedzieTextSampleEdit()
        kedzieBodySamples()
        headerScroll()
        bodySampleOptions()
      }
    }, 
    {
      namespace: 'queen-anne', 
      beforeEnter(){
        setQueenAnne()
      },
      afterEnter(){
        queenAnneFunctions()
        animateAlphabet()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        headerScroll()
        qaGlyphsSection()
        qaTextSampleEdit()
        qaBodySamples()
        bodySampleOptions()
      }
    }, 
    {
      namespace: 'sharp-stencil', 
      beforeEnter(){
        setSharpStencil()
      },
      afterEnter(){
        sharpStencilFunctions()
        animateAlphabet()
        colorChanger()
        textScrollEffect()
        cursorAnimation()
        cursorAnimationTwo()
        headerScroll()
      }
    }, 
    {
      namespace: 'all-fonts',
      beforeEnter(){
        afSet()
      },
        afterEnter(){
          allFontsFunctions()
          scrollWindow()
          scrollTextEffect()
          observerAnimation()
          cursorAnimation()
          cursorAnimationTwo()
          characterGIF()
      }
    }
  ]
})



// transition idea: on font page have the large text slide back underneath its container on leave, then on enter have the next text animate up from below