const colors = [
  'primary', 'success', 'info', 'warning', 'danger', 'basic', 
  'primary-light', 'success-light', 'info-light', 'warning-light', 'danger-light', 
  'primary-dark', 'success-dark', 'info-dark', 'warning-dark', 'danger-dark'
];

let uniqueMakes = {{data}}.reduce((unique, car, index) => {
  const isDuplicate = unique.some(item => item.label === car.make_id);
  if (!isDuplicate) {
    unique.push({
      label: car.make_id,
      value: car.make_id,
      color: colors[index % colors.length], // assign a color from the array
    });
  }
  return unique;
}, []);

// Add an option with null value
uniqueMakes.unshift({
  label: 'Any make',
  value: null,
  color: 'basic', // assign any color you like
});

return uniqueMakes;