var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    vueCanvas:null,
    painting:false,
    canvas:null,
    ctx:null
  },
  methods: {
    startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath()
    },
    draw(e) {
      if(!this.painting) return

      this.ctx.lineWidth = 10;
      this.ctx.lineCap ="round"
     
     let rect = this.canvas.getBoundingClientRect();
     this.ctx.lineTo(e.clientX-rect.left,e.clientY-rect.top)
     this.ctx.stroke()

     this.ctx.beginPath()
     this.ctx.moveTo(e.clientX-rect.left,e.clientY-rect.top)

     
    }
  },
 mounted() {
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");  

  // Resize canvas
  this.canvas.height = window.innerHeight;
  this.canvas.width = window.innerWidth;


  //draw a simple triange
    // ctx.strokeStyle = "green"
    // ctx.strokeRect(100,100,300,300)

    //draw a simple traingle
  //  ctx.beginPath();
  //  ctx.moveTo(100,100)
  //  ctx.lineTo(200,100)
  //  ctx.lineTo(200,150)
  //  ctx.closePath()
  //  ctx.stroke()
}
})