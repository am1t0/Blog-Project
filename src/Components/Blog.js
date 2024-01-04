import React, { useContext } from 'react'
import { BlogStore } from '../Store/Data';


export default function Blog({ data }) {
 
    const {removeBlog} = useContext(BlogStore); 

    const handleOnDelete=()=>{
         console.log('Deleting the Blog....')
         removeBlog(data.title)
    }
    return (
        <>
            <div className="card my-3" style={{ width: '70%' }}>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={handleOnDelete}>
                        <i className="fa-solid fa-trash"></i>
                    </span>
                    <div className="d-flex justify-content-between">
                        <p>{data.author}</p>
                        <p>{data.date}</p>
                    </div>
                    <p className="card-text">{data.body}</p>
                    {data.tags.map((tag) => {
                        return <span key={tag} className="badge text-bg-primary mx-1">{tag}</span>
                    })}

                </div>
            </div>
        </>
    )
}
