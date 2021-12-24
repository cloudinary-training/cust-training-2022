document.addEventListener('DOMContentLoaded', e=>{

    document.querySelector(".image-link-button").addEventListener("click",e=>{
        const original = document.getElementById("input1").value;
        const optimized = document.getElementById("input2").value;

        document.getElementById("juxtapose-wrapper").innerHTML=""
        const slider = new juxtapose.JXSlider(
            '#juxtapose-wrapper',
           [
             {
               src: original,
               label: original,
               credit: 'Pexels'
             },
             {
               src: optimized,
               label: optimized,
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

    