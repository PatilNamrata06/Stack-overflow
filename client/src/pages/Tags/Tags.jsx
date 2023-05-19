import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    
    const tagsList = [{
        id: 1,
        tagName: "JavaSrcipt",
        tagDesc: "is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"
    },{
        id: 2,
        tagName: "Python",
        tagDesc: "Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programmingobject-oriented and functional programming.python is a langauge"
    },{
        id: 3,
        tagName: "C++",
        tagDesc: "C++ is a cross-platform language that can be used to create high-performance applications C++ was developed by Bjarne Stroustrup, as an extension to the C language.C++ gives programmers a high level of control over system resources and memory.how to"
    },{
        id: 4,
        tagName: "C",
        tagDesc: "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influentialby Dennis Ritchie, and remains very widely used and influential by Dennis Ritchie, and remains very widely"
    },{
        id: 5,
        tagName: "java",
        tagDesc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible and accessing documentsand accessing documentsand accessing documentsand accessing documentsand accessing "
    },{
        id: 6,
        tagName: "MongoDB",
        tagDesc: "MongoDB is a JSON-oriented (JavaScript Object Notation) document database, although internally it uses a binary-encoded variant of JSON called BSON. BSON is a serialized encoding format for JSON used mainly for storing and accessing documents and ."
    },{
        id: 7,
        tagName: "Django",
        tagDesc: "The Django web framework is a free, open source framework that can speed up development of a web application being built in the Python programming language and accessing documentsand accessing documentsand accessing documentsand accessing documentsand"
    },{
        id: 8,
        tagName: "Angular",
        tagDesc: "The Angular Language Service provides code editors with a way to get completions, errors, hints, and navigation inside Angular templates and accessing documentsand accessing documentsand accessing documentsand accessing documentsand accessing documents"
    }]

    return(
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="homecontainer-2">
                <div className='tag-name'>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or lable that categorizes your question with other, similar question.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                </div>
                    <div className='tags-list-container'>
                        {
                            tagsList.map((tag) => (
                                <TagsList tag={tag} key={tagsList.id} />
                            ))
                        }
                    </div>
              </div> 
        </div>
    )
}

export default Tags