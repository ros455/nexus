export const validationCalculate = ({ type, design}) => {
    try {
      let arr = [];

      if(type) {
        arr.push({
          isValid: false,
          reason: 'type'
        })
      }

      if(design) {
        arr.push({
          isValid: false,
          reason: 'design'
        })
      }

      return arr;

    } catch (e) {
      console.log(e);
    }
  };