import React from 'react';

const Editor = (props) => {
    return (
        //on stateless components, className doesnt automatically transfer to the parent div
        <div className={props.className}>
            <div>
                <h1>Editor</h1>
            </div>
            <div>
                <textarea onChange={props.changeFunction} value={props.text} id='editor'>
                </textarea>
            </div>
        </div>
    )
}

export default Editor;