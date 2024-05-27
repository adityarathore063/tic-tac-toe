import React, { useState } from 'react'
import '../style/Tictactoe.css'
const Tictactoe = () => {

    const [turn,setTurn] = useState('X');

    const [cells,setCells] = useState(Array(9).fill(''));

    const [winner,setWinner] = useState();

    const checkForWinner = (squares) => {
        let combos = {
            across:[
                [0,1,2],
                [3.4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal:[
                [0,4,8],
                [2,4,6]
            ]
        };

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]]===''||
                    squares[pattern[1]]===''||
                    squares[pattern[2]]===''
                ){
                    // do nothing
                }
                else if(
                    squares[pattern[0]]===squares[pattern[1]]&&
                    squares[pattern[1]]===squares[pattern[2]]
                ){
                    setWinner(squares[pattern[0]]);
                }
                else{

                }
            });
        }
    };

    const handleClick = (num) =>{
        if(cells[num]!==''){
            alert('Already Clicked');
            return;
        }
        const squares = [...cells];
        if(turn==='X'){
            squares[num] = 'X';
            setTurn('O');
        }
        else{
            squares[num] = 'O';
            setTurn('X');
        }
        checkForWinner(squares);
        setCells(squares);
    }

    const handleRestart = () =>{
        setWinner(null);
        setCells(Array(9).fill(''));
        setTurn('X');

    }
    const Cell = ({num}) =>{
        return <td onClick={()=> handleClick(num)}><h2 className='userclick'>{cells[num]}</h2></td>
    }
  return (
    <div className='container'>
        <header className='mainheading'><h1>Tic Tac Toe</h1></header>

      <table className='maintable'>
        <h3 className='turnheading'>Turn: {turn}</h3>
        
        <tbody className='tablebody'>
            <tr>
                <Cell num={0}/>
                <Cell num={1}/>
                <Cell num={2}/>
            </tr>
            <tr>
                <Cell num={3}/>
                <Cell num={4}/>
                <Cell num={5}/>
            </tr>
            <tr>
                <Cell num={6}/>
                <Cell num={7}/>
                <Cell num={8}/>
            </tr>
        </tbody>
      </table>
      <button className='restartbutton' onClick={() => handleRestart()}>Restart the Game</button>
      {winner && (
        <>
            <p className='winnermsg'><h4>{winner} is the Winner</h4></p>
        </>
      )}
    </div>
  )
}

export default Tictactoe
