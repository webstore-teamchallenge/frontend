import Checkbox from './components/Checkbox/Checkbox';

function App() {
  const checkboxProps = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
  ];

  return (
    <>
      APP
      <Checkbox props={checkboxProps}></Checkbox>
    </>
  );
}

export default App;
