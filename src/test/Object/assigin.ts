const originalObj = {
  audioInterval: 300,
  icon: null,
  inputActions: ['audio'],
  mode: 'http',
  presetScene: [],
  timeout: 8000,
  title: '智能聊天工具',
  token: undefined,
  url: 'http://10.45.47.152:9999/dynamic_tool/tools_chat',
  userCode: '0',
  welcome: '你好，我是AI助手，我能帮到你什么？',
  width: '600px',
  wsUrl: undefined,
};

const nextObj = {
  audioInterval: undefined,
  inputActions: undefined,
  mode: undefined,
  presetScene: [{ label: 'mock测试', value: 'mock' }],
  timeout: undefined,
  title: undefined,
  token: undefined,
  url: undefined,
  userCode: '0',
  welcome: undefined,
  width: undefined,
  wsUrl: '/powerai/audio_ws',
};

console.log('afterMerge:', Object.assign({}, originalObj, nextObj));
