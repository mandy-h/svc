import './styles.scss';

import React from 'react';

import useMockData from '/src/hooks/useMockData/useMockData';
import { SvcProvider } from '/src/contexts/SvcContext';
import Product from '/src/components/Product';

export default function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', columnGap: '40px', flexWrap: 'wrap' }}>
        <TestCase dataSet={0} />
        <TestCase dataSet={1} />
        <TestCase dataSet={2} />
        <TestCase dataSet={3} />
      </div>
    </div>
  );
}

/**
 * Returns HTML for an SVC test case.
 * @param {number} [dataSet = 0] - Mock data set to use
 */
function TestCase({ dataSet = 0 }) {
  const { data } = useMockData(dataSet);
  return (
    <SvcProvider>
      <Product data={data} />
    </SvcProvider>
  );
}
