const articleTag = document.querySelector('article')
const headerWrapper = document.querySelector('div.header-wrapper')
const headerLine = document.querySelector('div.header-line')
const headerTag = document.querySelector('header')
const headerRight = document.querySelector('div.header-far-right')
const bodyTag = document.querySelector('body')
const largeTextSpans = document.querySelectorAll('div.large-text span')
const tfNavLinks = document.querySelectorAll('div.tf-nav a')
const headerLinks = document.querySelectorAll('div.header-right a')
const siteTitle = document.querySelector('div.header-left p')
const pageTitle = document.querySelector('title')








const cursorAnimation = ()=>{
  
  const cursor = document.querySelector('div.cursor')
  let mouseX = 0
  let mouseY = 0

  let cursorX = 0
  let cursorY = 0

  let speed = 0.08

  function animate (){
    let distX = mouseX - cursorX
    let distY = mouseY - cursorY

    cursorX = cursorX + (distX * speed)
    cursorY = cursorY + (distY * speed)

    cursor.style.left = cursorX +'px'
    cursor.style.top = cursorY + 'px'

    requestAnimationFrame(animate)
  }

  animate()

  document.addEventListener('mousemove', function(e){
    mouseX = e.pageX
    mouseY = e.pageY
  })

}

const cursorAnimationTwo = ()=>{
      const anchorTags = document.querySelectorAll('a')
      const cursor = document.querySelector('div.cursor')
      anchorTags.forEach(tag=>{
      tag.addEventListener('mouseover', ()=>{
        cursor.classList.add('cursor-hover')
      })
      tag.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor-hover')
      })
    })
}









