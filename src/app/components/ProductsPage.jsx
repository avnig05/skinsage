"use client"
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Papa.parse('/skinsage_data.tsv', {
      download: true,
      header: true,
      delimiter: "\t",
      complete: function(results) {
        setProducts(results.data);
      }
    });
  }, []);

  return (
    <div style={{border: '2px solid black', borderRadius: '5px', width: '600px', height: '600px', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', overflow: 'auto'}}>
      {products.map((product, index) => (
        <div key={index} style={{ backgroundColor: '#fff', padding: '10px', margin: '10px', borderRadius: '5px' }}>
          <h2 style = {{color: 'black'}}>{product.ProductName}</h2>
          <p style = {{color: 'black'}}>{product.ProductDesc}</p>
          <img src={product.ImgURL} alt={product.ProductName} />
          <p style = {{color: 'black'}}>{product.Price}</p>
          <p style = {{color: 'black'}}>{product.SkinType}</p>
          <p style = {{color: 'black'}}>{product.Issues}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;