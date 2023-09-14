  jQuery(document).ready(function () {

                    jQuery("#nanogallery2").nanogallery2( {
                        // ### gallery settings ### 
                        thumbnailHeight:  150,
                        thumbnailWidth:   150,
                        itemsBaseURL:     'https://nanogallery2.nanostudio.org/samples/',
                        
                        // ### gallery content ### 
                        items: [
                            { src: './images/gallery/Ambiente/ambient_ (1).jpg', srct: './images/icones/plan-blue-1.png', title: 'Berlin 1' },
                            { src: './images/gallery/Ambiente/ambient_ (1).jpg', srct: './images/icones/plan-blue-1.png', title: 'Berlin 2' },
                            { src: './images/gallery/Ambiente/ambient_ (1).jpg', srct: './images/icones/plan-blue-1.png', title: 'Berlin 3' }
                          ]
                      });
                  });


                   <!-- <h3>
  nanogallery2 - define a photo gallery with the HTML markup method
  <a href="https://nanogallery2.nanostudio.org/" target="_blank">[more...]</a>
</h3> -->
<div id="nanogallery2"
    // gallery configuration
    data-nanogallery2 = '{ 
      "thumbnailWidth":   "auto",
  	  "thumbnailHeight":  200,
      "itemsBaseURL":     "https://nanogallery2.nanostudio.org/samples/"
    }'
  >
  <!-- content of the gallery -->
  <a href="./images/gallery/Ambiente/ambient_ (1).jpg" data-ngthumb="../images/icones/plan-blue-1.png">Berlin 1</a>
  <a href="./images/gallery/Ambiente/ambient_ (1).jpg" data-ngthumb="../images/icones/plan-blue-1.png">Berlin 2</a>
  <a href="./images/gallery/Ambiente/ambient_ (1).jpg" data-ngthumb="../images/icones/plan-blue-1.png">Berlin 3</a>