let count =0
        document.getElementById("evaluatedText").addEventListener("input",(e)=>{
            count = e.target.value.length
            document.getElementById("letterCount").innerText = `${count}`
        })
