import gsap from "gsap"
import Pace from "pace-js"

Pace.start()

Pace.bar.update = function (prog) {
  Pace.trigger("update", prog)
  this.progress = prog
  return this.render()
} // override update func to trigger 'update' event

const $percentage = document.querySelector(".percentage")
const $line = document.querySelector(".line")

const $loader = document.querySelector(".loader")

let dismountHasRun = false

Pace.on("update", (progress) => {
  $percentage.innerHTML = progress.toFixed(0) + "%"
  $line.style.width = progress.toFixed(0) + "%"
  if (window.hasMounted) {
    if (!dismountHasRun) {
      dismountHasRun = true

      gsap.to(".loader .content", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set($loader, { display: "none" }),
      })
    }
  }
})
