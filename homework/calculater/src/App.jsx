import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

const styles = {
  container: {
    padding: '30px',
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '8px 0',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  buttonGroup: {
    marginTop: '15px',
  },
  button: {
    padding: '10px 20px',
    margin: '6px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '6px',
    transition: 'background-color 0.3s',
  },
  clearButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#222',
  },
};

function App() {

  const [firstNumb, setFirstNumb] = useState('0')
  const [secondNumb, setSecondNumb] = useState('0')

  const isNumeric = (str) => {
    if (typeof str != "string") return false // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  const onChangeFirstNumb = (e) => {
    if (!isNumeric(e.target.value)) toast.error('this value should be number')
    setFirstNumb(e.target.value)
  }

  const onChangeSecondNumb = (e) => {
    setSecondNumb(e.target.value)
  }

  const sum = (a, b) => a + b
  const minus = (a, b) => a - b
  const times = (a, b) => a * b
  const divide = (a, b) => a / b

  const operator = {
    sum, minus, times, divide
  }

  const onCalculate = (operation) => {
    const result = operator[operation](Number(firstNumb), Number(secondNumb))
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

      <input
        placeholder="Số thứ nhất"
        style={styles.input}
        value={firstNumb}
        onChange={onChangeFirstNumb}
      />
      <input
        type="number"
        placeholder="Số thứ hai"
        style={styles.input}
        value={secondNumb}
        onChange={onChangeSecondNumb}
      />

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => onCalculate('sum')}>+</button>
        <button style={styles.button} onClick={() => onCalculate('minus')}>−</button>
        <button style={styles.button} onClick={() => onCalculate('times')}>×</button>
        <button style={styles.button} onClick={() => onCalculate('divide')}>÷</button>
      </div>

      <div style={styles.result}>
        <strong>Kết quả:</strong> <span>Chưa có kết quả</span>
      </div>

      <button style={styles.clearButton}>Clear</button>

      <ToastContainer/>
    </div>
  );
}

export default App
