// export function mergeObjectArraysWithCommonProperty<Type>(
//   arrayWithBasicProperties: Array<Partial<Type>>,
//   arrayWithExtraProperties: Array<Type>,
//   arrayCommonProperty: string
// ) {
//   return arrayWithBasicProperties.map((fullItem) => {
//     const foundItem = arrayWithExtraProperties.find(
//       (extraItem) =>
//         extraItem[arrayCommonProperty] === fullItem[arrayCommonProperty]
//     );
//     return foundItem ? { ...fullItem, ...foundItem } : fullItem;
//   });
// }

export function mergeObjectArraysWithCommonProperty(
  arrayWithBasicProperties,
  arrayWithExtraProperties,
  arrayCommonProperty
) {
  return arrayWithBasicProperties.map((fullItem) => {
    const foundItem = arrayWithExtraProperties.find(
      (extraItem) =>
        extraItem[arrayCommonProperty] === fullItem[arrayCommonProperty]
    );
    return foundItem ? { ...fullItem, ...foundItem } : fullItem;
  });
}
