import React, { useState, useRef, useEffect } from 'react';
import { useSvcContext } from '/src/contexts/SvcContext';

/**
 * @param {object} data
 */
// export default function SvcSelector({data, setSelectedProduct}) {
export default function SvcSelector({ data }) {
  const { setSelectedProduct } = useSvcContext();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionAvailability, setOptionAvailability] = useState({});
  const formRef = useRef(null);

  const combinations = Object.values(data.products).map((product) => {
    return {
      value: getPropertiesArray(product.properties),
      isAvailable: product.isAvailable,
      sku: product.sku
    };
  });

  useEffect(() => {
    const defaultSelection = Object.values(data.products).find(
      (product) => product.isAvailable
    ).properties;
    setSelectedOptions(defaultSelection);
    // Make default selections appear as selected in the UI
    Object.values(defaultSelection).forEach((value) => {
      const input = formRef.current.querySelector(`[value=${value}]`);
      input && (input.checked = true);
    });
  }, [data]);
  // }, []);

  // Won't cause unnecessary re-renders, since handleOptionClick() only sets the state when a value actually changes
  useEffect(() => {
    calculateOptionAvailability();
    updateSelectedProduct();
  }, [selectedOptions]);

  /**
   * Converts an object of properties like this:
   * {
   *   color: 'color1',
   *   size: 'size1'
   * }
   *
   * to this:
   * ['color1', 'size1']
   */
  function getPropertiesArray(obj) {
    return Object.values(obj);
  }

  /**
   * Gets the product data for a given combination of SVC properties.
   * @param {(object|string[])} properties - Examples: { color: 'color0', size: 'size0' }, ['color0', 'size0']
   */
  function getProductData(properties) {
    const combination = combinations.find(
      (c) => c.value.toString() === getPropertiesArray(properties).toString()
    );
    if (!combination) {
      return;
    }
    // Look up product
    return data.products[combination.sku];
  }

  /**
   * Calculates option availability based on the selected options and updates the optionAvailability state.
   */
  function calculateOptionAvailability() {
    const newState = {};
    /* 
      When marking options as unavailable, we're only interested in:
        - combinations that share all but one property with the currently selected combination (i.e. the next 
        combination that can be selected when the user clicks on any option)
        - the selected combination
    */
    for (const combination of combinations) {
      const selectedCombination = getPropertiesArray(selectedOptions);
      const unmatchedOptions = combination.value.filter(
        (option) => !selectedCombination.includes(option)
      );

      if (unmatchedOptions.length === 1 && !combination.isAvailable) {
        // Option is unavailable
        newState[unmatchedOptions[0]] = false;
      } else if (unmatchedOptions.length === 0 && !combination.isAvailable) {
        // The SKU is unavailable, so all selected options are now unavailable
        for (const option of selectedCombination) {
          newState[option] = false;
        }
      }
    }

    setOptionAvailability(newState);
  }

  /**
   * Finds the product corresponding to the selected options and calls setSelectedProduct().
   */
  function updateSelectedProduct() {
    const newState = getProductData(selectedOptions);
    setSelectedProduct(newState);
  }

  function handleOptionChange(event) {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  function handleOnClick(event) {
    // Disables keyboard operation of radio buttons for mouse users, but maintains it for keyboard users
    if (event.type === 'click' && event.clientX !== 0 && event.clientY !== 0) {
      event.target.blur();
    }
  }

  /**
   * Sets classes on an option, depending on its state.
   */
  function getButtonClasses(option) {
    let classes = '';
    classes += 'variant ';
    if (getPropertiesArray(selectedOptions).includes(option.id)) {
      classes += 'is-selected ';
    }
    if (optionAvailability[option.id] === false) {
      classes += 'is-unavailable ';
    }
    return classes;
  }

  /**
   * Returns JSX for a single option.
   */
  function createOption({ option, optionType, optionGroupId }) {
    let buttonContent;
    if (optionType === 'text') {
      buttonContent = <span className="variant-text">{option.label}</span>;
    } else if (optionType === 'swatch' && option.swatch.type === 'color') {
      buttonContent = (
        <div
          aria-label={option.label}
          className="variant-swatch"
          style={{ backgroundColor: option.swatch.value }}
        />
      );
    }

    return (
      <label key={option.id} className={getButtonClasses(option)}>
        {/* Need to either wrap input fields in a form tag or make them unique across several SVC components on the same page */}
        <input type="radio" name={optionGroupId} value={option.id} />
        {buttonContent}
      </label>
    );
  }

  return (
    <form className="svc-selector" ref={formRef}>
      {/* Create option groups */}
      {data.optionGroups?.map((optionGroup) => {
        // Hides any option groups that only have one option
        if (optionGroup.values <= 1) {
          return null;
        }
        return (
          <fieldset key={optionGroup.id} className="variant-group">
            <legend className="variant-group-label">
              {optionGroup.label}{' '}
              <strong>
                {data.optionIdsToLabels[selectedOptions[optionGroup.id]]}
              </strong>
            </legend>
            <div
              className="variants"
              onChange={handleOptionChange}
              onClick={handleOnClick}
            >
              {/* Create options */}
              {optionGroup.values.map((option) => {
                return createOption({
                  option,
                  optionType: optionGroup.type,
                  optionGroupId: optionGroup.id
                });
              })}
            </div>
          </fieldset>
        );
      })}
    </form>
  );
}
