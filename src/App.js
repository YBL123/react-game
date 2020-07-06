import React from 'react'

class App extends React.Component {
  state = {
    grid: '.grid',
    cells: [],
    width: 10,
    cellCount: this.width * this.width,
    flareonPosition: 0
  }

  createGrid = (startingPosition) => {
    for (let i = 0; i < this.cellCount; i++) {
      const cell = document.createElement('div')
      this.grid.appendChild(cell)
      this.cells.push(cell)
      cell.textContent = i
    }
    this.cells[startingPosition].classList.add('flareonIdle')
  }

  handleKeyUp = (event) => {
    this.cells[this.flareonPosition].classList.remove('falreonIdle') // * remove pika class from old position
    const x = this.flareonPosition % this.width
    const y = Math.floor(this.flareonPosition / this.width)
    switch (event.keyCode) { // * calculate the new index
      case 39:
        if (x < this.width - 1) this.flareonPosition++
        break
      case 37:
        if (x > 0) this.flareonPosition--
        break
      case 38:
        if (y > 0) this.flareonPosition -= this.width
        break
      case 40:
        if (y < this.width - 1) this.flareonPosition += this.width
        break
      default:
        console.log('invalid key do nothing')
    }
    this.cells[this.flareonPosition].classList.add('flareonIdle') // * add the class back at the new position

    this.createGrid(this.flareonPosition)
  }


  // // * Event listeners
  // document.addEventListener('keyup', handleKeyUp)





  render() {
    return (
      <div className="grid-wrapper">
        <div className="grid"></div>
      </div>
    )
  }


}

export default App




// import React from 'react'

// //* Images
// import menuArt from './assets/menu-art.png'
// import gameOverImage from './assets/game-over-art.png'
// import flareona from './assets/flareonIdle.gif'

// class App extends React.Component {
//   state = {

//     activeFlareon: ['flareonIdle', 'flareonRight', 'flareonLeft', 'flareonUp'],

//     gameMenu: '.game-menu',
//     gameWon: '.game-won',
//     gameOver: '.game-over',
//     startButton: '#start',
//     resetButton: '#reset',
//     playAgainButton: 'play-again-button',
//     difficultyButtons: 'difficulty-button',
//     scoreDisplay: '#score-display',
//     remainingLives: '#player-lives',

//     //* Grid Variables
//     grid: '.grid',
//     width: 9,
//     cells: [],
//     cell: document.createElement('div'),
//     cellCount: (this.width * this.width),

//     //* Game Variables
//     startingPosition: 94,
//     flareonPosition: 94
//   }


//   // getData = () => {
//   // }

//   // componentDidMount() {
//   // }

//   //* game initiation. When start button is clicked menu is hidden and game grid becomes visible - then game loads
//   initiateGame = () => {
//     // this.gameMenu = this.gameMenu.style.display = 'none'
//     // this.gameWrapper = this.gameWrapper.style.display = 'flex'
//     // this.gameOver = this.gameOver.style.display = 'none'
//     // this.gameWon = this.gameWon.style.display = 'none'

//     const gameMenu = document.querySelector('.game-menu')
//     const gameWrapper = document.querySelector('.game-wrapper')
//     const gameOver = document.querySelector('.game-over')
//     const gameWon = document.querySelector('.game-won')

//     // highScoreTable.style.display = 'none'
//     gameMenu.style.display = 'none'
//     gameWrapper.style.display = 'flex'
//     gameOver.style.display = 'none'
//     gameWon.style.display = 'none'
//     // gameSounds = new Sounds()
//     // gameSounds.playBackgroundSound()  //* play background sound
//     this.startGame() //* Start Game function called here
//   }

//   // * Game Functions
//   startGame = () => {
//     this.createGrid()
//     // this.style()
//     // document.getElementById('player-lives').innerHTML = playerLives
//     // document.getElementById('score-display').innerHTML = playerScore
//     // * Event listeners
//     window.addEventListener('keydown', this.handleKeyDown)
//     this.addPlayer('flareonIdle') //* adds player
//     // loopGame() //* loops game
//   }

//   //* create grid function starts here
//   //* creates grid and then cells
//   createGrid = () => {
//     // * Grid variables
//     for (let i = 0; i < this.cellCount; i++) {
//       this.cell.textContent = i //take out later
//       this.grid.appendChild(this.cell)
//       this.cells.push(this.cell)
//     }

//     console.log('this is cells', this.cells)
//     console.log(this.startingPosition)
//     // this.cells[startingPosition].classList.add('flareonIdle')
//   }

//   //* handle key down function starts here 
//   handleKeyDown = (event) => {
//     //* remove float and flareon whether right or left if present. add Only right or left float image.
//     const x = this.flareonPosition % this.width
//     const y = Math.floor(this.flareonPosition / this.width)
//     switch (event.keyCode) { // * calculate the new index
//       case 39:
//         if ((x < this.width - 1) && (!this.cells[this.flareonPosition + 1].classList.contains('flareona'))) { //* if a flareona class is not present within cell's index if going right you may go in. If there is you may not.
//           // resetFlareonOnFloat()
//           this.flareonPosition++ //* right 
//           this.addPlayer('flareonRunRight')
//         }
//         break
//       case 37:
//         if ((x > 0) && (!this.cells[this.flareonPosition - 1].classList.contains('flareona'))) { //* if a flareona class is not present within cell's index if going left, you may go in. If there is you may not.
//           // resetFlareonOnFloat()
//           this.flareonPosition-- //* left
//           this.addPlayer('flareonRunLeft')
//         }
//         break
//       case 38:
//         if ((y > 0) && (!this.cells[this.flareonPosition - this.width].classList.contains('flareona'))) { //* if a flareona class is not present within cell's index if going up, you may go in. If there is you may not.
//           // resetFlareonOnFloat()
//           this.flareonPosition -= this.width //* up
//           // playerScore += 50  //* but need to fix it so it doesn't add points if you move down and up again
//           // scoreDisplay.textContent = playerScore 
//           this.addPlayer('flareonRunUp')
//         }
//         break
//       case 40:
//         if (y < this.width + 1) {
//           // resetFlareonOnFloat()
//           this.flareonPosition += this.width //* down
//           this.addPlayer('flareonRunDown')
//         }
//         break
//       default:
//         console.log('invalid key do nothing') //* comment out later
//     }
//   }

//       //* add player function starts here
//       addPlayer = (playerDirection) => {  
//         // this.cells[this.flareonPosition].classList.add(playerDirection, 'flareona' ) 
//       }


//   render() {
//     return (
//       <section>
//         <div className="container">

//           <div className="game-menu">
//             <div className="game-title">
//               <h1 className="game-title-flareon-h1">Flareon</h1>
//               <h2 className="game-title-flareon-h2">Frogger</h2>
//             </div>
//             <div><img className="game-menu-image" src={menuArt} alt="flareon" /></div>
//             <div className="game-instructions">
//               <p>Get all four Flareons to their beach hangout! <br /> Watch out for the Lugias! use floats to get across the water! <br /> Collect Gems!</p>
//             </div>
//             <div className="difficulty">
//               <input type="button" className="difficulty-button active-button" value="easy" />
//               <input type="button" className="difficulty-button" value="medium" />
//               <input type="button" className="difficulty-button" value="hard" />
//             </div>
//             <div className="start-game-button">
//               <button onClick={this.initiateGame} id={this.startButton}>Start!</button>
//             </div>
//           </div>

//           <div className="game-over">
//             <div>
//               <h1>Game Over</h1>
//             </div>
//             <div className="final-score">
//               You Scored
//       </div>
//             <div><img className="game-menu-image" src={gameOverImage} alt="lugia" /></div>
//             <div>
//               <button className="play-again-button">Play Again</button>
//             </div>
//           </div>

//           <div className="game-won">
//             <div>
//               <h1>Congratulations! You Won!</h1>
//             </div>
//             <div className="final-score2">
//               You Scored
//       </div>
//             <div><img className="game-menu-image" src="./assets/game-won-art.png" alt="happy-flareon" /></div>
//             <div className="score-input">
//               Enter name For High Score Chart!
//         <input type="text" />
//             </div>
//             <div>
//               <button className="play-again-button2">Play Again</button>
//             </div>
//           </div>

//           <div className="game-wrapper">
//             <div className="controls-wrapper">
//               <p>Lives: <span id="player-lives" value="easy">5</span></p>
//               <p>Score: <span id="score-display">0</span></p>
//             </div>
//             <div className="grid">
//             </div>
//             <div className="reset-button">
//               <button id="reset" className="reset">reset</button>
//             </div>
//           </div>

//           <div className="high-score-table">
//             <div>
//               {/* <h1>High Score</h1> */}
//             </div>
//             <div className="score-table">
//             </div>
//           </div>

//         </div>

//         <audio></audio>

//       </section>
//     )
//   }
// }



// export default App
