
import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  // console.log(value);
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='title' />
        <div className='editorContainer'>
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}  />
        </div>
      </div>
        <div className='menu'>
          <div className='item'>
            <h1>Publish</h1>
            <span>
              <b>Status:</b> Draft
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input style={{display: 'none'}} type='file' id='file' name='' />
            <label htmlFor='file' className='file'>Upload Image</label>
            <div className='buttons'>
              <button>Save as Drive</button>
              <button>Update</button>
            </div>
          </div>
          <div className='item'>
            <h1>Category</h1>
            <div className='cat'>
              <input type='radio' id='art' name='cat' value='art' />
              <label htmlFor='art'>Art</label>
            </div>
           <div className='cat'>
              <input type='radio' id='design' name='cat' value='design' />
              <label htmlFor='design'>design</label>
           </div>

           <div className='cat'>
              <input type='radio' id='technologi' name='cat' value='technologi' />
              <label htmlFor='technologi'>technologi</label>
           </div>
            
            <div className='cat'>
              <input type='radio' id='politik' name='cat' value='politik' />
              <label htmlFor='politik'>politik</label>
            </div>
            
            <div className='cat'>
              <input type='radio' id='football' name='cat' value='football' />
              <label htmlFor='football'>football</label>
            </div>
            
            <div className='cat'>
              <input type='radio' id='gadget' name='cat' value='gadget' />
              <label htmlFor='gadget'>gadget</label>
            </div>
           


          </div>
        </div>
      </div>
  )
}

export default Write