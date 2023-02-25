export const testData = [
  // Set 0 - has color swatches
  // Unavailable: White
  {
    products: {
      '11111111': {
        sku: '11111111',
        properties: {
          color: 'color1'
        },
        isAvailable: true,
        name: 'Blue T-Shirt',
        price: '10.00'
      },
      '22222222': {
        sku: '22222222',
        properties: {
          color: 'color2'
        },
        isAvailable: true,
        name: 'Gray T-Shirt',
        price: '10.00'
      },
      '33333333': {
        sku: '33333333',
        properties: {
          color: 'color3'
        },
        isAvailable: false,
        name: 'White T-Shirt',
        price: '10.00'
      }
    },
    optionGroups: [
      {
        id: 'color',
        type: 'swatch',
        label: 'Color',
        values: [
          {
            id: 'color1',
            label: 'blue',
            swatch: {
              type: 'color',
              value: '#06f'
            }
          },
          {
            id: 'color2',
            label: 'Gray',
            swatch: {
              type: 'color',
              value: '#666'
            }
          },
          {
            id: 'color3',
            label: 'White',
            swatch: {
              type: 'color',
              value: '#f2f2f2'
            }
          }
        ]
      }
    ],
    optionIdsToLabels: {
      color1: 'Blue',
      color2: 'Gray',
      color3: 'White'
    }
  },

  // Set 1 - has color swatches
  // Unavailable: Medium Solid Blue, Medium Striped Blue, Small Striped Gray, Large Solid Gray
  {
    products: {
      '100001': {
        sku: '100001',
        properties: {
          color: 'color1',
          size: 'size1',
          trim: 'trim1'
        },
        isAvailable: true,
        name: 'Small Solid Blue T-Shirt',
        price: '10.00'
      },
      '100002': {
        sku: '100002',
        properties: {
          color: 'color1',
          size: 'size1',
          trim: 'trim2'
        },
        isAvailable: true,
        name: 'Small Striped Blue T-Shirt',
        price: '15.00'
      },
      '100003': {
        sku: '100003',
        properties: {
          color: 'color1',
          size: 'size2',
          trim: 'trim1'
        },
        isAvailable: false,
        name: 'Medium Solid Blue T-Shirt',
        price: '10.00'
      },
      '100004': {
        sku: '100004',
        properties: {
          color: 'color1',
          size: 'size2',
          trim: 'trim2'
        },
        isAvailable: false,
        name: 'Medium Striped Blue T-Shirt',
        price: '15.00'
      },
      '100005': {
        sku: '100005',
        properties: {
          color: 'color1',
          size: 'size3',
          trim: 'trim1'
        },
        isAvailable: true,
        name: 'Large Solid Blue T-Shirt',
        price: '10.00'
      },
      '100006': {
        sku: '100006',
        properties: {
          color: 'color1',
          size: 'size3',
          trim: 'trim2'
        },
        isAvailable: true,
        name: 'Large Striped Blue T-Shirt',
        price: '15.00'
      },
      '100011': {
        sku: '100011',
        properties: {
          color: 'color2',
          size: 'size1',
          trim: 'trim1'
        },
        isAvailable: true,
        name: 'Small Solid Gray T-Shirt',
        price: '20.00'
      },
      '100012': {
        sku: '100012',
        properties: {
          color: 'color2',
          size: 'size1',
          trim: 'trim2'
        },
        isAvailable: false,
        name: 'Small Striped Gray T-Shirt',
        price: '25.00'
      },
      '100013': {
        sku: '100013',
        properties: {
          color: 'color2',
          size: 'size2',
          trim: 'trim1'
        },
        isAvailable: true,
        name: 'Medium Solid Gray T-Shirt',
        price: '20.00'
      },
      '100014': {
        sku: '100014',
        properties: {
          color: 'color2',
          size: 'size2',
          trim: 'trim2'
        },
        isAvailable: true,
        name: 'Medium Striped Gray T-Shirt',
        price: '25.00'
      },
      '100015': {
        sku: '100015',
        properties: {
          color: 'color2',
          size: 'size3',
          trim: 'trim1'
        },
        isAvailable: false,
        name: 'Large Solid Gray T-Shirt',
        price: '20.00'
      },
      '100016': {
        sku: '100016',
        properties: {
          color: 'color2',
          size: 'size3',
          trim: 'trim2'
        },
        isAvailable: true,
        name: 'Large Striped Gray T-Shirt',
        price: '25.00'
      }
    },
    optionGroups: [
      {
        id: 'color',
        type: 'swatch',
        label: 'Color',
        values: [
          {
            id: 'color1',
            label: 'blue',
            swatch: {
              type: 'color',
              value: '#06f'
            }
          },
          {
            id: 'color2',
            label: 'Gray',
            swatch: {
              type: 'color',
              value: '#666'
            }
          }
        ]
      },
      {
        id: 'trim',
        type: 'text',
        label: 'Trim',
        values: [
          {
            id: 'trim1',
            label: 'Solid'
          },
          {
            id: 'trim2',
            label: 'Striped'
          }
        ]
      },
      {
        id: 'size',
        type: 'text',
        label: 'Size',
        values: [
          {
            id: 'size1',
            label: 'Small'
          },
          {
            id: 'size2',
            label: 'Medium'
          },
          {
            id: 'size3',
            label: 'Large'
          }
        ]
      }
    ],
    optionIdsToLabels: {
      color1: 'Blue',
      color2: 'Gray',
      trim1: 'Solid',
      trim2: 'Striped',
      size1: 'Small',
      size2: 'Medium',
      size3: 'Large'
    }
  },

  // Set 2 - color and size, only one color
  {
    products: {
      '41844000': {
        sku: '41844000',
        properties: {
          size: 'size0',
          color: 'color0'
        },
        isAvailable: false,
        name: 'Small Blue T-Shirt',
        price: '16.71'
      },
      '41844001': {
        sku: '41844001',
        properties: {
          size: 'size1',
          color: 'color0'
        },
        isAvailable: true,
        name: 'Medium Blue T-Shirt',
        price: '15.99'
      },
      '41844002': {
        sku: '41844002',
        properties: {
          size: 'size2',
          color: 'color0'
        },
        isAvailable: true,
        name: 'Large Blue T-Shirt',
        price: '14.57'
      }
    },
    optionGroups: [
      {
        id: 'size',
        type: 'text',
        label: 'Size',
        values: [
          {
            id: 'size0',
            label: 'Small'
          },
          {
            id: 'size1',
            label: 'Medium'
          },
          {
            id: 'size2',
            label: 'Large'
          }
        ]
      },
      {
        id: 'color',
        type: 'text',
        label: 'Color',
        values: [
          {
            id: 'color0',
            label: 'Blue'
          }
        ]
      }
    ],
    optionIdsToLabels: {
      size0: 'Small',
      size1: 'Medium',
      size2: 'Large',
      color0: 'Blue'
    }
  },

  // Set 3 - five option groups
  {
    products: {
      '61654000': {
        sku: '61654000',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: false,
        name: "Men's Small Blue Solid Cotton T-Shirt",
        price: '10.77'
      },
      '61654001': {
        sku: '61654001',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Small Blue Solid Recycled Cotton T-Shirt",
        price: '14.42'
      },
      '61654002': {
        sku: '61654002',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Small Blue Striped Cotton T-Shirt",
        price: '7.37'
      },
      '61654003': {
        sku: '61654003',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Small Blue Striped Recycled Cotton T-Shirt",
        price: '13.48'
      },
      '61654004': {
        sku: '61654004',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Small Gray Solid Cotton T-Shirt",
        price: '13.28'
      },
      '61654005': {
        sku: '61654005',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Small Gray Solid Recycled Cotton T-Shirt",
        price: '18.61'
      },
      '61654006': {
        sku: '61654006',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Men's Small Gray Striped Cotton T-Shirt",
        price: '12.50'
      },
      '61654007': {
        sku: '61654007',
        properties: {
          gender: 'gender0',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Small Gray Striped Recycled Cotton T-Shirt",
        price: '13.54'
      },
      '61654008': {
        sku: '61654008',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Medium Blue Solid Cotton T-Shirt",
        price: '1.33'
      },
      '61654009': {
        sku: '61654009',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Medium Blue Solid Recycled Cotton T-Shirt",
        price: '12.90'
      },
      '61654010': {
        sku: '61654010',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Men's Medium Blue Striped Cotton T-Shirt",
        price: '11.28'
      },
      '61654011': {
        sku: '61654011',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Men's Medium Blue Striped Recycled Cotton T-Shirt",
        price: '9.30'
      },
      '61654012': {
        sku: '61654012',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: false,
        name: "Men's Medium Gray Solid Cotton T-Shirt",
        price: '8.50'
      },
      '61654013': {
        sku: '61654013',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Medium Gray Solid Recycled Cotton T-Shirt",
        price: '16.13'
      },
      '61654014': {
        sku: '61654014',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Medium Gray Striped Cotton T-Shirt",
        price: '16.32'
      },
      '61654015': {
        sku: '61654015',
        properties: {
          gender: 'gender0',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Men's Medium Gray Striped Recycled Cotton T-Shirt",
        price: '10.27'
      },
      '61654016': {
        sku: '61654016',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Large Blue Solid Cotton T-Shirt",
        price: '0.42'
      },
      '61654017': {
        sku: '61654017',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: false,
        name: "Men's Large Blue Solid Recycled Cotton T-Shirt",
        price: '8.87'
      },
      '61654018': {
        sku: '61654018',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Large Blue Striped Cotton T-Shirt",
        price: '10.21'
      },
      '61654019': {
        sku: '61654019',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: true,
        name: "Men's Large Blue Striped Recycled Cotton T-Shirt",
        price: '12.39'
      },
      '61654020': {
        sku: '61654020',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Men's Large Gray Solid Cotton T-Shirt",
        price: '16.76'
      },
      '61654021': {
        sku: '61654021',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: false,
        name: "Men's Large Gray Solid Recycled Cotton T-Shirt",
        price: '11.57'
      },
      '61654022': {
        sku: '61654022',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Men's Large Gray Striped Cotton T-Shirt",
        price: '18.45'
      },
      '61654023': {
        sku: '61654023',
        properties: {
          gender: 'gender0',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Men's Large Gray Striped Recycled Cotton T-Shirt",
        price: '14.51'
      },
      '61654024': {
        sku: '61654024',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Small Blue Solid Cotton T-Shirt",
        price: '14.53'
      },
      '61654025': {
        sku: '61654025',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Small Blue Solid Recycled Cotton T-Shirt",
        price: '2.06'
      },
      '61654026': {
        sku: '61654026',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Small Blue Striped Cotton T-Shirt",
        price: '3.59'
      },
      '61654027': {
        sku: '61654027',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Small Blue Striped Recycled Cotton T-Shirt",
        price: '16.88'
      },
      '61654028': {
        sku: '61654028',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Women's Small Gray Solid Cotton T-Shirt",
        price: '4.25'
      },
      '61654029': {
        sku: '61654029',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Small Gray Solid Recycled Cotton T-Shirt",
        price: '2.52'
      },
      '61654030': {
        sku: '61654030',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: true,
        name: "Women's Small Gray Striped Cotton T-Shirt",
        price: '8.92'
      },
      '61654031': {
        sku: '61654031',
        properties: {
          gender: 'gender1',
          size: 'size0',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Small Gray Striped Recycled Cotton T-Shirt",
        price: '11.90'
      },
      '61654032': {
        sku: '61654032',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Women's Medium Blue Solid Cotton T-Shirt",
        price: '5.04'
      },
      '61654033': {
        sku: '61654033',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Medium Blue Solid Recycled Cotton T-Shirt",
        price: '5.83'
      },
      '61654034': {
        sku: '61654034',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: true,
        name: "Women's Medium Blue Striped Cotton T-Shirt",
        price: '6.39'
      },
      '61654035': {
        sku: '61654035',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Medium Blue Striped Recycled Cotton T-Shirt",
        price: '14.72'
      },
      '61654036': {
        sku: '61654036',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Medium Gray Solid Cotton T-Shirt",
        price: '11.21'
      },
      '61654037': {
        sku: '61654037',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Medium Gray Solid Recycled Cotton T-Shirt",
        price: '15.74'
      },
      '61654038': {
        sku: '61654038',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Medium Gray Striped Cotton T-Shirt",
        price: '7.41'
      },
      '61654039': {
        sku: '61654039',
        properties: {
          gender: 'gender1',
          size: 'size1',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Medium Gray Striped Recycled Cotton T-Shirt",
        price: '17.93'
      },
      '61654040': {
        sku: '61654040',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: true,
        name: "Women's Large Blue Solid Cotton T-Shirt",
        price: '14.41'
      },
      '61654041': {
        sku: '61654041',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Large Blue Solid Recycled Cotton T-Shirt",
        price: '8.79'
      },
      '61654042': {
        sku: '61654042',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Large Blue Striped Cotton T-Shirt",
        price: '12.36'
      },
      '61654043': {
        sku: '61654043',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color0',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Large Blue Striped Recycled Cotton T-Shirt",
        price: '9.69'
      },
      '61654044': {
        sku: '61654044',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Large Gray Solid Cotton T-Shirt",
        price: '16.53'
      },
      '61654045': {
        sku: '61654045',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern0',
          material: 'material1'
        },
        isAvailable: false,
        name: "Women's Large Gray Solid Recycled Cotton T-Shirt",
        price: '7.56'
      },
      '61654046': {
        sku: '61654046',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material0'
        },
        isAvailable: false,
        name: "Women's Large Gray Striped Cotton T-Shirt",
        price: '7.41'
      },
      '61654047': {
        sku: '61654047',
        properties: {
          gender: 'gender1',
          size: 'size2',
          color: 'color1',
          pattern: 'pattern1',
          material: 'material1'
        },
        isAvailable: true,
        name: "Women's Large Gray Striped Recycled Cotton T-Shirt",
        price: '11.34'
      }
    },
    optionGroups: [
      {
        id: 'gender',
        type: 'text',
        label: 'Gender',
        values: [
          {
            id: 'gender0',
            label: "Men's"
          },
          {
            id: 'gender1',
            label: "Women's"
          }
        ]
      },
      {
        id: 'size',
        type: 'text',
        label: 'Size',
        values: [
          {
            id: 'size0',
            label: 'Small'
          },
          {
            id: 'size1',
            label: 'Medium'
          },
          {
            id: 'size2',
            label: 'Large'
          }
        ]
      },
      {
        id: 'color',
        type: 'text',
        label: 'Color',
        values: [
          {
            id: 'color0',
            label: 'Blue'
          },
          {
            id: 'color1',
            label: 'Gray'
          }
        ]
      },
      {
        id: 'pattern',
        type: 'text',
        label: 'Pattern',
        values: [
          {
            id: 'pattern0',
            label: 'Solid'
          },
          {
            id: 'pattern1',
            label: 'Striped'
          }
        ]
      },
      {
        id: 'material',
        type: 'text',
        label: 'Material',
        values: [
          {
            id: 'material0',
            label: 'Cotton'
          },
          {
            id: 'material1',
            label: 'Recycled Cotton'
          }
        ]
      }
    ],
    optionIdsToLabels: {
      gender0: "Men's",
      gender1: "Women's",
      size0: 'Small',
      size1: 'Medium',
      size2: 'Large',
      color0: 'Blue',
      color1: 'Gray',
      pattern0: 'Solid',
      pattern1: 'Striped',
      material0: 'Cotton',
      material1: 'Recycled Cotton'
    }
  },

  // Set 4 - 8 sizes + type="text/drawer"
  {
    products: {
      '80476000': {
        sku: '80476000',
        properties: {
          color: 'color0',
          size: 'size0'
        },
        isAvailable: false,
        name: 'Blue 6 Shoes',
        price: '8.63'
      },
      '80476001': {
        sku: '80476001',
        properties: {
          color: 'color0',
          size: 'size1'
        },
        isAvailable: false,
        name: 'Blue 7 Shoes',
        price: '17.26'
      },
      '80476002': {
        sku: '80476002',
        properties: {
          color: 'color0',
          size: 'size2'
        },
        isAvailable: false,
        name: 'Blue 7.5 Shoes',
        price: '19.26'
      },
      '80476003': {
        sku: '80476003',
        properties: {
          color: 'color0',
          size: 'size3'
        },
        isAvailable: true,
        name: 'Blue 8 Shoes',
        price: '9.44'
      },
      '80476004': {
        sku: '80476004',
        properties: {
          color: 'color0',
          size: 'size4'
        },
        isAvailable: false,
        name: 'Blue 8.5 Shoes',
        price: '7.23'
      },
      '80476005': {
        sku: '80476005',
        properties: {
          color: 'color0',
          size: 'size5'
        },
        isAvailable: true,
        name: 'Blue 9 Shoes',
        price: '13.48'
      },
      '80476006': {
        sku: '80476006',
        properties: {
          color: 'color0',
          size: 'size6'
        },
        isAvailable: false,
        name: 'Blue 9.5 Shoes',
        price: '10.61'
      },
      '80476007': {
        sku: '80476007',
        properties: {
          color: 'color0',
          size: 'size7'
        },
        isAvailable: true,
        name: 'Blue 10 Shoes',
        price: '18.98'
      },
      '80476008': {
        sku: '80476008',
        properties: {
          color: 'color1',
          size: 'size0'
        },
        isAvailable: true,
        name: 'Gray 6 Shoes',
        price: '11.03'
      },
      '80476009': {
        sku: '80476009',
        properties: {
          color: 'color1',
          size: 'size1'
        },
        isAvailable: false,
        name: 'Gray 7 Shoes',
        price: '3.64'
      },
      '80476010': {
        sku: '80476010',
        properties: {
          color: 'color1',
          size: 'size2'
        },
        isAvailable: true,
        name: 'Gray 7.5 Shoes',
        price: '1.13'
      },
      '80476011': {
        sku: '80476011',
        properties: {
          color: 'color1',
          size: 'size3'
        },
        isAvailable: true,
        name: 'Gray 8 Shoes',
        price: '7.42'
      },
      '80476012': {
        sku: '80476012',
        properties: {
          color: 'color1',
          size: 'size4'
        },
        isAvailable: false,
        name: 'Gray 8.5 Shoes',
        price: '12.86'
      },
      '80476013': {
        sku: '80476013',
        properties: {
          color: 'color1',
          size: 'size5'
        },
        isAvailable: true,
        name: 'Gray 9 Shoes',
        price: '8.87'
      },
      '80476014': {
        sku: '80476014',
        properties: {
          color: 'color1',
          size: 'size6'
        },
        isAvailable: false,
        name: 'Gray 9.5 Shoes',
        price: '5.45'
      },
      '80476015': {
        sku: '80476015',
        properties: {
          color: 'color1',
          size: 'size7'
        },
        isAvailable: false,
        name: 'Gray 10 Shoes',
        price: '4.16'
      }
    },
    optionGroups: [
      {
        id: 'color',
        type: 'text',
        label: 'Color',
        values: [
          {
            id: 'color0',
            label: 'Blue'
          },
          {
            id: 'color1',
            label: 'Gray'
          }
        ]
      },
      {
        id: 'size',
        // "type": "text",
        type: 'text/drawer',
        label: 'Size',
        values: [
          {
            id: 'size0',
            label: '6'
          },
          {
            id: 'size1',
            label: '7'
          },
          {
            id: 'size2',
            label: '7.5'
          },
          {
            id: 'size3',
            label: '8'
          },
          {
            id: 'size4',
            label: '8.5'
          },
          {
            id: 'size5',
            label: '9'
          },
          {
            id: 'size6',
            label: '9.5'
          },
          {
            id: 'size7',
            label: '10'
          }
        ]
      }
    ],
    optionIdsToLabels: {
      color0: 'Blue',
      color1: 'Gray',
      size0: '6',
      size1: '7',
      size2: '7.5',
      size3: '8',
      size4: '8.5',
      size5: '9',
      size6: '9.5',
      size7: '10'
    }
  }
];
