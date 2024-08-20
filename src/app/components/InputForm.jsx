"use client"
import React, {useState} from 'react'

const InputForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    
  })
  return (
    <div style={{ padding: '100px' }}>
    <div style={{ marginBottom: '60px', width: '300px' }}>
      <label htmlFor="skinType" style={{ display: 'block', marginBottom: '5px', fontSize: '20px', color: 'black' }}>skin type</label>
      <select         
      id="skinType"
      style={{ width: '100%', height: '40px', fontSize: '20px', padding: '5px', border: '2px solid black', borderRadius: '5px', color: 'black'}}
      >
        <option value="">select your skin type</option>
        <option value="oily">oily</option>
        <option value="dry">dry</option>
        <option value="combination">combination</option>
        <option value="sensitive">sensitive</option>
      </select>
    </div>
    <div style={{ marginBottom: '60px', width: '300px' }}>
      <label htmlFor="skinType" style={{ display: 'block', marginBottom: '5px', fontSize: '20px', color: 'black' }}>skin type</label>
      <select         
      id="issues"
      style={{ width: '100%', height: '40px', fontSize: '20px', padding: '5px', border: '2px solid black', borderRadius: '5px', color: 'black'}}
      >
        <option value="">select your skin issues</option>
        <option value="acne">acne</option>
        <option value="hyperpigmentation">hyperpigmentation</option>
        <option value="dryness">dryness</option>
        <option value="wrinkles">wrinkles</option>
        <option value="dullness">dullness</option>
        <option value="dark circles">dark circles</option>
        <option value="redness">redness</option>
      </select>
    </div>
    <div style={{ marginBottom: '60px', width: '300px' }}>
      <label htmlFor="skinType" style={{ display: 'block', marginBottom: '5px', fontSize: '20px', color: 'black' }}>skin type</label>
      <select         
      id="budget"
      style={{ width: '100%', height: '40px', fontSize: '20px', padding: '5px', border: '2px solid black', borderRadius: '5px', color: 'black'}}
      >
        <option value="">select your budget</option>
        <option value="low($)">low($)</option>
        <option value="medium($)">medium($)</option>
        <option value="high($)">high($)</option>
      </select>
    </div>
  </div>
  );
}

export default InputForm