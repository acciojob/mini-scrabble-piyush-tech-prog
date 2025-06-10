let count =0
        document.getElementById("evaluatedText").addEventListener("input",(e)=>{
            if(e.inputType === "insertText"){
            count++
            document.getElementById("letterCount").innerText = `${count}`
            }else if(e.inputType === "deleteContentBackward"){
                count--
                document.getElementById("letterCount").innerText = `${count}`
            }
        })
