//ТАБЫ В INDEX-HOW
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.step__text').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log (path)

      document.querySelectorAll('.how__card').forEach(function(tabContent) {
        tabContent.classList.remove('how__card-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__card-active')
    })
  })
});