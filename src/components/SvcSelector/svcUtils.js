// (function main() {
//   // Right-click => Copy Object
//   console.log(generateData(
//     {
//       size: ['Small', 'Medium', 'Large'],
//       color: ['Blue', 'Gray']
//     },
//     'T-Shirt'
//   ));
// }());

function generateData(input, base) {
  function cartesian(a) {
    return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
  }

  const combinations = cartesian(Object.values(input));
  const data = {
    products: {},
    optionGroups: [],
    optionIdsToLabels: {}
  };

  // Creating 'optionGroups' and 'optionIdsToLabels'
  Object.entries(input).forEach(([groupName, values]) => {
    const obj = {
      id: groupName,
      type: 'text',
      label: groupName.charAt(0).toUpperCase() + groupName.slice(1),
      values: []
    };

    values.forEach((value, index) => {
      const optionId = groupName + index;
      obj.values.push({
        id: optionId,
        label: value
      });

      data.optionIdsToLabels[optionId] = value;
    });

    data.optionGroups.push(obj);
  });

  // Creating 'products'
  const skuBase = Math.floor(10000 + Math.random() * 90000).toString(); // First five digits
  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];
    const sku = skuBase + String(i).padStart(3, '0');
    const name = combination.join(' ') + ' ' + base;
    const isAvailable = !!Math.round(Math.random());
    const price = (Math.random() * 20).toFixed(2);

    data.products[sku] = {
      sku,
      properties: {},
      isAvailable,
      name,
      price
    };

    const inputKeys = Object.keys(input);
    let groupName = '';
    let optionId = '';
    combination.forEach((option) => {
      inputKeys.forEach((key) => {
        const optionIndex = input[key].indexOf(option);
        if (optionIndex > -1) {
          groupName = key;
          optionId = groupName + optionIndex;
        }
      });

      data.products[sku].properties[groupName] = optionId;
    });
  }

  return data;
}
