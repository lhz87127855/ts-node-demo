type ITestMap1 = {
  name: string;
  age: number;
  gender: string;
  isStudent: boolean;
  favorite: string[];
};

type IFuncTest = (key: keyof ITestMap1) => ITestMap1[key]

const getValueType: IFuncTest = (key: keyof ITestMap1) => {
  // 使用索引类型查询来获取对应键的值类型
  return; // 这里会自动返回对应键的值类型
}

// 使用示例
const nameType = getValueType("name"); // 返回 string
const ageType = getValueType("age"); // 返回 number
const genderType: string = getValueType("gender"); // 返回 string
const isStudentType: boolean = getValueType("isStudent"); // 返回 boolean