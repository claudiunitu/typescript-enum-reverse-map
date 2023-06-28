export const getReverseEnum = <T extends {}>(
  enumObj: T,
  enumValue: (typeof enumObj)[keyof T]
): keyof T => {
  const keyIndex = Object.values(enumObj).indexOf(enumValue);
  return Object.keys(enumObj)[keyIndex] as keyof T;
};
