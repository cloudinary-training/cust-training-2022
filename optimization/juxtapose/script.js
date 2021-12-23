document.addEventListener('DOMContentLoaded', e=>{

    document.querySelector(".image-link-button").addEventListener("click",e=>{
        const original = document.getElementById("input1").value;
        const optimized = document.getElementById("input2").value;

        const slider = new juxtapose.JXSlider(
            '#juxtapose-wrapper',
           [
             {
               src: original,
               label: "Original",
               credit: 'Pexels'
             },
             {
               src: optimized,
               label: "Optimized",
               credit: "Pexels"
             }
           ],
           {
             animate: true,
             showLabels: true,
             showCredits: true,
             startingPosition: "50%"
           })
       })
       

    })

    