
const UseFormatNumbers = () => {

  const formatNumber = (number) => {
    if (typeof number === 'undefined') {
      return 'N/A'; 
    }
    
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  };

 return formatNumber;
}

export default UseFormatNumbers