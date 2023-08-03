import React from 'react'
import { useState } from 'react'

function FileUpload() {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.file[0])
        console.log(file)
    }
    return (
        <div>
            <h2>File Uploading in React JS</h2>
            <form>
                <input type="file" name="file" onChange={handleFile}/>
                <button>Upload</button>

            </form>
        </div>
    )
}

export default FileUpload