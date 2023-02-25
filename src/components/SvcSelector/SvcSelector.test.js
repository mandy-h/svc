import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import { testData } from '../../hooks/useMockData/testData';
import { SvcProvider } from '/src/contexts/SvcContext';
import SvcSelector from './SvcSelector';

Enzyme.configure({ adapter: new Adapter() });

describe('SvcSelector component', () => {
  /* ==========================================================================
   * Setup
  ========================================================================== */
  let component;
  beforeEach(async () => {
    component = mount(
      <SvcProvider>
        <SvcSelector data={testData[0]} />
      </SvcProvider>
    );
    // Waiting for useEffect() to select initial values
    await act(async () => {
      await Promise.resolve(component);
    });
  });

  /* ==========================================================================
   * Tests
  ========================================================================== */
  it('Rendered with first available value selected', async () => {
    const selectedColor = component.find('.variant-group-label').text();
    expect(selectedColor).toEqual('Color Blue');
  });

  it('Changed selected color via click', async () => {
    await act(async () => {
      component.find('input[value="color2"]').simulate('click');
    });
    component.update();
    const selectedColor = component.find('.variant-group-label').text();
    expect(selectedColor).toEqual('Color Gray');
  });
});
