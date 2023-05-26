function checkResult() {
  const input1 =
    document.querySelector('input[name="input1"]:checked').value === 'true'
  const input2 =
    document.querySelector('input[name="input2"]:checked').value === 'true'
  const operator = document.getElementById('operator').value

  let result = input1

  if (operator === 'constant') {
    document.querySelector(
      '.container'
    ).innerHTML = ` <input type="radio" name="input1" value="true" checked />True
    <input type="radio" name="input1" value="false" />False`
    result = input1
  } else if (operator === 'argument') {
    document.querySelector('.container').innerHTML = ` <div class="inputone">
    <label for="input1">Input 1:
    <input type="text" placeholder="my arg" value="my arg"/>
    </label>
    <input type="radio" name="input1" value="true" checked />True
    <input type="radio" name="input1" value="false" />False
    </div>
    <br />
   <div >
    <label for="input2">Input 2:
     <input type="text"  value="X" class="x"/>
    </label>
    <input type="radio" name="input2" value="true" checked />True
    <input type="radio" name="input2" value="false" />False
       </div>
    <select id="operator">
     
      <option value="&&">AND (&&)</option>
      <option value="||">OR (||)</option>
    </select>    
       
       
       `
    addInp()
  } else if (operator === '&&') {
    result = input1 && input2
  } else if (operator === '||') {
    result = input1 || input2
  }

  document.getElementById('result').innerHTML = `Result: ${result}`
}

function addInp() {
  document.querySelector('.inputtwo').style.display = 'block'
}

function reset() {
  document.getElementById('result').innerHTML = ''
  const input1Radios = document.querySelectorAll('input[name="input1"]')
  const input2Radios = document.querySelectorAll('input[name="input2"]')

  input1Radios[0].checked = true
  input2Radios[0].checked = true
  // document.querySelector('.container').style.display='none';

  document.addEventListener('DOMContentLoaded', checkResult)
}
