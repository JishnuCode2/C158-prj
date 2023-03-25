AFRAME.registerComponent("poster",{

  init: function(){
    this.placeContainer = this.el;
    this.createCards()
  },

  createCards: function(){
    const postersRef = [
      {
        id: "poster_1",
        url: "assets/posters/poster_1_img.jpeg" 
      },
      {
        id: "poster_2",
        url: "assets/posters/poster_2_img.jpeg"
      },
      {
        id: "poster_3",
        url: "assets/posters/poster_3_img.jpeg"
      },
      {
        id: "poster_4",
        url: "assets/posters/poster_4_img.jpeg"
      }
    ]

    var previousXPosition = -88
    for (var item of postersRef){
         const posX = previousXPosition + 35;
         const posY = 0;
         const posZ = -40;
         const position = {x:posX, y:posY, z:posZ};
         previousXPosition = posX;

         const poster = this.createThumbNail(item);

         const borderEl = this.createBorder(position, item.id);
         borderEl.appendChild(poster);

         this.placeContainer.appendChild(borderEl);
    }
  },

  createBorder: function(position, id){
    const elementEl = document.createElement("a-entity");
    elementEl.setAttribute("id", id);
    elementEl.setAttribute("position", position);
    elementEl.setAttribute("material", {
      color: "#000000",
      opacity: "0.3"
    });
    elementEl.setAttribute("geometry",{
      primitive: "plane",
      width: 29,
      height: 36
    });
    elementEl.setAttribute("cursor-listener",{})
    return elementEl
  },

  createThumbNail: function(item){
    const elementEl = document.createElement("a-entity");
    elementEl.setAttribute("visible", true)
    elementEl.setAttribute("geometry", {
      primitive: "plane",
      width: 28,
      height: 35
    });
    elementEl.setAttribute("material",{src: item.url})

    return elementEl
  },

})