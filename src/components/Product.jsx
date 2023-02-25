import React from 'react';
import { useSvcContext } from '/src/contexts/SvcContext';
import SvcSelector from '/src/components/SvcSelector/SvcSelector';

/**
 * @param {object} data
 */
export default function Product({ data }) {
  // const [selectedProduct, setSelectedProduct] = useState();
  const { selectedProduct } = useSvcContext();

  return (
    <div>
      {selectedProduct && <ProductInfo data={selectedProduct} />}
      <br />
      {data && (
        // <SvcSelector data={data} setSelectedProduct={setSelectedProduct} />
        <SvcSelector data={data} />
      )}
      <br />
      {selectedProduct && <FulfillmentOptions data={selectedProduct} />}
    </div>
  );
}

/**
 * @param {object} data
 */
function ProductInfo({ data }) {
  return (
    <div>
      <div>${data.price}</div>
      <div>{data.name}</div>
    </div>
  );
}

/**
 * @param {object} data
 */
function FulfillmentOptions({ data }) {
  return (
    <div>
      {data.isAvailable === false && (
        <strong>This item is currently out of stock.</strong>
      )}
      {data.isAvailable === true && <div>Fulfillment options here</div>}
    </div>
  );
}
