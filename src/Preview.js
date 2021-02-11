import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks:true,
    gfm: true

})
const Preview = (props) => {
    return (
        <div>
            <div>
                <h1>Preview</h1>
            </div>
            <div id='preview' dangerouslySetInnerHTML={({__html:marked(props.text)})}>
            </div>
        </div>
    )
}

export default Preview;