const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const generateName = (index, length) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += ltrs[index % 10];
    index = Math.floor(index / 10);
  }
  return result;
};

module.exports = generateName;
