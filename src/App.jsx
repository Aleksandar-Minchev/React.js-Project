import './App.css'

function App() {
  return (
    <>
      <div className="container">
      <form action="" name="calc" className="calculator">
      <input type="text" className="value" readonly name="txt" />
      <span className="num clear" onclick="calc.txt.value=''"><i>C</i></span>
      <span className="num" onclick="calc.txt.value+='/'"><i>/</i></span>
      <span className="num" onclick="calc.txt.value+='*'"><i>*</i></span>
      <span className="num" onclick="calc.txt.value+='7'"><i>7</i></span>
      <span className="num" onclick="calc.txt.value+='8'"><i>8</i></span>
      <span className="num" onclick="calc.txt.value+='9'"><i>9</i></span>
      <span className="num" onclick="calc.txt.value+='-'"><i>-</i></span>
      <span className="num" onclick="calc.txt.value+='4'"><i>4</i></span>
      <span className="num" onclick="calc.txt.value+='5'"><i>5</i></span>
      <span className="num" onclick="calc.txt.value+='6'"><i>6</i></span>
      <span className="num plus" onclick="calc.txt.value+='+'"><i>+</i></span>
      <span className="num" onclick="calc.txt.value+='1'"><i>1</i></span>
      <span className="num" onclick="calc.txt.value+='2'"><i>2</i></span>
      <span className="num" onclick="calc.txt.value+='3'"><i>3</i></span>
      <span className="num" onclick="calc.txt.value+='0'"><i>0</i></span>
      <span className="num" onclick="calc.txt.value+='00'"><i>00</i></span>
      <span className="num" onclick="calc.txt.value+='.'"><i>.</i></span>

      <span className="num equal" onclick="document.calc.txt.value=eval(calc.txt.value)"><i>=</i></span>
      </form>
      </div>
    </>
  )
}

export default App
