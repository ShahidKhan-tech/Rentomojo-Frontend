import React from 'react'

function Post(props) {

    const data=[
        {
            title:"shahi",
            content:"aclddll"
        }
    ];
    return (
        <div>
            <h1>user id:{props.data}</h1>
            {
            data.map((item)=>(
            <div className="card">
                {item.title}<br/>
                {item.content}
            </div>
            ))
            }
            
            
        </div>
    )
}

export default Post
