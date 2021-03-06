
const container = document.querySelector('.container')
window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    const container = document.querySelector('.container')
    // Add animation bindings to elements
    lax.addElements('h1', {
        scrollY: {                // Driver name
            translateY: [           // CSS property
              [0,2000],  // Driver value map
              [100,-400],   // Animation value map
            {
                inertia: -5
            }
            ]
           
        }})
        lax.addElements('.line', {
            scrollY: {                // Driver name
                opacity: [           // CSS property
                  [0,700],  // Driver value map
                  [1, 0]
              
                ]
            }})
            lax.addElements('.mountains', {
                scrollY: {                // Driver name
                    translateY: [           // CSS property
                      [0,2000],  // Driver value map
                      [200,-100],   // Animation value map
                    {
                        inertia: -5
                    }
                    ]
                   
                }})     
                lax.addElements('.kallio', {
                    scrollY: {                // Driver name
                        translateY: [           // CSS property
                          [0,2000],  // Driver value map
                          [0,-200],   // Animation value map
                        {
                            inertia: -5
                        }
                        ]
                       
                    }}) 
                    lax.addElements('.secondary', {
                        scrollY: {                // Driver name
                            translateX: [           // CSS property
                              [10,1000],  // Driver value map
                              [-1000,0],   // Animation value map
                            {
                                inertia: -5
                            }
                            ]
                           
                        }})         
    }
        
       