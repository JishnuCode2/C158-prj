AFRAME.registerComponent("cursor-listener",{
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
    schema:{
        selectedItemId: {default:"", type:"string"}
    },

    handlePlaceListState: function(){
        const id = this.el.getAttribute("id");
        const postersId = ["poster_1", "poster_2", "poster_3","poster_4"];

        if (postersId.includes(id)){
            const posterContainer = document.querySelector("#posters-container");
            posterContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            });
            this.el.setAttribute("material",{
                color: "#fff",
                opacity: 0.6
            });
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handlePlaceListState()
        });
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId){
                    el.setAttribute("material",{
                        color: "#000",
                        opacity: 0.3
                    });
                }
            }
        })
    }

})