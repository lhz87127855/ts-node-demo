const compProps = {
  type: 'string',
  title: '单选框',
  'x-component': 'select',
  'x-component-props': {
    style: {
      width: '100%',
    },
    layout: 'vertical',
    dataSource: [
      {
        label: 'Ocean 5G Ultra',
        value: 'Ocean5GUltra',
        style: {
          backgroundColor: '#FF8800',
          color: '#fff',
        },
      },
      {
        label: 'Ocean 5G Ultra Wideband',
        value: 'Ocean5GUltraWideband',
      },
      {
        label: 'Ocean 5G Ultra Wideband Data',
        value: 'Ocean5GUltraWidebandData',
      },
      {
        label: 'What is Chatra',
        value: 'WhatisChatra',
      },
    ],
  },
};

const compArrProps = {
  type: 'array',
  // title: '多选框',
  'x-component': 'multipleSelect',
  'x-component-props': {
    style: {
      width: '100%',
    },
    lines: 3,
    title: '多选框',
    dataSource: [
      {
        label: 'Ocean 5G Ultra',
        value: 'Ocean5GUltra',
        description: 'For only $99，you can enjoy 25GB High Speed Data，Unlimited All Net Texts，Unlimited DITO to DITO calls',
      },
      {
        label: 'Ocean 5G Ultra Wideband',
        value: 'Ocean5GUltraWideband',
        description: 'For only $99，you can enjoy 25GB High Speed Data，Unlimited All Net Texts，Unlimited DITO to DITO calls',
        style: {
          backgroundColor: 'red',
          color: '#fff',
        },
      },
      {
        label: 'Ocean 5G Ultra Wideband Data',
        value: 'Ocean5GUltraWidebandData',
        description: 'For only $99，you can enjoy 25GB High Speed Data，Unlimited All Net Texts，Unlimited DITO to DITO calls',
      },
      {
        label: 'What is Chatra',
        value: 'WhatisChatra',
        description: 'For only $99，you can enjoy 25GB High Speed Data，Unlimited All Net Texts，Unlimited DITO to DITO calls',
      },
    ].concat(
      '0'
        .repeat(10)
        .split('')
        .map((_, idx) => ({
          label: 'What is Chatra' + idx,
          value: 'WhatisChatra' + idx,
          description: 'For only $99，you can enjoy 25GB High Speed Data，Unlimited All Net Texts，Unlimited DITO to DITO calls',
        }))
    ),
  },
};

const remoteCompProps = {
  url: 'https://docs.iwhalecloud.com/dmz-proxy/cos/download/128/remote-chat/minifish.js',
  params: [
    { type: 'title', data: { title: 'SGP Copilot - 检测到内存泄漏', icon: '11s', data: 'CMDB告警中心检测到xxxx' } },
    {
      type: 'echarts',
      data: {
        title: '内存增长趋势（单位M）',
        data: [
          { name: '2023/12/11 12:00:01', value: 20 },
          { name: '2023/12/12 12:00:01', value: 30 },
          { name: '2023/12/14 12:00:01', value: 20 },
        ],
      },
    },
    { type: 'echarts', data: { title: '内存增长趋势（单位M）', data: [{ name: '2023/01/01 12:00:01', value: 20 }] } },
    { type: 'echarts', data: { title: '内存增长趋势（单位M）', data: [{ name: '2023/01/01 12:00:01', value: 20 }] } },
  ],
};

const errorProps = {
  type: 'void',
  title: '错误提示',
  'x-component': 'error',
  'x-component-props': {
    style: {
      width: '100%',
    },
    dataSource: '500 internal server error 500 internal server error500 internal server error500 internal server error',
  },
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 250,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    width: 150,
  },
];
const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const tableProps = {
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    columns,
    preview: true,
    dataSource: '0'
      .split('')
      .map((_, index) => tableData.map((item) => ({ ...item, key: item.key + index })))
      .flat(),
    pagination: false,
  },
};

const compStr = `\`\`\`@component ${JSON.stringify(compProps)} @component\`\`\``;
const compArrStr = `\`\`\`@component ${JSON.stringify(compArrProps)} @component\`\`\``;
const remoteCompStr = `\`\`\`@remoteComp ${JSON.stringify(remoteCompProps)} @remoteComp\`\`\``;
const errorStr = `\`@component ${JSON.stringify(errorProps)} @component\``;
const tableStr = `\`@component ${JSON.stringify(tableProps)} @component\``;

// console.log('compStr', compStr);
// console.log('compArrStr', compArrStr);
// console.log('remoteCompStr', remoteCompStr);
// console.log('errorStr', errorStr);
console.log('tableStr', tableStr);
