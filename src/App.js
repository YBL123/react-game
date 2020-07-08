import React from 'react'

//* Images
import menuArt from './assets/menu-art.png'
import gameOverImage from './assets/game-over-art.png'
import flareona from './assets/flareonIdle.gif'

class App extends React.Component {
  state = {

    // activeFlareon: ['flareonIdle', 'flareonRight', 'flareonLeft', 'flareonUp'],

    gameMenu: '.game-menu',
    gameWon: '.game-won',
    gameOver: '.game-over',
    startButton: '#start',
    resetButton: '#reset',
    playAgainButton: 'play-again-button',
    difficultyButtons: 'difficulty-button',
    scoreDisplay: '#score-display',
    remainingLives: '#player-lives',

    //* Grid Variables
    grid: document.querySelector('.grid'),
    // grid: '.grid',
    width: 9,
    cells: [],
    cell: document.createElement('div'),
    cellCount: (this.width * this.width) + (this.width * 2),

    //* Game Variables
    startingPosition: 94,
    flareonPosition: 94
  }


  // getData = () => {
  // }

  // componentDidMount() {
  // }

  //* game initiation. When start button is clicked menu is hidden and game grid becomes visible - then game loads
  initiateGame = () => {
    const gameMenu = document.querySelector('.game-menu')
    const gameWrapper = document.querySelector('.game-wrapper')
    const gameOver = document.querySelector('.game-over')
    const gameWon = document.querySelector('.game-won')

    // highScoreTable.style.display = 'none'
    gameMenu.style.display = 'none'
    gameWrapper.style.display = 'flex'
    gameOver.style.display = 'none'
    gameWon.style.display = 'none'
    // gameSounds = new Sounds()
    // gameSounds.playBackgroundSound()  //* play background sound
    this.startGame() //* Start Game function called here
  }

  // * Game Functions
  startGame = () => {
    this.createGrid()
    // this.style()
    // document.getElementById('player-lives').innerHTML = playerLives
    // document.getElementById('score-display').innerHTML = playerScore
    // * Event listeners
    window.addEventListener('keydown', this.handleKeyDown)
    this.addPlayer('flareonIdle') //* adds player
    // loopGame() //* loops game
  }

  //* create grid function starts here
  //* creates grid and then cells
  createGrid = () => {
    // * Grid variables
    const grid = document.querySelector('.grid')
    let cells = []
    const width = 9
    const cellCount = (width * width) + (width * 2)

    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i //take out later
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  resetGame = () => {
    const gameMenu = document.querySelector('.game-menu')
    const gameWrapper = document.querySelector('.game-wrapper')
    const gameOver = document.querySelector('.game-over')
    const gameWon = document.querySelector('.game-won')

    // highScoreTable.style.display = 'none'
    gameWrapper.style.display = 'none'
    gameMenu.style.display = 'flex'
    // difficultyButtons.forEach(button => {   //* removes active button class from all so all buttons start without it.
    //   if (button.value === 'easy') {
    //     button.classList.add('active-button')
    //   } else {
    //     button.classList.remove('active-button')
    //   }
    // })
    gameOver.style.display = 'none'
    gameWon.style.display = 'none'
    // gameSounds.stopBackGroundSound()  //* stop background sound
    this.resetComponents()
  }

  resetComponents = () => {
    const grid = document.querySelector('.grid')
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild)
    }
    // clearInterval(loopFloats)
    // clearInterval(loopEnemies)
    this.cells = []
    // // * Game variables 
    // loopFloats = null
    // loopEnemies = null
    // playerLives = 5
    this.flareonPosition = this.startingPosition
    // playerOnFloatFlag = false
    // playerScore = 0
    // collisionExplosionPosition = 0
  }

  // //* handle key down function starts here 
  // handleKeyDown = (event) => {
  //   //* remove float and flareon whether right or left if present. add Only right or left float image.
  //   let flareonPosition = 94
  //   let cells = []
  //   const width = 9
  //   console.log(flareonPosition)
  //   const x = flareonPosition % width
  //   const y = Math.floor(flareonPosition / width)
  //   switch (event.keyCode) { // * calculate the new index
  //     case 39:
  //       if (x < width - 1) { //* if a flareona class is not present within cell's index if going right you may go in. If there is you may not.
  //         // resetFlareonOnFloat()
  //         flareonPosition++ //* right 
  //         this.addPlayer('flareonRunRight')
  //       }
  //       break
  //     case 37:
  //       if ((x > 0) && (!cells[flareonPosition - 1].classList.contains('flareona'))) { //* if a flareona class is not present within cell's index if going left, you may go in. If there is you may not.
  //         // resetFlareonOnFloat()
  //         flareonPosition-- //* left
  //         this.addPlayer('flareonRunLeft')
  //       }
  //       break
  //     case 38:
  //       if ((y > 0) && (!cells[flareonPosition - width].classList.contains('flareona'))) { //* if a flareona class is not present within cell's index if going up, you may go in. If there is you may not.
  //         // resetFlareonOnFloat()
  //         flareonPosition -= width //* up
  //         // playerScore += 50  //* but need to fix it so it doesn't add points if you move down and up again
  //         // scoreDisplay.textContent = playerScore 
  //         this.addPlayer('flareonRunUp')
  //       }
  //       break
  //     case 40:
  //       if (y < width + 1) {
  //         // resetFlareonOnFloat()
  //         flareonPosition += width //* down
  //         this.addPlayer('flareonRunDown')
  //       }
  //       break
  //     default:
  //       console.log('invalid key do nothing') //* comment out later
  //   }
  //   this.addPlayer('flareonRunRight')
  // }

  //* add player function starts here
  addPlayer = (playerDirection) => {
    const grid = document.querySelector('.grid')
    let flareonOnGrid = grid
    let cells = []
    let flareonPosition = 94
    flareonOnGrid.parentElement.classList.add('.flareonIdle', playerDirection)
  }

//   var mykey= document.getElementById('mykey');
// mykey.onclick = function() {
//     mykey.parentElement.classList.add("green");
// };

  render() {
    return (
      <section>
        <div className="container">

          <div className="game-menu">
            <div className="game-title">
              <h1 className="game-title-flareon-h1">Flareon</h1>
              <h2 className="game-title-flareon-h2">Frogger</h2>
            </div>
            <div><img className="game-menu-image" src={menuArt} alt="flareon" /></div>
            <div className="game-instructions">
              <p>Get all four Flareons to their beach hangout! <br /> Watch out for the Lugias! use floats to get across the water! <br /> Collect Gems!</p>
            </div>
            <div className="difficulty">
              <input type="button" className="difficulty-button active-button" value="easy" />
              <input type="button" className="difficulty-button" value="medium" />
              <input type="button" className="difficulty-button" value="hard" />
            </div>
            <div className="start-game-button">
              <button onClick={this.initiateGame} id={this.startButton}>Start!</button>
            </div>
          </div>

          <div className="game-over">
            <div>
              <h1>Game Over</h1>
            </div>
            <div className="final-score">
              You Scored
      </div>
            <div><img className="game-menu-image" src={gameOverImage} alt="lugia" /></div>
            <div>
              <button className="play-again-button">Play Again</button>
            </div>
          </div>

          <div className="game-won">
            <div>
              <h1>Congratulations! You Won!</h1>
            </div>
            <div className="final-score2">
              You Scored
      </div>
            <div><img className="game-menu-image" src="./assets/game-won-art.png" alt="happy-flareon" /></div>
            <div className="score-input">
              Enter name For High Score Chart!
        <input type="text" />
            </div>
            <div>
              <button className="play-again-button2">Play Again</button>
            </div>
          </div>

          <div className="game-wrapper">
            <div className="controls-wrapper">
              <p>Lives: <span id="player-lives" value="easy">5</span></p>
              <p>Score: <span id="score-display">0</span></p>
            </div>
            <div className="grid" id="grid">
            </div>
            <div className="reset-button">
              <button id={this.resetButton} className="reset" onClick={this.resetGame}>reset</button>
            </div>
          </div>

          <div className="high-score-table">
            <div>
              {/* <h1>High Score</h1> */}
            </div>
            <div className="score-table">
            </div>
          </div>

        </div>

        <audio></audio>

      </section>
    )
  }
}



export default App
