type IGetKeyStr<T> = keyof T; // 获取类型T的所有key值的字符串的联合类型
type IGetValStr<T> = T[keyof T]; // 获取类型T的所有value值的字符串的联合类型

const testMapObj = {
  name: 'test',
  age: 18,
  gender: 'male',
  isStudent: true,
};

type test1 = IGetValStr<typeof testMapObj>;

type ITestMap = {
  name: string;
  age: number;
  gender: string;
  isStudent: boolean;
  favorite: string[];
};

type IKeyType = IGetKeyStr<ITestMap>;
