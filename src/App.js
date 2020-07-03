import React from 'react'

import menuArt from './assets/menu-art.png'
import gameOverImage from './assets/game-over-art.png'

class App extends React.Component {
  state = {
    gameMenu: '.game-menu',
    gameWon: '.game-won',
    gameOver: '.game-over',
    startButton: '#start',
    resetButton: '#reset',
    playAgainButton: 'play-again-button',
    difficultyButtons: 'difficulty-button',
    scoreDisplay: '#score-display',
    remainingLives: '#player-lives',

    // grid: '.grid',
    // gameWrapper: '.game-wrapper',
    // cells: [],
    // width: 9,
    // cellCount: (this.width * this.width) + (this.width * 2)

  }

  getData = () => {
    // // * Grid variables
    // const width = 9
    // const cellCount = (width * width) + (width * 2)
    // let cells = []
    // const grid = document.querySelector('.grid')
    // for (let i = 0; i < cellCount; i++) {
    //   const cell = grid
    //   grid.appendChild(cell)
    //   cells.push(cell)
    // }
  }


  componentDidMount() {
    // this.initiateGame()
    // this.getData()
  }

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
    // style()
    // document.getElementById('player-lives').innerHTML = playerLives
    // document.getElementById('score-display').innerHTML = playerScore
    // * Event listeners
    // window.addEventListener('keydown', handleKeyDown)
    // addPlayer('flareonIdle') //* adds player
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
      grid.appendChild(cell)
      cells.push(cell)
      // cell.textContent = i //take out later
    }
  }


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
            <div className="grid">
            </div>
            <div className="reset-button">
              <button id="reset" className="reset">reset</button>
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
