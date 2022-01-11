
    const btnmanhatt = document.getElementById("manhattan");    
    const userInput = document.querySelector("input");
    const result = document.querySelector("p");    
    
    btnmanhatt.addEventListener('click', () => {
     let input =Number( userInput.value) || 10  
    let btnmanhattvalue = btnmanhatt.value
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnmanhattvalue}&agency=NYPD`           
    fetch(url)
        .then((urlresponse) => urlresponse.json())
        .then((data) => { 
         let msgdata = data  
          console.log(msgdata)
            msgdata= msgdata.slice(0,input) 
            result.innerHTML += `<ul>` + msgdata.map(function (complaints, index) {
            return ` <li> <p>` + complaints.complaint_type + `</p> <button  onclick= 'hidedisplay(${index})'  id= "display descriptor">what did the police do?</button>`+`</li>`+ `<div class='resolution' id ='${index}'>` + complaints.resolution_description+ `</div>`
                       
                     
        }).join('') + `</ul>`       
        })
        .catch((error) => {
        console.error(error)
        })
        })

        function hidedisplay(id ){
        let docelt = document.getElementById(id)
       
        if (docelt.style.display=='none')
        docelt.style.display='block'
        else docelt.style.display='none'
       } 
            
        const btnqueens = document.getElementById("queens");   
        btnqueens.addEventListener('click', () => {
        input=Number(userInput.value)|| 10
        let btnqueensvalue = btnqueens.value   
        const urlq = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnqueensvalue}&agency=NYPD`                  
             fetch(urlq)
                .then((urlqresponse) => urlqresponse.json())
                .then((data) => { 
                 let msgdata = data  
                 console.log(msgdata)
               
                 msgdata=msgdata.slice(0,input)
                 result.innerHTML = `<ul>` + msgdata.map(function (complaints) {
                return ` <li>` + complaints.complaint_type + `<button  onclick= 'hidedisplay(${index})'   id= "display descriptor">what did the police do?</button>`+`<div class='resolution' id ='${index}'>` + complaints.resolution_description+ `</div>`+`</li>` 
                       
                 }).join('') + `</ul>`       
                })
                .catch((error) => {
                console.error(error)
                })
                })
        
            function hidedisplay(id ){
                let docelt = document.getElementById(id)
               
                if (docelt.style.display=='none')
                docelt.style.display='block'
                else docelt.style.display='none'
            }



        const btnbrook = document.getElementById("brooklyn"); 
        btnbrook.addEventListener('click', () => {
        input = Number(userInput.value)||10
        let btnbrookvalue = btnbrook.value
        const urlbrk = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnbrookvalue}&agency=NYPD`

                fetch(urlbrk)
                .then((urlbrkresponse) => urlbrkresponse.json())
                .then((data) => { 
                let msgdata = data  
                console.log(msgdata) 
                 msgdata = msgdata.slice(0,input)
                result.innerHTML = `<ul>` + msgdata.map(function (complaints) {

                 return  ` <li>` + complaints.complaint_type + `<button  onclick= 'hidedisplay(${index})' id= "display descriptor">what did the police do?</button>`+`<div class='resolution' id ='${index}'>` + complaints.resolution_description+ `</div>`+`</li>` 
                       
                     
                }).join('') + `</ul>`       
                 })
                .catch((error) => {
                console.error(error)
                })
                })

                function hidedisplay(id ){
                let docelt = document.getElementById(id)
                
                if (docelt.style.display=='none')
                 docelt.style.display='block'
                else docelt.style.display='none'
                 }



        const btnbronx = document.getElementById("bronx");
        btnbronx.addEventListener('click', () => {
        let input = Number(userInput.value)||10 
        let btnbronxvalue = btnbronx.value
        const urlbrx =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnbronxvalue}&agency=NYPD`

        fetch(urlbrx)
            .then((urlbrxresponse) => urlbrxresponse.json())
            .then((data) => { 
            let msgdata = data  
            console.log(msgdata)
            msgdata= msgdata.slice(0,input)
              
            result.innerHTML = `<ul>` + msgdata.map(function (complaints) {

           return  ` <li>` + complaints.complaint_type + `<button  onclick= 'hidedisplay(${index})'  id= "display descriptor">what did the police do?</button>`+`<div class='resolution' id ='${index}'>` + complaints.resolution_description+ `</div>`+`</li>` 
                       
                     
          }).join('') + `</ul>`       
          })
            .catch((error) => {
             console.error(error)
             })
            })
            
            function hidedisplay(id ){
            let docelt = document.getElementById(id)
              
             if (docelt.style.display=='none')
             docelt.style.display='block'
             else docelt.style.display='none'
              }


            const btnstis = document.getElementById("statenisland");
            btnstis.addEventListener('click', () => {
            let input = Number (userInput.value)||10 
            let btnstisvalue = btnstis.value
            const urlstis =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnstisvalue}&agency=NYPD`
            
                 fetch(urlstis)
                    .then((urlstisresponse) => urlstisresponse.json())
                    .then((data) => { 
                    let msgdata = data  
                    console.log(msgdata)
                     msgdata= msgdata.slice(0,input)
                       
                    result.innerHTML = `<ul>` + msgdata.map(function (complaints, index) {
                    return ` <li>` + complaints.complaint_type + `<button  onclick= 'hidedisplay(${index})'   id= "display descriptor">what did the police do?</button>`+`<div class='resolution' id ='${index}'>` + complaints.resolution_description+ `</div>`+`</li>` 
                       
                     
                    }).join('') + `</ul>`       
                    })
                    .catch((error) => {
                    console.error(error)
                    })
                    })
            
                function hidedisplay(id ){
                    let docelt = document.getElementById(id)
                
                    if (docelt.style.display=='none')
                    docelt.style.display='block'
                    else docelt.style.display='none'
                }





       

